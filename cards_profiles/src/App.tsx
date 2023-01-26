import React from "react";
import "./App.css";

import ProfileSmall from "./components/profiles/ProfileSmall";
import ProfileMedium from "./components/profiles/ProfileMedium";
import ProfileLarge from "./components/profiles/ProfileLarge";

import styled, { ThemeProvider } from "styled-components";

import { darkTheme } from "./styles/themes/darkTheme";
import { lightTheme } from "./styles/themes/lightTheme";
import useTheme from "./styles/themes/useTheme";
import Itheme from "./styles/themes/theme";
import ProfileStore from "./components/profiles/ProfileStore";

function App() {
  const [theme, toggleTheme] = useTheme();
  const themeMode: Itheme = theme === "light" ? lightTheme : darkTheme;

  const sampleAnimal = {
    animalName: "우파루파파",
    // 이미지는 DB에서 오는 정보에 따라서 수정 필요할 듯?
    imgSrc: require("./imgs/sampleAnimal.jfif"),
    gender: "female",
    species: "axolotl",
  };

  const sampleStore = {
    storeName: "쥬라기스토어",
    // 여기 이미지도 마찬가지
    imgSrc: require("./imgs/sampleStore.jpg"),
  };

  return (
    <ThemeProvider theme={themeMode}>
      <Main>
        <h1>제목</h1>
        <Box>TEXT</Box>
        <button
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme}
        </button>
        <ProfileSmall imgSrc={sampleAnimal.imgSrc} />
        <ProfileMedium imgSrc={sampleAnimal.imgSrc} />
        <ProfileLarge
          imgSrc={sampleAnimal.imgSrc}
          animalName={sampleAnimal.animalName}
          gender={sampleAnimal.gender}
          species={sampleAnimal.species}
        />
        <ProfileStore imgSrc={sampleStore.imgSrc} storeName={sampleStore.storeName} />
      </Main>
    </ThemeProvider>
  );
}

export default App;

const Main = styled.div`
  color: ${(props) => props.theme.colors.defaultColor};
  background-color: ${(props) => props.theme.colors.defaultBgColor};
  width: 100vw;
  height: 100%;
`;

const Box = styled.div`
  color: ${(props) => props.theme.colors.error};
  background-color: ${(props) => props.theme.colors.success};
  font: ${(props) => props.theme.fonts.mainContentBold};
  width: 100px;
  height: 100px;
  ${(props) => props.theme.shadow}
`;

// import ProfileStore from "./components/profiles/ProfileStore";
// import CardLabelMedium from "./components/cards/CardLabelMedium";
// import CardVote from "./components/cards/CardVote";
// import CardOverlayLabel from "./components/cards/CardOverlayLabel";
// import CardNotLabel from "./components/cards/CardNotLabel";
// import CardLabelLarge from "./components/cards/CardLabelLarge";

// function App() {
//   const sampleAnimal = {
//     animalName: "우파루파파",
//     // 이미지는 DB에서 오는 정보에 따라서 수정 필요할 듯?
//     imgSrc: require("./imgs/sampleAnimal.jfif"),
//     gender: "female",
//     species: "axolotl",
//   };

//   const sampleStore = {
//     storeName: "쥬라기스토어",
//     // 여기 이미지도 마찬가지
//     imgSrc: require("./imgs/sampleStore.jpg"),
//   };

//   // 썸네일 밑에 종 이미지 처리하는 로직 어떻게 처리할지 생각해야함
//   // 해당 방송의 모든 동물 받아서 서로 다른 종 정보만 prop할지 등등...
//   // 우선 모든 동물 정보 prop 하기
//   const sampleBroadcastAnimalList = [
//     {
//       species: "axolotl",
//     },
//     {
//       species: "scincella",
//     },
//     {
//       species: "leopard gecko",
//     },
//     {
//       species: "iguanas",
//     },
//   ];

//   return (
//     <div>
//       {/* Profile */}
//       <div>
//         <ProfileSmall imgSrc={sampleAnimal.imgSrc} />
//         <ProfileMedium imgSrc={sampleAnimal.imgSrc} />
//         <ProfileLarge
//           imgSrc={sampleAnimal.imgSrc}
//           animalName={sampleAnimal.animalName}
//           gender={sampleAnimal.gender}
//           species={sampleAnimal.species}
//         />
//         <ProfileStore imgSrc={sampleStore.imgSrc} storeName={sampleStore.storeName} />
//       </div>

//       <hr />

//       {/* Card */}
//       <div>
//         <CardLabelMedium imgSrc={sampleAnimal.imgSrc} title="우파루파 먹방 보러 올 사람" />
//         <CardVote imgSrc={sampleAnimal.imgSrc} title="먹이1" />
//         <CardOverlayLabel imgSrc={sampleAnimal.imgSrc} title="Label" />
//         <CardNotLabel imgSrc={sampleAnimal.imgSrc} />
//         <CardLabelLarge
//           thumbnailSrc={sampleAnimal.imgSrc}
//           animalList={sampleBroadcastAnimalList}
//           title="우파루파 먹방 보러 올 사람"
//         />
//       </div>
//     </div>
//   );
// }
