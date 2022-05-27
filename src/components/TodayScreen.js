import { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Top from "./Top";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function TodayScreen() {
    const { token } = useContext(UserContext);
    const { arrayHabits, setArrayHabits } = useState([]);
    console.log(arrayHabits);

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
            console.log(data);
            setArrayHabits(data);
        });

        promise.catch((err) => {
            alert(err.message);
        });

        function buildHabitsList(){
            if (arrayHabits.length > 0) {
                return (
                    arrayHabits.map((habit, index) => {
                    <todayHabit key={index}/>
                }))
            } else {
                return <p>CARREGANDO...</p>
            }
        }

        const todayHabit = buildHabitsList();

    })

    return (
        <>
            <Top />
            <Content>
                <h2>DIA - DATA</h2>
                <h3>quantidade tarefas concluídas</h3>
                <HabitsList>
                    {todayHabit}
                </HabitsList>
            </Content>
            <Menu />
        </>
    );
}

const Content = styled.div`
    width: 100vw;
    margin-top: 90px;
    margin-bottom: 120px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const HabitsList = styled.div`
    width: 90%;
`

function todayHabit() {
    return (
        <habitBox>
            <Info>
                <h2></h2>
                <p></p>
                <p></p>
            </Info>
            <ion-icon name="checkmark-outline"></ion-icon>
        </habitBox>
    );
}

const HabitBox = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
`