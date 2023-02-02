import React, { useState } from "react";
import styled from "styled-components";

import { ProfileStore, ProfileLarge } from "../common/profile/index";
import BroadcastContent from "./BroadcastContent";
import BroadcastScreen from "./BroadcastScreen";
import BroadcastRecommendations from "./BroadcastRecommendations";
import Grid from "@mui/material/Grid";

// 임시 방송 정보
const tmpBroadcastInfo = {
  title: "우파루파 먹방",
  detail: "우리 우파루파 얼마나 맛있게 먹는지 보러 올 사람?",
};

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
    <Grid key={animal.id} item xs={12} sm={6} md={12}>
      <ProfileLarge
        animalName={animal.animalName}
        gender={animal.gender}
        classification={animal.classification}
        imgSrc={animal.imgSrc}
      />
    </Grid>
  );
});

// 임시 먹이 리스트
const tmpFeedList = [
  { id: 1, feedName: "귀뚜라미", imgSrc: "https://picsum.photos/200/300" },
  { id: 2, feedName: "지렁이", imgSrc: "https://picsum.photos/200/300" },
  { id: 3, feedName: "쥐", imgSrc: "https://picsum.photos/200/300" },
  { id: 4, feedName: "곤충젤리", imgSrc: "https://picsum.photos/200/300" },
];

const Broadcast = function () {
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [selectedFeed, setSelectedFeed] = useState<string | null>(null);
  const [isVoted, setIsVoted] = useState<boolean>(false);

  return (
    <StyledFragment>
      <StyledContainer>
        <StyledLeftSection>
          <BroadcastScreen
            title={tmpBroadcastInfo.title}
            isMaximized={isMaximized}
            toggleScreenMode={() => setIsMaximized(!isMaximized)}
            feedList={tmpFeedList}
            selectedFeed={selectedFeed}
            vote={(selectedFeed) => {
              setSelectedFeed(selectedFeed);
              setIsVoted(true);
            }}
            isVoted={isVoted}
          />
          {!isMaximized && (
            <BroadcastContent
              title={tmpBroadcastInfo.title}
              detail={tmpBroadcastInfo.detail}
              feedList={tmpFeedList}
              vote={(selectedFeed) => {
                setSelectedFeed(selectedFeed);
                setIsVoted(true);
              }}
              isVoted={isVoted}
              like={like}
            />
          )}
        </StyledLeftSection>
        {!isMaximized && (
          <StyledRightSection>
            <ProfileStore storeName="우파파 움파파" imgSrc="https://picsum.photos/200/300" />
            <Grid container spacing={4}>
              {animalProfileList}
            </Grid>
            <BroadcastRecommendations />
          </StyledRightSection>
        )}
      </StyledContainer>
    </StyledFragment>
  );
};

export default Broadcast;

const StyledFragment = styled.div``;

const StyledContainer = styled.div`
  box-sizing: border-box;
  padding: 0 8.75vw;
  background-color: ${(props) => props.theme.colors.primaryBg};
  width: 100vw;
  height: 100%;
  display: flex;
  gap: 32px;
  min-width: 1100px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    padding: 0 2vw;
    min-width: 465px;
  }
`;

const StyledLeftSection = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
  }
`;

const StyledRightSection = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 900px) {
    width: 100%;
    flex-wrap 
  }
  @media screen and (max-width: 600px) {
  }
`;
