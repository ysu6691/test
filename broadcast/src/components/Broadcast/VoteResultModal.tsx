import React from "react";
import styled, { keyframes } from "styled-components";

import { CardNotLabel } from "../common/card/index";

interface Iprops {
  feedName: string;
  imgSrc: string;
  closeModal: () => void;
}

const VoteResultModal = function (props: Iprops) {
  return (
    <StyledModal onClick={props.closeModal}>
      <StyledBlackDiv />
      <SytledIframe src="https://embed.lottiefiles.com/animation/32585" />
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

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.7;
  }
`;

const StyledBlackDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 1;
  animation: ${boxFade} 2s linear;
`;

const SytledIframe = styled.iframe`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: -50px;
  left: 0;
  pointer-events: none;
  z-index: 3;
`;

const StyledContainer = styled.div`
  width: 646px;
  height: 620px;
  border-radius: 32px;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.brandColors.basaltGray["50"]};
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  box-sizing: border-box;
  padding: 112px 32px;
`;

const StyledHeader2 = styled.span`
  font: ${(props) => props.theme.fonts.header2};
`;

const StyledHeader3 = styled.span`
  font: ${(props) => props.theme.fonts.header3};
`;
