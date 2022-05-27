import Menu from "./Menu";
import Top from "./Top";
import styled from 'styled-components';

export default function HistoricScreen() {
    return (
        <>
            <Top />
            <Content>
                
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
        color: #BABABA;

        margin-left: 17px;
        margin-bottom: 20px;
    }
`