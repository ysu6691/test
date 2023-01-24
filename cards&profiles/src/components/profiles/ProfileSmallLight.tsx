import styled from 'styled-components';

interface Iprops {
  imgSrc: string;
}

const ProfileSmallLight = function (props: Iprops) {
  return (
    <Container>
      <ProfileImg src={props.imgSrc} alt="" />
    </Container>
  );
};

export default ProfileSmallLight;

const Container = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 70%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(70%);
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
