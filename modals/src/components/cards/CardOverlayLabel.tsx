import React from "react";
import styled from "styled-components";

interface Iprops {
  imgSrc: string;
  title: string;
}

const CardOverlayLabel = function (props: Iprops) {
  return (
    <Container>
      <CardImg src={props.imgSrc} alt="" />
      <CardTitle>{props.title}</CardTitle>
      <CardInnerShadow />
    </Container>
  );
};

export default CardOverlayLabel;

const Container = styled.div`
  width: 240px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  ${(props) => props.theme.styles.card}
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.span`
  position: absolute;
  top: 75%;
  left: 10%;
  color: white;
  z-index: 99;
  font: ${(props) => props.theme.fonts.mainContentBold};
  color: ${(props) => props.theme.colors.brandColors.basaltGray["50"]};
`;

const CardInnerShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 64px;
  bottom: 0px;
  background: linear-gradient(to top, rgba(58, 57, 72, 0.72), rgba(58, 57, 72, 0));
`;
