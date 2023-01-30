import React from "react";
import "./App.css";

import styled, { ThemeProvider } from "styled-components";

import { darkTheme } from "./styles/themes/darkTheme";
import { lightTheme } from "./styles/themes/lightTheme";
import useTheme from "./styles/themes/useTheme";
import Itheme from "./styles/themes/theme";
import ThemeBtn from "./components/common/button/ThemeBtn";
import LikeBtn from "./components/common/button/LikeBtn";
import CardLabelMedium from "./components/card/CardLabelMedium/CardLabelMedium";
import CardVote from "./components/card/CardVote/CardVote";
import CardOverlayLabel from "./components/card/CardOverlayLabel/CardOverlayLabel";
import CardNotLabel from "./components/card/CardNotLabel/CardNotLabel";
import CardLabelLarge from "./components/card/CardLabelLarge/CardLabelLarge";
import ProfileLarge from "./components/profiles/ProfileLarge";
import ProfileStore from "./components/profiles/ProfileStore";

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

  const classificationImgs = [require("../src/imgs/axolotl.jfif")];

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <h1>제목</h1>
        <Box>TEXT</Box>
        <ThemeBtn themeMode={themeMode} toggleTheme={toggleTheme}></ThemeBtn>
        <LikeBtn></LikeBtn>
        <CardLabelMedium imgSrc={sampleAnimal.imgSrc} title="우파루파 먹asdfafsafsafasfasdf방" />
        <CardVote imgSrc={sampleAnimal.imgSrc} title="먹이1asdfasdfasasfsadfsaf" />
        <CardOverlayLabel imgSrc={sampleAnimal.imgSrc} title="Labelasdfasdfsafdasfss" />
        <CardNotLabel imgSrc={sampleAnimal.imgSrc} />
        <CardLabelLarge
          title="우파루파 먹방 보러 올 사람asdfsadfsa"
          thumbnailSrc={sampleAnimal.imgSrc}
          classficationImgList={classificationImgs}
        />
        <ProfileLarge
          animalName="우파asdadfsasdfsadfafsda"
          gender="male"
          classification="axolotadssfl"
          imgSrc={require("../src/imgs/axolotl.jfif")}
        />
        <ProfileStore storeName="마이리틀쥬라기 파충류 스토어" imgSrc={classificationImgs[0]} />
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
