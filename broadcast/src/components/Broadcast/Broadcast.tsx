import React from "react";
import styled from "styled-components";
import BroadcastContent from "./BroadcastContent";
import BroadcastScreen from "./BroadcastScreen";

import { ProfileStore, ProfileLarge } from "../common/profile/index";
import BroadcastRecommendations from "./BroadcastRecommendations";

// 임시 동물 목록
const tmpAnimalList = [
  {
    id: 1,
    animalName: "우파파",
    gender: "male",
    classification: "axolotl",
    imgSrc: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    animalName: "움파파",
    gender: "female",
    classification: "snake",
    imgSrc: "https://picsum.photos/200/300",
  },
];

const animalProfileList = tmpAnimalList.map((animal) => {
  return (
    <ProfileLarge
      key={animal.id}
      animalName={animal.animalName}
      gender={animal.gender}
      classification={animal.classification}
      imgSrc={animal.imgSrc}
    />
  );
});

const Broadcast = function () {
  return (
    <StyledContainer>
      <StyledLeftSection>
        <BroadcastScreen />
        <BroadcastContent />
      </StyledLeftSection>
      <StyledRightSection>
        <ProfileStore storeName="마리쥬 파충류 샵" imgSrc="https://picsum.photos/200/300" />
        {animalProfileList}
        <BroadcastRecommendations />
      </StyledRightSection>
    </StyledContainer>
  );
};

export default Broadcast;

const StyledContainer = styled.div`
  box-sizing: border-box;
  padding: 0 8.75vw;
  background-color: ${(props) => props.theme.colors.primaryBg};
  width: 100vw;
  height: 100%;
  display: flex;
  gap: 32px;
`;

const StyledLeftSection = styled.div`
  width: 74%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledRightSection = styled.div`
  width: 26%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
