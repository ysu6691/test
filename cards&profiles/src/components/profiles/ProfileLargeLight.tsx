import styled from 'styled-components';

interface Iprops {
  imgSrc: string;
  animalName: string;
  gender: string;
  species: string;
}

const ProfileLargeLight = function (props: Iprops) {
  const genderImgSrc = require(`../../imgs/${props.gender}.svg`);

  return (
    <Container>
      <ProfileImg src={props.imgSrc} alt="" />
      <Info>
        <Title>{props.animalName}</Title>
        <Footer>
          <FooterLeft>
            <Species>{props.species}</Species>
            <Gender src={genderImgSrc} alt="" />
          </FooterLeft>
          <DetailLink>더보기 {'>'}</DetailLink>
        </Footer>
      </Info>
    </Container>
  );
};

export default ProfileLargeLight;

const Container = styled.div`
  width: 240px;
  height: 223px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 2px 2px 8px rgba(67, 67, 67, 0.2);
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 24px 0;
  gap: 8px;
`;

const Title = styled.span`
  font-weight: bold;
  // main content bold
  // basalt gray 900
`;

const Species = styled.span`
  // sub content
  // basalt gray 600
`;

const Gender = styled.img`
  width: 16px;
  height: 16px;
`;

const DetailLink = styled.span`
  &:hover {
    cursor: pointer;
  }
  // tiny content
  // basalt gray 600
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
