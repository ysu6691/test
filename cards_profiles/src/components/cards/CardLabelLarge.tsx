import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

import { TbPlayerPlay } from "react-icons/tb";

interface Iprops {
  thumbnailSrc: string;
  animalList: { species: string }[];
  title: string;
}

// 다 같은 종이지만 우선 다 다른 종이라고 가정
const CardLabelLarge = function (props: Iprops) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Container onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <CardImgBox>
        {isHovered && (
          <TbPlayerPlayBox>
            <TbPlayerPlay size={60} />
          </TbPlayerPlayBox>
        )}
        <Thumbnail isHovered={isHovered} src={props.thumbnailSrc} alt="" />
        <SpeciesFirstImg
          src={require(`../../imgs/${props.animalList[0].species}.jfif`)}
          alt=""
          isHovered={isHovered}
        />
        {props.animalList.length > 1 ? (
          <SpeciesSecondImg
            src={require(`../../imgs/${props.animalList[1].species}.jfif`)}
            alt=""
            isHovered={isHovered}
          />
        ) : (
          ""
        )}
        {props.animalList.length > 2 ? (
          <SpeciesRemainCnt isHovered={isHovered}>+{props.animalList.length - 2}</SpeciesRemainCnt>
        ) : (
          ""
        )}
      </CardImgBox>
      <CardTitle>{props.title}</CardTitle>
    </Container>
  );
};

export default CardLabelLarge;

const Container = styled.div`
  width: 285px;
  height: 247px;
  &:hover {
    cursor: pointer;
  }
`;

const CardImgBox = styled.div`
  position: relative;
`;

const Thumbnail = styled.img<{ isHovered: boolean }>`
  width: 100%;
  border-radius: 32px;
  object-fit: cover;
  box-shadow: 2px 2px 8px rgba(67, 67, 67, 0.2);
  transition: all 0.2s;
  filter: ${(props) => (props.isHovered ? "brightness(70%)" : "")};
`;

const TbPlayerPlayBox = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; // light & dark: basalt gray 50
`;

const jump = keyframes`
  0% {
    top: 112px;
  }

  50% {
    top: 104px;
  }

  100% {
    top: 112px;
  }
`;

const SpeciesFirstImg = styled.img<{ isHovered: boolean }>`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 70%;
  object-fit: cover;
  top: 112px;
  left: 12px;
  // light & dark: basalt gray 50
  border: 3px solid white;
  z-index: 3;
  transition: all 0.2s;
  filter: ${(props) => (props.isHovered ? "brightness(70%)" : "")};
  animation: ${jump} 1s ease-out infinite;
`;

const SpeciesSecondImg = styled.img<{ isHovered: boolean }>`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 70%;
  object-fit: cover;
  top: 112px;
  left: 44px;
  // light & dark: basalt gray 50
  border: 3px solid white;
  z-index: 2;
  transition: all 0.2s;
  filter: ${(props) => (props.isHovered ? "brightness(70%)" : "")};
`;

const SpeciesRemainCnt = styled.div<{ isHovered: boolean }>`
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 70%;
  top: 112px;
  left: 76px;
  padding-top: 14px;
  padding-left: 20px;
  border: 3px solid white; // light & dark: basalt gray 50
  z-index: 1;
  color: white; // light & dark: basalt gray 50
  // tiny content bold
  font-weight: bold;
  font-size: 14px;
  background-color: #a2a0b1; // light & dark: basalt gray 400
  box-sizing: border-box;
  transition: all 0.2s;
  filter: ${(props) => (props.isHovered ? "brightness(70%)" : "")};
`;

const CardTitle = styled.span`
  font-weight: bold;
  // main content bold
  // basalt gray 900
`;
