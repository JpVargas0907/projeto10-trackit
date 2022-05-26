import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import '../../src/styles.css';

export default function Menu(){
    const percentage = 90;

    return(
        <MenuStyle>
            <p>Hábitos</p>
            <CircularProgressbar value={percentage} text={`${percentage}`} />
            <p>Histórico</p>
        </MenuStyle>
    );
}

const MenuStyle = styled.footer`
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;

    p{
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
    }
`