import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/_img/logoLogin.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { ThreeDots } from 'react-loader-spinner';

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
    const navigate = useNavigate();
    const { token, setToken, setImage } = useContext(UserContext);
    const [ loading, setLoading ] = useState(false);

    function login(event) {
        event.preventDefault();
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const promise = axios.post(URL, loginData);

        setLoading(true);

        promise.then((res) => {
            alert("Login Efetuado!");
            setToken(res.data.token);
            setImage(res.data.image);
            setLoading(false);
            navigate('/hoje');
        })

        promise.catch((err) => {
            alert(`Vish deu ruim :( Cadastres-se para logar! ${err.message}`);
            setLoading(false);
        })
    }

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const {email, password} = loginData; 

    function handleForm(e) {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <LoginStyle onSubmit={login}>
            <input
                type="email"
                id='email'
                placeholder=' email'
                required
                name='email'
                onChange={handleForm}
                value={email}
            />
            <input
                type="password"
                id='password'
                placeholder=' senha'
                required
                name='password'
                onChange={handleForm}
                value={password}
            />
            <button type="submit">{loading ? <ThreeDots color="#FFFFFF" height={60} width={60} /> : "Entrar"}</button>

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

    > button {
        width: 303px;
        height: 45px;
        margin-bottom: 25px;

        background: #52B6FF;
        border-radius: 4.63636px;
        border-style: none;

        color: #FFFFFF;
        font-weight: 400;
        font-size: 20.976px;

        display: flex;
        justify-content: center;
        align-items: center;
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