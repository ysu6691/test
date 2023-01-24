import { useState } from 'react';
import styled from 'styled-components';

interface Iprops {
  imgSrc: string;
  title: string;
}

const CardLabelMediumLight = function (props: Iprops) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const playIconSrc = require('../../imgs/card_play_icon.png');

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardImgBox>
        {isHovered && <PlayIcon src={playIconSrc} alt="" />}
        <CardImg isHovered={isHovered} src={props.imgSrc} alt="" />
      </CardImgBox>
      <CardTitle>{props.title}</CardTitle>
    </Container>
  );
};

export default CardLabelMediumLight;

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

const CardTitle = styled.span`
  font-weight: bold;
  // main content bold
  // basalt gray 900
`;
