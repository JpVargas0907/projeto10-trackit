import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HabitsScreen from "./HabitsScreen";
import TodayScreen from "./TodayScreen";
import HistoricScreen from "./HistoricScreen";


function App() {
  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginScreen setToken={setToken} />} />
        <Route path={"/cadastro"} element={<RegisterScreen />} />
        <Route path={"/habitos"} element={<HabitsScreen token={token}/>} />
        <Route path={"/hoje"} element={<TodayScreen token={token}/>} />
        <Route path={"/historico"} element={<HistoricScreen token={token}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
