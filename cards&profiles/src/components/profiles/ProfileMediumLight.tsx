import styled from 'styled-components';

interface Iprops {
  imgSrc: string;
}

const ProfileMediumLight = function (props: Iprops) {
  return (
    <Container>
      <ProfileImg src={props.imgSrc} alt="" />
    </Container>
  );
};

export default ProfileMediumLight;

const Container = styled.div`
  width: 96px;
  height: 96px;
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
