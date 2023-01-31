import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { OpenVidu, Session } from "openvidu-browser";
import axios from "axios";
import styled from "styled-components";

function Visitor() {
  const [session, setSession] = useState<undefined | Session>(undefined); // 세션

  const OV = useMemo(() => new OpenVidu(), []);
  const APPLICATION_SERVER_URL = "http://localhost:5000/";

  const mySessionId = "123";
  const myUserName = "myUserName";

  useEffect(() => {
    setSession(OV.initSession());
  }, [OV]);

  useEffect(() => {
    joinRoom();
  }, [session]);

  // 토큰 생성
  const createToken = async function (sessionId: string) {
    const response = await axios({
      method: "post",
      url: APPLICATION_SERVER_URL + "api/sessions/" + sessionId + "/connections",
      data: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  };

  // 토큰 가져오기
  const getToken = async function () {
    return await createToken(mySessionId);
  };

  // 세션 입장
  const joinRoom = async function () {
    getToken()
      .then((token: string) => {
        session?.connect(token, { clientData: myUserName }).then(async () => {
          console.log("연결 성공");
        });
      })
      .catch((err) => console.log(err));
  };

  // 스트리밍 화면 출력
  const streamRef = useRef<HTMLVideoElement>(null);
  session?.on("streamCreated", (event) => {
    const ownerStream = session.subscribe(event.stream, streamRef.current!);
    ownerStream.addVideoElement(streamRef.current!);
  });

  return (
    <StyledContainer>
      <StyledVideo autoPlay={true} ref={streamRef} />
    </StyledContainer>
  );
}

export default Visitor;

const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledVideo = styled.video`
  width: 100%;
`;
