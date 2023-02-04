import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { OpenVidu, Session, Subscriber, Device, Publisher } from "openvidu-browser";
import axios from "axios";

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(callback); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

  useEffect(() => {
    savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
    }
    if (delay !== null) {
      // 만약 delay가 null이 아니라면
      const id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
      return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
    }
  }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
}

const Owner = function () {
  const [session, setSession] = useState<undefined | Session>(undefined); // 세션
  const [publisher, setPublisher] = useState<Publisher | undefined>(undefined); // 로컬 스트림
  const [numberOfLikes, setNumberOfLikes] = useState<number>(0);
  // const [mainStreamManager, setMainStreamManager] = useState<
  //   Publisher | undefined
  // >(undefined); // 메인 스트림
  // const [currentVideoDevice, setCurrentVideoDevice] = useState<
  //   Device | undefined
  // >(undefined); // 현재 비디오 출력중인 기기

  // http://localhost:5000/
  // http://43.200.173.117:5000/
  // http://heesootory.store/test/
  const OV = useMemo(() => new OpenVidu(), []);
  const APPLICATION_SERVER_URL = "https://heesootory.store/test/";
  let mySessionId: string;
  let myUserName: string;

  useEffect(() => {
    const newSession = OV.initSession();
    newSession.on("connectionCreated", (event) => {
      newSession.signal({
        data: mySessionId,
        to: [event.connection],
        type: "welcome",
      });
    });
    newSession.on("signal:vote", (event) => {
      console.log(event.data);
    });
    setSession(newSession);
  }, [OV]);

  // 세션 생성
  const createSession = async function (sessionId: string): Promise<string> {
    const response = await axios({
      method: "post",
      url: APPLICATION_SERVER_URL + "api/sessions",
      data: JSON.stringify({ customSessionId: sessionId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.data;
  };

  // 토큰 생성
  const createToken = async function (sessionId: string) {
    const response = await axios({
      method: "post",
      url: APPLICATION_SERVER_URL + "api/sessions/" + sessionId + "/connections",
      data: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

  // 토큰 가져오기
  const getToken = async function () {
    const sessionId = await createSession(mySessionId);
    return await createToken(sessionId);
  };

  // 세션 입장
  const mySessionIdInputRef = useRef<HTMLInputElement>(null);
  const myUserNameInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<HTMLVideoElement>(null);
  const joinRoom = async function (event: FormEvent) {
    event.preventDefault();
    mySessionId = mySessionIdInputRef.current!.value;
    myUserName = myUserNameInputRef.current!.value;
    getToken()
      .then((token: string) => {
        session?.connect(token, { clientData: myUserName }).then(async () => {
          const newPublisher = await OV.initPublisherAsync(undefined, {
            audioSource: undefined, // The source of audio. If undefined default microphone
            videoSource: undefined, // The source of video. If undefined default webcam
            publishAudio: false, // Whether you want to start publishing with your audio unmuted or not
            publishVideo: true, // Whether you want to start publishing with your video enabled or not
            resolution: "1920x1080", // The resolution of your video
            frameRate: 30, // The frame rate of your video
            insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
            mirror: true, // Whether to mirror your local video or not
          });

          // 세션에 스트리밍 등록
          session.publish(newPublisher);

          // 현재 사용 가능한 비디오 가져오기
          // const devices = await OV.getDevices();
          // const videoDevices = devices.filter(
          //   (device) => device.kind === "videoinput"
          // );
          // const currentVideoDeviceId = newPublisher.stream
          //   .getMediaStream()
          //   .getVideoTracks()[0]
          //   .getSettings().deviceId;
          // const newCurrentVideoDevice = videoDevices.find(
          //   (device) => device.deviceId === currentVideoDeviceId
          // );

          // 사업자 스트리밍 출력
          newPublisher.addVideoElement(streamRef.current!);
          setPublisher(newPublisher);

          // setCurrentVideoDevice(newCurrentVideoDevice);
          // setMainStreamManager(newPublisher);
        });
      })
      .catch((err) => console.log(err));
  };

  // 세션 나가기
  const leaveSession = function (sessionId: string) {
    mySessionId = mySessionIdInputRef.current!.value;
    session?.disconnect();
    disConnection(mySessionId);
  };

  // 세션 나가는거 back에 알려주기
  const disConnection = async function (sessionId: string) {
    const response = await axios({
      method: "post",
      url: APPLICATION_SERVER_URL + "api/sessions/" + sessionId + "/disconnect",
      data: JSON.stringify({
        nickname: myUserName,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.data);
  };

  // 새로운 커넥션 생길 때마다 사업자 정보 보내기
  // session?.on("connectionCreated", (event) => {
  //   console.log(session.remoteConnections.size);
  //   session?.signal({
  //     data: mySessionId,
  //     to: [event.connection],
  //     type: "welcome",
  //   });
  // });

  // 뱃지 뿌리기
  const sendBadge = function (event: FormEvent) {
    event.preventDefault();
    session
      ?.signal({
        data: "",
        to: [],
        type: "badge",
      })
      .then(() => {
        console.log("메세지 보냄");
      })
      .catch((err) => console.log(err));
  };

  // 투표 받기
  // session?.on("signal:vote", (event) => {
  //   console.log(event.data);
  // });

  // console.log("p:", publisher);
  // console.log("m: ", mainStreamManager);
  // console.log("c: ", currentVideoDevice);

  useInterval(() => {
    if (session !== undefined) {
      session.on("signal:like", () => {
        setNumberOfLikes(numberOfLikes + 1);
      });
      session.on("signal:dislike", () => {
        setNumberOfLikes(numberOfLikes - 1);
      });
      session.signal({
        data: numberOfLikes.toString(),
        to: [],
        type: "numberOfLikes",
      });
    }
  }, 4000);

  return (
    <div>
      <h1>방장</h1>
      <form onSubmit={joinRoom}>
        <input type="text" placeholder="세션 ID" ref={mySessionIdInputRef} />
        <input type="text" placeholder="닉네임" ref={myUserNameInputRef} />
        <button>입장</button>
      </form>
      <button onClick={() => leaveSession(mySessionId)}>퇴장</button>
      <form onSubmit={sendBadge}>
        <button>뱃지 뿌리기</button>
      </form>
      <video autoPlay={true} ref={streamRef} />
    </div>
  );
};

export default Owner;
