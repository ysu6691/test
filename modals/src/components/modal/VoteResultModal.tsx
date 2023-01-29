import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardNotLabel from "../cards/CardNotLabel";

interface Iprops {
  feedName: string;
  imgSrc: string;
}

const VoteResultModal = function (props: Iprops) {
  // 애니메이션 자동 재생 막기
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
  }, []);

  return (
    <StyledModal>
      {isPlaying && <SytledIframe src="https://embed.lottiefiles.com/animation/32585" />}
      <StyledContainer>
        <StyledHeader2>먹이 투표 결과</StyledHeader2>
        <CardNotLabel imgSrc={props.imgSrc} />
        <StyledHeader2>1등</StyledHeader2>
        <StyledHeader3>{props.feedName}</StyledHeader3>
      </StyledContainer>
    </StyledModal>
  );
};

export default VoteResultModal;

const StyledModal = styled.div``;

const SytledIframe = styled.iframe`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99;
`;

const StyledContainer = styled.div`
  width: 646px;
  height: 620px;
  border-radius: 32px;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 98;
  color: ${(props) => props.theme.colors.primaryText};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  box-sizing: border-box;
  padding: 112px 32px;
`;

const StyledHeader2 = styled.span`
  font: ${(props) => props.theme.fonts.header2};
  font-weight: 800;
`;

const StyledHeader3 = styled.span`
  font: ${(props) => props.theme.fonts.header3};
  font-weight: 800;
`;
