import React from 'react';
import styled from 'styled-components';
import logo from '../assets/_img/logoLogin.png';
import { Link } from 'react-router-dom';

export default function LoginScreen() {
    return (
        <Container>
            <img src={logo} />
            <LoginForm />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

function LoginForm() {
    return (
        <LoginStyle>
            <input
                type="email"
                id='email'
                placeholder='  email'
                required
            />
            <input
                type="password"
                id='password'
                placeholder='  senha'
                required
            />

            <Link to={'/hoje'}>
                <button>Entrar</button>
            </Link>

            <Link to={'/cadastro'}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginStyle>
    );
}

const LoginStyle = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 303px;
        height: 45px;
        margin-bottom: 6px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    button {
        width: 303px;
        height: 45px;
        margin-bottom: 25px;

        background: #52B6FF;
        border-radius: 4.63636px;
        border-style: none;

        color: #FFFFFF;
        font-weight: 400;
        font-size: 20.976px;
    }

    p {
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline; 
        color: #52B6FF;
    }
`