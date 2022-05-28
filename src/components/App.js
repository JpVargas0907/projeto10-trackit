import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HabitsScreen from "./HabitsScreen";
import TodayScreen from "./TodayScreen";
import HistoricScreen from "./HistoricScreen";



function App() {
  const [token, setToken] = useState('');
  const [image, setImage] = useState('');

  return (
    <UserContext.Provider value={{token, setToken, image, setImage}}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginScreen />} />
          <Route path={"/cadastro"} element={<RegisterScreen />} />
          <Route path={"/habitos"} element={<HabitsScreen />} />
          <Route path={"/hoje"} element={<TodayScreen />} />
          <Route path={"/historico"} element={<HistoricScreen />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
