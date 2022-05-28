import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Top from "./Top";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import dayjs from "dayjs";

export default function TodayScreen() {
    const { token, image } = useContext(UserContext);
    const { arrayHabits, setArrayHabits } = useState(["1", "2", "3", "4"]);
    const now = dayjs();
    let weekday = "";
    const arrayTest = ["1", "2", "3", "4"];


    console.log(arrayTest);

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
            setArrayHabits([...data]);
        });

        promise.catch((err) => {
            alert(err.message);
        });
    }, []);

    function buildHabitsList() {
        if (arrayTest.length > 0) {

            return arrayTest.map((habit, index) => { return <TodayHabit key={index} id={habit} /> })
        } else {
            return <p>CARREGANDO...</p>
        }
    }

    function showWeekday() {
        switch (now.day()) {
            case 1: weekday = "Domingo"
                break;
            case 2: weekday = "Segunda-Feira"
                break;
            case 3: weekday = "Terça-Feira"
                break;
            case 4: weekday = "Quarta-Feira"
                break;
            case 5: weekday = "Quinta-Feira"
                break;
            case 6: weekday = "Sexta-Feira"
                break;
            case 7: weekday = "Sábado"
        }

        return weekday;
    }

    return (
        <>
            <Top image={image}/>
            <Content>
                <h2>{showWeekday()}, {now.date()}/{now.month()}</h2>
                <h3>Quantidade de tarefas concluídas</h3>
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

    h2 {
        width: 90vw;
        font-weight: 400;
        font-size: 22px;
        color: #126BA5;

        margin-top: 30px;
    }

    h3 {
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

function TodayHabit() {
    return (
        <HabitBox>
            <Info>
                <h2></h2>
                <p></p>
                <p></p>
            </Info>
            <CheckBox>
                <ion-icon name="checkmark-outline"></ion-icon>
            </CheckBox>
        </HabitBox>
    );
}

const HabitBox = styled.div`
    position: relative;
    width: 90%;
    height: 94px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
`

const CheckBox = styled.div`
    position: absolute;
    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 14px;

    background: #EBEBEB;
    border-radius: 5px;
`