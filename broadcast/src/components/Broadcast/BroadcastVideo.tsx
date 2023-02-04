import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Connection, OpenVidu, Session } from "openvidu-browser";
import axios from "axios";
import styled from "styled-components";

interface IProps {
  selectedFeed: string | null;
  isLiked: boolean;
  onClick: () => void;
  changeNumberOfViewers: (viewers: number) => void;
  changeNumberOfLikes: (likes: number) => void;
}

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

function BroadcastVideo(props: IProps) {
  const [session, setSession] = useState<Session | undefined>(undefined);
  const [ownerConnection, setOwnerConnection] = useState<Connection | undefined>(undefined);

  const OV = useMemo(() => new OpenVidu(), []);
  const APPLICATION_SERVER_URL = "http://localhost:5000/";

  const mySessionId = "1234";
  const myUserName = "myUserName1";

  // useEffect(() => {
  //   setSession(OV.initSession());
  // }, [OV]);

  // 스트리밍 화면 출력
  const streamRef = useRef<HTMLVideoElement>(null);

  // 세션 생성
  useEffect(() => {
    const newSession = OV.initSession();
    newSession.on("streamCreated", (event) => {
      const ownerStream = newSession.subscribe(event.stream, streamRef.current!);
      ownerStream?.addVideoElement(streamRef.current!);
    });
    // 메세지 받기
    newSession.on("signal", (event) => {
      // 초기 입장할 때 사업자 정보 받아서 저장
      if (event.type === "signal:welcome") {
        setOwnerConnection(event.from);
      }
      if (event.type === "signal:badge") {
        console.log("뱃지 받았다");
      }
      if (event.type === "signal:numberOfLikes") {
        if (event.data !== undefined) {
          props.changeNumberOfLikes(Number(event.data));
        }
      }
    });
    setSession(newSession);
  }, [OV]);

  // 토큰 생성
  const createToken = async function (sessionId: string) {
    const response = await axios({
      method: "post",
      url: APPLICATION_SERVER_URL + "api/sessions/" + sessionId + "/connections",
      data: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    return response.data;
  };

  // 토큰 가져오기
  // const getToken = async function () {
  //   return await createToken(mySessionId);
  // };

  // 방 입장
  useEffect(() => {
    if (session !== undefined) {
      createToken(mySessionId).then((token: string) => {
        session.connect(token, { clientData: myUserName });
      });
    }
    return () => session?.disconnect();
  }, [session]);

  // 세션 입장
  // const joinRoom = function () {
  //   getToken().then((token: string) => {
  //     if (session === undefined) {
  //       return;
  //     }
  //     session.connect(token, { clientData: myUserName });
  //   });
  // };

  useEffect(() => {
    if (props.selectedFeed === null || ownerConnection === undefined) {
      return;
    }
    session?.signal({
      data: props.selectedFeed,
      to: [ownerConnection],
      type: "vote",
    });
  }, [props.selectedFeed, ownerConnection]);

  useEffect(() => {
    if (ownerConnection === undefined) {
      return;
    }
    console.log("asdfadsfdsafdsa");
    if (props.isLiked) {
      session?.signal({
        data: "",
        to: [ownerConnection],
        type: "dislike",
      });
    } else {
      session?.signal({
        data: "",
        to: [ownerConnection],
        type: "like",
      });
    }
  }, [props.isLiked, ownerConnection]);

  useInterval(() => {
    if (session !== undefined) {
      props.changeNumberOfViewers(session?.remoteConnections.size);
    }
  }, 4000);

  return (
    <StyledContainer onClick={props.onClick}>
      <StyledVideo autoPlay={true} ref={streamRef} />
    </StyledContainer>
  );
}

export default BroadcastVideo;

const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const StyledVideo = styled.video`
  width: 100%;
`;
