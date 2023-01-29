import React from "react";
import "./App.css";

import styled, { ThemeProvider } from "styled-components";

import { darkTheme } from "./styles/themes/darkTheme";
import { lightTheme } from "./styles/themes/lightTheme";
import useTheme from "./styles/themes/useTheme";
import Itheme from "./styles/themes/theme";
import ThemeBtn from "./components/common/button/ThemeBtn";
import LikeBtn from "./components/common/button/LikeBtn";
import CardLabelMedium from "./components/cards/CardLabelMedium";
import CardVote from "./components/cards/CardVote";
import CardOverlayLabel from "./components/cards/CardOverlayLabel";
import CardNotLabel from "./components/cards/CardNotLabel";
import CardLabelLarge from "./components/cards/CardLabelLarge";

function App() {
  const [themeMode, toggleTheme] = useTheme();
  const theme: Itheme = themeMode === "light" ? lightTheme : darkTheme;

  const sampleAnimal = {
    animalName: "우파루파파",
    // 이미지는 DB에서 오는 정보에 따라서 수정 필요할 듯?
    imgSrc: require("./imgs/sampleAnimal.jfif"),
    gender: "female",
    species: "axolotl",
  };

  const sampleBroadcastAnimalList = [
    {
      species: "axolotl",
    },
    {
      species: "scincella",
    },
    {
      species: "leopard gecko",
    },
    {
      species: "iguanas",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <h1>제목</h1>
        <Box>TEXT</Box>
        <ThemeBtn themeMode={themeMode} toggleTheme={toggleTheme}></ThemeBtn>
        <LikeBtn></LikeBtn>
        <div>
          <CardLabelMedium imgSrc={sampleAnimal.imgSrc} title="우파루파 먹방" />
          <CardVote imgSrc={sampleAnimal.imgSrc} title="먹이1" />
          <CardOverlayLabel imgSrc={sampleAnimal.imgSrc} title="Label" />
          <CardNotLabel imgSrc={sampleAnimal.imgSrc} />
          <CardLabelLarge
            thumbnailSrc={sampleAnimal.imgSrc}
            animalList={sampleBroadcastAnimalList}
            title="우파루파 먹방 보러 올 사람"
          />
        </div>
      </Main>
    </ThemeProvider>
  );
}

export default App;

const Main = styled.div`
  color: ${(props) => props.theme.colors.primaryText};
  background-color: ${(props) => props.theme.colors.primaryBg};
  width: 100vw;
  height: 100vh;
  transition: all 1s;
`;

const Box = styled.div`
  color: ${(props) => props.theme.colors.yellow};
  background-color: ${(props) => props.theme.colors.green};
  font: ${(props) => props.theme.fonts.mainContentBold};
  width: 100px;
  height: 100px;
  ${(props) => props.theme.styles.card}
`;
