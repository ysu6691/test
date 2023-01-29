import React from "react";
import styled from "styled-components";

import { TbPlayerPlay } from "react-icons/tb";

interface Iprops {
  thumbnailSrc: string;
  animalList: { species: string }[];
  title: string;
}

// 다 같은 종이지만 우선 다 다른 종이라고 가정
const CardLabelLarge = function (props: Iprops) {
  return (
    <Container>
      <CardImgBox>
        <TbPlayerPlayBox>
          <TbPlayerPlay size={60} />
        </TbPlayerPlayBox>
        <Thumbnail src={props.thumbnailSrc} alt="" />
        <SpeciesFirstImg src={require(`../../imgs/${props.animalList[0].species}.jfif`)} alt="" />
        {props.animalList.length > 1 ? (
          <SpeciesSecondImg
            src={require(`../../imgs/${props.animalList[1].species}.jfif`)}
            alt=""
          />
        ) : (
          ""
        )}
        {props.animalList.length > 2 ? (
          <SpeciesRemainCnt>+{props.animalList.length - 2}</SpeciesRemainCnt>
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
`;

const TbPlayerPlayBox = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.brandColors.basaltGray["50"]};
  display: none;
`;

const CardImgBox = styled.div`
  position: relative;
  ${(props) => props.theme.styles.card}
  cursor: pointer;
  &:hover ${TbPlayerPlayBox} {
    display: flex;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 32px;
`;

const SpeciesFirstImg = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 70%;
  object-fit: cover;
  top: 112px;
  left: 12px;
  z-index: 3;
  border: 3px solid ${(props) => props.theme.colors.primaryBg};
`;

const SpeciesSecondImg = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 70%;
  object-fit: cover;
  top: 112px;
  left: 44px;
  z-index: 2;
  border: 3px solid ${(props) => props.theme.colors.primaryBg};
`;

const SpeciesRemainCnt = styled.div`
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 70%;
  top: 112px;
  left: 76px;
  padding-top: 14px;
  padding-left: 20px;
  z-index: 1;
  box-sizing: border-box;
  border: 3px solid ${(props) => props.theme.colors.primaryBg};
  color: ${(props) => props.theme.colors.primaryBg};
  font: ${(props) => props.theme.fonts.tinyContentBold};
  background-color: ${(props) => props.theme.colors.brandColors.basaltGray["400"]};
`;

const CardTitle = styled.span`
  font: ${(props) => props.theme.fonts.mainContentBold};
  cursor: pointer;
`;
