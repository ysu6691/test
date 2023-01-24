import { useState } from 'react';
import styled from 'styled-components';

interface Iprops {
  thumbnailSrc: string;
  animalList: { species: string }[];
  title: string;
}

// 다 같은 종이지만 우선 다 다른 종이라고 가정
const CardLabelLarge = function (props: Iprops) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const playIconSrc = require('../../imgs/card_play_icon.png');

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardImgBox>
        {isHovered && <PlayIcon src={playIconSrc} alt="" />}
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
          ''
        )}
        {props.animalList.length > 2 ? (
          <SpeciesRemainCnt isHovered={isHovered}>
            +{props.animalList.length - 2}
          </SpeciesRemainCnt>
        ) : (
          ''
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
  filter: ${(props) => (props.isHovered ? 'brightness(70%)' : '')};
`;

const PlayIcon = styled.img`
  position: absolute;
  width: 28px;
  height: 36px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

const SpeciesFirstImg = styled.img<{ isHovered: boolean }>`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 70%;
  object-fit: cover;
  top: 112px;
  left: 12px;
  // basalt gray 50
  border: 3px solid white;
  z-index: 3;
  filter: ${(props) => (props.isHovered ? 'brightness(70%)' : '')};
`;

const SpeciesSecondImg = styled.img<{ isHovered: boolean }>`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 70%;
  object-fit: cover;
  top: 112px;
  left: 44px;
  // basalt gray 50
  border: 3px solid white;
  z-index: 2;
  filter: ${(props) => (props.isHovered ? 'brightness(70%)' : '')};
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
  border: 3px solid white; // basalt gray 50
  z-index: 1;
  color: white; // basalt gray 50
  // tiny content bold
  font-weight: bold;
  font-size: 14px;
  background-color: #a2a0b1; // basalt gray 400
  box-sizing: border-box;
  filter: ${(props) => (props.isHovered ? 'brightness(70%)' : '')};
`;

const CardTitle = styled.span`
  font-weight: bold;
  // main content bold
  // basalt gray 900
`;
