import React, { useState, useRef } from "react";
import "./App.css";

import { Routes, Route, NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { darkTheme } from "./styles/themes/darkTheme";
import { lightTheme } from "./styles/themes/lightTheme";
import useTheme from "./styles/themes/useTheme";
import Itheme from "./styles/themes/theme";
import { Nav } from "./components/common/navbar";
import Broadcast from "./components/broadcast/Broadcast";
import Owner from "./components/owner/Owner";
import BroadcastVideo from "./components/broadcast/BroadcastVideo";
import Room from "./components/room/Room";

function App() {
  const [role, setRole] = useState<string>("owner");

  const [themeMode, toggleTheme] = useTheme();
  const theme: Itheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Nav themeMode={themeMode} toggleTheme={toggleTheme}></Nav>
      <NavLink to="/room">room으로</NavLink>
      <Routes>
        {/* 라우팅 될 페이지 */}
        <Route path="/owner" element={<Owner />}></Route>
        <Route path="/Broadcast" element={<BroadcastVideo selectedFeed="지렁" />}></Route>
        <Route path="/room" element={<Room role={role} />}></Route>
      </Routes>
      <button onClick={() => setRole("p")}>참가자 역할로 변경</button>
    </ThemeProvider>
  );
}

export default App;
