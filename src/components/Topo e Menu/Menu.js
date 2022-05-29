import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import "../../../src/styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Menu() {
    const { calcPercentage } = useContext(UserContext);
    const percentage = calcPercentage();
    const name = "Hoje";
    
    return (
        <MenuStyle>
            <Link to={'/habitos'}>
                <p>Hábitos</p>
            </Link>
            <Link to={'/hoje'}>
                <CircularProgressbar value={percentage} text={`${name}`} />
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
    z-index: 1;
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

    a {
        text-decoration: none;
    }
`