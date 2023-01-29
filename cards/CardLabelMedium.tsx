import React from "react";
import styled from "styled-components";

import { TbPlayerPlay } from "react-icons/tb";

interface Iprops {
  imgSrc: string;
  title: string;
}

const CardLabelMedium = function (props: Iprops) {
  return (
    <Container>
      <CardImgBox>
        <TbPlayerPlayBox>
          <TbPlayerPlay size={40} />
        </TbPlayerPlayBox>
        <CardImg src={props.imgSrc} alt="" />
      </CardImgBox>
      <CardTitle>{props.title}</CardTitle>
    </Container>
  );
};

export default CardLabelMedium;

const Container = styled.div`
  width: 240px;
  height: 200px;
  cursor: pointer;
`;

const TbPlayerPlayBox = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
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
  &:hover ${TbPlayerPlayBox} {
    display: flex;
  }
`;

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
  ${(props) => props.theme.styles.card}
`;

const CardTitle = styled.span`
  font: ${(props) => props.theme.fonts.mainContentBold};
  color: ${(props) => props.theme.colors.primaryText};
`;
