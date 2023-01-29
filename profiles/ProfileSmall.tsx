import React from "react";
import styled from "styled-components";

interface Iprops {
  imgSrc: string;
}

const ProfileSmall = function (props: Iprops) {
  return (
    <Container>
      <ProfileImg src={props.imgSrc} alt="" />
    </Container>
  );
};

export default ProfileSmall;

const Container = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 70%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(0.9);
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
