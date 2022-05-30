import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import LoginScreen from "./Tela Login/LoginScreen";
import RegisterScreen from "./Tela Cadastro/RegisterScreen";
import HabitsScreen from "./Tela Habitos/HabitsScreen";
import TodayScreen from "./Tela Hoje/TodayScreen";
import HistoricScreen from "./Tela Historico/HistoricScreen";

function App() {
  const [token, setToken] = useState('');
  const [image, setImage] = useState('');
  const [counter, setCounter] = useState(0);
  const [habitsQuantity, setHabitsQuantity] = useState(0);

  function calcPercentage(){
      const percentage = (counter / habitsQuantity) * 100;
    return Math.round(percentage);
  }

  return (
    <UserContext.Provider value={{token, setToken, image, setImage, counter, setCounter, habitsQuantity, setHabitsQuantity, calcPercentage}}>
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
