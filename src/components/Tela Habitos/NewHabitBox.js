import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function NewHabitBox(props) {
    const { status, setNewHabitBoxStatus } = props;

    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ];
    const { token } = useContext(UserContext);

    function closeNewHabitBox() {
        setNewHabitBoxStatus(false);
    }

    function sendNewHabit(event) {
        event.preventDefault();
        days.sort((a, b) => a - b);

        const newHabit = {
            name: name,
            days: days
        };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.post(URL, newHabit, config);

        promise.then(res =>{
            alert("Enviado");
        })

        promise.catch(err => {
            alert(err.message);
        })
    }

    return (
        <>
            <NewHabitBoxStyle status={status}>
                <NewHabitForm onSubmit={sendNewHabit}>
                    <input
                        type="text"
                        placeholder=' nome do hábito'
                        required
                        onChange={(e) => 
                          setName(e.target.value)
                        }
                    />
                    <ChoseDaysBox>
                        {weekDays.map((day, index) => {
                            return <Day key={index} id={index} day={day} days={days} setDays={setDays}/>
                        })}
                    </ChoseDaysBox>
                    <Buttons>
                        <p onClick={closeNewHabitBox} >Cancelar</p>
                        <button type="submit">Salvar</button>
                    </Buttons>
                </NewHabitForm>
            </NewHabitBoxStyle>
        </>
    );
}

const NewHabitBoxStyle = styled.div`
    width: 90vw;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: ${props => props.status ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    position: relative;
`
const NewHabitForm = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 18px;

    > input {
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 10px;

        font-weight: 400;
        font-size: 20px;
        color: #666666;
    }
`

const ChoseDaysBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 16px;
    bottom: 15px;

    > p {
        font-weight: 400;
        font-size: 16px;
        color: #52B6FF;
        margin-right: 10px;
    }

    > button {
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;

        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
    }
`

function Day(props) {
    const { id, day, days, setDays } = props;
    const [selected, setSelected] = useState(false);

    function selectedDays(){
        if(!selected){
            setSelected(true);
            setDays([...days, id])
        } else if (selected){
            setSelected(false);
            setDays(days.filter(r => r !== id));
        }
    }
 
    return (
        <DayBox onClick={selectedDays} status={selected}>{day}</DayBox>
    );
}

const DayBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;

    background: ${props => props.status ? "#CFCFCF" : "FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => props.status ? "#FFFFFF" : "#DBDBDB"};
`