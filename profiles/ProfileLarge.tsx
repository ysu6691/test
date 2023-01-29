import React from "react";
import styled from "styled-components";

import { TbGenderMale, TbGenderFemale } from "react-icons/tb";

interface Iprops {
  imgSrc: string;
  animalName: string;
  gender: string;
  species: string;
}

const ProfileLarge = function (props: Iprops) {
  return (
    <Container>
      <ProfileImg src={props.imgSrc} alt="" />
      <Info>
        <Title>{props.animalName}</Title>
        <Footer>
          <FooterLeft>
            <Species>{props.species}</Species>
            <GenderBox gender={props.gender}>
              {props.gender == "male" ? <TbGenderMale size={20} /> : <TbGenderFemale size={20} />}
            </GenderBox>
          </FooterLeft>
          <DetailLink>더보기 {">"}</DetailLink>
        </Footer>
      </Info>
    </Container>
  );
};

export default ProfileLarge;

const Container = styled.div`
  width: 240px;
  height: 223px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 2px 2px 8px rgba(67, 67, 67, 0.2);
  transition: 0.3s;
  background: ${(props) => props.theme.colors.seconderyBg};
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
  padding: 8px 24px 0;
  gap: 8px;
`;

const Title = styled.span`
  font-weight: bold;
  font: ${(props) => props.theme.fonts.mainContentBold};
  color: ${(props) => props.theme.colors.primaryText};
`;

const Species = styled.span`
  font: ${(props) => props.theme.fonts.subContent};
  color: ${(props) => props.theme.colors.secondaryText};
`;

const GenderBox = styled.div<{ gender: string }>`
  width: 16px;
  height: 16px;
  color: ${(props) => (props.gender == "male" ? props.theme.colors.blue : props.theme.colors.red)};
`;

const DetailLink = styled.span`
  &:hover {
    cursor: pointer;
  }
  font: ${(props) => props.theme.fonts.tinyContent};
  color: ${(props) => props.theme.colors.secondaryText};
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
