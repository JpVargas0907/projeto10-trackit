import styled from "styled-components";
import logo from "../assets/_img/logoMenu.png";

export default function Top(){
    return(
        <TopStyle>
            <img src={logo}/>
            <img className="perfil"/>
        </TopStyle>
    );
}

const TopStyle = styled.header`
    width: 100vw;
    height: 70px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #126BA5;

    img {
        margin-left: 18px;
    }

    .perfil {
        margin-right: 18px;
        width: 51px;
        height: 51px;
        border-radius: 50%;

        background: url(image.png);
    }
`