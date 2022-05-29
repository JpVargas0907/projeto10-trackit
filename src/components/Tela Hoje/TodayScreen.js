import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "../Topo e Menu/Menu";
import Top from "../Topo e Menu/Top";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import dayjs from "dayjs";
import TodayHabit from "./TodayHabit";

export default function TodayScreen() {
    const { token, image, counter, setHabitsQuantity, calcPercentage } = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const now = dayjs();
    let weekday = "";

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const promise = axios.get(URL, config);

        promise.then((res) => {
            const { data } = res;
            setHabits([...data]);
        });

        promise.catch((err) => {
            alert(err.message);
        });
    }, [habits]);

    function buildHabitsList() {
        setHabitsQuantity(habits.length)
        if (habits.length > 0) {
            return habits.map((habit, index) => { 
                const {id, name, done, currentSequence, highestSequence} = habit;

                return <TodayHabit key={index} id={id} name={name} done={done} currentSequence={currentSequence} highestSequence={highestSequence}/> })
        } else {
            return <p>CARREGANDO...</p>
        }
    }

    function showWeekday() {
        switch (now.day()) {
            case 0: weekday = "Domingo"
                break;
            case 1: weekday = "Segunda-Feira"
                break;
            case 2: weekday = "Terça-Feira"
                break;
            case 3: weekday = "Quarta-Feira"
                break;
            case 4: weekday = "Quinta-Feira"
                break;
            case 5: weekday = "Sexta-Feira"
                break;
            case 6: weekday = "Sábado"
        }

        return weekday;
    }

    return (
        <>
            <Top image={image}/>
            <Content>
                <h2>{showWeekday()}, {now.date()}/{now.month()}</h2>
                {counter === 0 ? <h3>Nenhum hábito concluído ainda</h3> : <h3>{calcPercentage()}% dos hábitos concluídos</h3>}
                
                <HabitsList>
                    {buildHabitsList()}
                </HabitsList>
            </Content>
            <Menu />
        </>
    );
}

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    background: #E5E5E5;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
        width: 90vw;
        font-weight: 400;
        font-size: 22px;
        color: #126BA5;

        margin-top: 30px;
    }

    > h3 {
        width: 90vw;
        font-weight: 400;
        font-size: 18px;
        color: #BABABA;

        margin-bottom: 20px;
    }
`

const HabitsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

