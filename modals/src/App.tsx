import React from "react";
import "./App.css";

import styled, { ThemeProvider } from "styled-components";

import { darkTheme } from "./styles/themes/darkTheme";
import { lightTheme } from "./styles/themes/lightTheme";
import useTheme from "./styles/themes/useTheme";
import Itheme from "./styles/themes/theme";
import ThemeBtn from "./components/common/button/ThemeBtn";
import LikeBtn from "./components/common/button/LikeBtn";
import VoteModal from "./components/modal/VoteModal";
import VoteResultModal from "./components/modal/VoteResultModal";

function App() {
  const [themeMode, toggleTheme] = useTheme();
  const theme: Itheme = themeMode === "light" ? lightTheme : darkTheme;

  const feeds = [
    {
      id: 1,
      feedName: "귀뚜라미",
      imgSrc: require("../src/imgs/귀뚜라미.png"),
    },
    {
      id: 2,
      feedName: "쥐",
      imgSrc: require("../src/imgs/귀뚜라미.png"),
    },
    {
      id: 3,
      feedName: "곤충젤리",
      imgSrc: require("../src/imgs/귀뚜라미.png"),
    },
    {
      id: 4,
      feedName: "지렁이",
      imgSrc: require("../src/imgs/귀뚜라미.png"),
    },
  ];

  const feed = {
    feedName: "귀뚜라미",
    imgSrc: require("../src/imgs/귀뚜라미.png"),
  };

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <h1>제목</h1>
        <Box>TEXT</Box>
        <ThemeBtn themeMode={themeMode} toggleTheme={toggleTheme}></ThemeBtn>
        <LikeBtn></LikeBtn>
        <div>
          <VoteModal feeds={feeds} />
          <VoteResultModal feedName={feed.feedName} imgSrc={feed.imgSrc} />
          <VoteModal feeds={feeds} />
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
  height: 100%;
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
