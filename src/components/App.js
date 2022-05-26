import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HabitsScreen from "./HabitsScreen";
import TodayScreen from "./TodayScreen";
import HistoricScreen from "./HistoricScreen";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginScreen />} />
        <Route path={"/cadastro"} element={<RegisterScreen />} />
        <Route path={"/habitos"} element={<HabitsScreen />} />
        <Route path={"/hoje"} element={<TodayScreen />} />
        <Route path={"/historico"} element={<HistoricScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
