import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { TbPlayerPlay } from "react-icons/tb";

interface Iprops {
  imgSrc: string;
  title: string;
}

const CardLabelMedium = function (props: Iprops) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Container onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <CardImgBox>
        {isHovered && (
          <TbPlayerPlayBox>
            <TbPlayerPlay size={40} />
          </TbPlayerPlayBox>
        )}
        <CardImg isHovered={isHovered} src={props.imgSrc} alt="" />
      </CardImgBox>
      <CardTitle>{props.title}</CardTitle>
    </Container>
  );
};

export default CardLabelMedium;

const Container = styled.div`
  width: 240px;
  height: 200px;
  &:hover {
    cursor: pointer;
  }
`;

const CardImgBox = styled.div`
  position: relative;
`;

const CardImg = styled.img<{ isHovered: boolean }>`
  width: 100%;
  border-radius: 32px;
  object-fit: cover;
  box-shadow: 2px 2px 8px rgba(67, 67, 67, 0.2);
  transition: all 0.2s;
  filter: ${(props) => (props.isHovered ? "brightness(70%)" : "")};
`;

const TbPlayerPlayBox = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; // light & dark: basalt gray 50
`;

const CardTitle = styled.span`
  font-weight: bold;
  // main content bold
  // light: basalt gray 50 / dark: basalt gray 900
`;
