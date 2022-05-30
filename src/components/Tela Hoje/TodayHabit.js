import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import check from "../../assets/_img/check.png";

export default function TodayHabit(props) {
    const { id, name, done, currentSequence, highestSequence, verifyDones } = props;
    const { token, counter, setCounter } = useContext(UserContext);
    const [status, setStatus] = useState(done);

    function checkHabit() {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        if (status === false) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

            const promise = axios.post(URL, null, config);

            promise.then(res => {
                setStatus(true);
                setCounter(counter + 1)
            });

            promise.catch(err => {
                alert(err.message);
            })
        } else if (status === true) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

            const promise = axios.post(URL, null, config);

            promise.then(res => {
                setStatus(false);
                setCounter(counter - 1)
            });

            promise.catch(err => {
                alert(err.message);
            });
        }
    }

    return (
        <HabitBox>
            <Info currentSequence={currentSequence} highestSequence={highestSequence}>
                <h2>{name}</h2>
                <div>
                    <p className="paragraph">Sequência atual: </p>
                    <CurrentSequenceStyle currentSequence={currentSequence} highestSequence={highestSequence} done={status} > {currentSequence} dias
                    </ CurrentSequenceStyle >
                </div>
                <div>
                    <p className="paragraph">Seu recorde: </p>
                    <HighestSequenceStyle currentSequence={currentSequence} highestSequence={highestSequence}> { highestSequence} dias
                    </HighestSequenceStyle>
                </div>
            </Info>
            <CheckBox onClick={checkHabit} done={status}>
                <img src={check} alt="check" />
            </CheckBox>
        </HabitBox>
    );
}

const HabitBox = styled.div`
    position: relative;
    width: 90%;
    height: 100px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;

    > h2{
        width: 75%;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        word-wrap: break-word;
    }

    > div {
        display: flex;
    }

    .paragraph{
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }
`
const CurrentSequenceStyle = styled.p`
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: ${props => (props.currentSequence === props.highestSequence || props.done === true) ? "#8FC549" : "#666666"};
`
const HighestSequenceStyle = styled.p`
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: ${props => (props.currentSequence === props.highestSequence) ? "#8FC549" : "#666666"};
`

const CheckBox = styled.div`
    position: absolute;
    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 14px;

    background: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    border-radius: 5px;
`