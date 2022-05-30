import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function HabitBox(props) {
    const { id, name, days } = props;
    const { token } = useContext(UserContext);
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ];

    function deleteHabit() {
        if (window.confirm("Você gostaria de deletar esse hábito?") === true) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const promise = axios.delete(URL, config);

            promise.then(res => {
                alert("Deletado");
            })

            promise.catch(err => {
                alert(err.message);
            })
        }
    }


    return (
        <BoxStyle>
            <p>{name}</p>
            <ion-icon onClick={deleteHabit} name="trash-outline"></ion-icon>
            <ChosedDaysBox>
                {weekDays.map((day, index) => {
                    return <DayBox key={index} id={index} days={days} name={day}/>
                })}
            </ChosedDaysBox>
        </BoxStyle>
    );
}

const BoxStyle = styled.div`
    width: 90vw;
    height: 100px;
    padding: 10px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    p{
        width: 90%;
        margin-top: 30px;
        font-weight: 400;
        font-size: 20px;
        color: #666666;

        margin-top: 14px;
        margin-bottom: 8px;
    }

    ion-icon {
        position: absolute;
        right: 10px;
        top: 10px;
    }
`


const ChosedDaysBox = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`

function DayBox(props){
    const [status, setStatus] = useState(false);
    const {id, days, name} = props;

    useState(() => {
        for(let i = 0; i < days.length; i++){
            if(days[i] === id){
                setStatus(true);
            }
        }
    }, [])

    return(
        <DayBoxStyle status={status}>
            {name}
        </DayBoxStyle>
    );
}

const DayBoxStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 5px;

    background: ${props => props.status ? "#CFCFCF" : "FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => props.status ? "#FFFFFF" : "#DBDBDB"};
`