import React from "react";
import styled from "styled-components";

interface Iprops {
  imgSrc: string;
}

const CardNotLabel = function (props: Iprops) {
  return (
    <Container>
      <CardImg src={props.imgSrc} alt="" />
    </Container>
  );
};

export default CardNotLabel;

// 얘도 공통 card 속성 필요한지?
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
