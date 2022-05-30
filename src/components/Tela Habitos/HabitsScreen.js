import Menu from "../Topo e Menu/Menu";
import Top from "../Topo e Menu/Top";
import styled from "styled-components";
import NewHabitBox from './NewHabitBox';
import { useState, useEffect } from "react";
import HabitBox from "./HabitBox";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function HabitsScreen() {
    const { token, image } = useContext(UserContext);
    const [NewHabitBoxStatus, setNewHabitBoxStatus] = useState(false);
    const [habitList, setHabitList] = useState([]);
    
    function openNewHabitBox(){
        setNewHabitBoxStatus(true);
    }
    
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const promise = axios.get(URL, config);

        promise.then((res) => {
            const { data } = res;
            setHabitList([...data]);
        });

        promise.catch((err) => {
            alert(err.message);
        });
    }, [habitList]);

    function builHabitsList(){
        if(habitList.length > 0){
            return habitList.map(habit => {
                const { id, name, days } = habit;
                return <HabitBox key={id} id={id} name={name} days={days}/>
            })
        } else {
            return <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        }
    }
    return (
        <>
            <Top image={image}/>
            <Content>
                <div className="new">
                    <h2>Meus hábitos</h2>
                    <AddButton onClick={openNewHabitBox}>
                        <ion-icon name="add-outline"></ion-icon>
                    </AddButton>
                </div>

                <NewHabitBox status={NewHabitBoxStatus} setNewHabitBoxStatus={setNewHabitBoxStatus}/>
                <HabitsList>
                    {builHabitsList()}
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
    align-items: center;
    flex-direction: column;

    .new {
        width: 90vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    h2 {
        font-weight: 400;
        font-size: 22px;
        color: #126BA5;
    }

    h3 {
        font-weight: 400;
        font-size: 18px;
        color: #BABABA;

        margin-bottom: 20px;
    }
`

const AddButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    background: #52B6FF;
    border-radius: 5px;

    ion-icon{
        font-weight: 400;
        font-size: 26px;
        color: #FFFFFF;
        width: 25px;
        height: 35px;
    }
`

const HabitsList = styled.div`
    width: 90vw;
    margin-top: 20px;
`