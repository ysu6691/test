import styled from 'styled-components';

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

const Container = styled.div`
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
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
