import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { darkTheme } from "./styles/themes/darkTheme";
import { lightTheme } from "./styles/themes/lightTheme";
import useTheme from "./styles/themes/useTheme";
import Itheme from "./styles/themes/theme";
import { Nav } from "./components/common/navbar";
import Broadcast from "./components/broadcast/Broadcast";
import Owner from "./components/owner/Owner";

function App() {
  const [themeMode, toggleTheme] = useTheme();
  const theme: Itheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Nav themeMode={themeMode} toggleTheme={toggleTheme}></Nav>
      <Routes>
        {/* 라우팅 될 페이지 */}
        <Route path="/owner" element={<Owner />}></Route>
        <Route path="/Broadcast" element={<Broadcast />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
