import Menu from "../Topo e Menu/Menu";
import Top from "../Topo e Menu/Top";
import styled from 'styled-components';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function HistoricScreen() {
    const { token, image } = useContext(UserContext);

    return (
        <>
            <Top image={image}/>
            <Content>
                <h2>Histórico</h2>
                <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
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

    h2 {
        font-weight: 400;
        font-size: 22px;
        color: #126BA5;

        margin-left: 17px;
        margin-top: 30px;
    }

    h3 {
        font-weight: 400;
        font-size: 18px;

        color: #666666;
        margin-left: 17px;
        margin-top: 17px;
        margin-bottom: 20px;
    }
`