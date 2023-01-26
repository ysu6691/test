import React from "react";
import styled from "styled-components";

interface Iprops {
  imgSrc: string;
  storeName: string;
}

const ProfileStore = function (props: Iprops) {
  return (
    <Container>
      <ImgBox>
        <StoreImg src={props.imgSrc} alt="" />
      </ImgBox>
      <StoreName>{props.storeName}</StoreName>
    </Container>
  );
};

export default ProfileStore;

const Container = styled.div`
  width: 240px;
  height: 88px;
  border-radius: 32px;
  background-color: #f1a604;
  // light: mango yellow 700 / dark: dark error
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 12px;
  box-sizing: border-box;
  box-shadow: 2px 2px 8px rgba(67, 67, 67, 0.2);
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const ImgBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 70%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StoreImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StoreName = styled.span`
  color: white;
  // main content bold
  // light: basalt gray 50 / dark: basalt gray 800
`;
