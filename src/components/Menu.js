import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import '../../src/styles.css';
import { Link } from "react-router-dom";

export default function Menu() {
    const percentage = 90;

    return (
        <MenuStyle>
            <Link to={'/habitos'}>
                <p>Hábitos</p>
            </Link>
            <Link to={'/hoje'}>
                <CircularProgressbar value={percentage} text={`${percentage}`} />
            </Link>
            <Link to={'/historico'}>
                <p>Histórico</p>
            </Link>
        </MenuStyle>
    );
}

const MenuStyle = styled.footer`
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;

    p{
        font-weight: 400;
        font-size: 18px;
        font-style: normal;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
    }
`