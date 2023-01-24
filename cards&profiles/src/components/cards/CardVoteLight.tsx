import { useState } from 'react';
import styled from 'styled-components';

interface Iprops {
  imgSrc: string;
  title: string;
}

const CardVoteLight = function (props: Iprops) {
  // prop으로 받을지는 나중에 설정
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container
      isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    >
      <CardImg src={props.imgSrc} alt="" />
      <CardTitle>{props.title}</CardTitle>
      <CardInnerShadow />
    </Container>
  );
};

export default CardVoteLight;

const Container = styled.div<{ isSelected: boolean }>`
  width: 240px;
  height: 160px;
  border-radius: 32px;
  box-shadow: 2px 2px 8px rgba(67, 67, 67, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  // mango yellow 600
  border: ${(props) => (props.isSelected ? '8px solid yellow' : '')};
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
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
  // basalt gray 50
  // main content bold
`;

const CardInnerShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 64px;
  bottom: 0px;
  background: linear-gradient(
    to top,
    rgba(58, 57, 72, 0.72),
    rgba(58, 57, 72, 0)
  );
`;
