import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/_img/logoLogin.png';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function RegisterScreen() {
    return (
        <Container>
            <img src={logo} />
            <RegisterForm />
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

function RegisterForm() {
    const navigate = useNavigate();

    function register(event) {
        event.preventDefault();
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const promise = axios.post(URL, registerData);

        promise.then(() => {
            navigate("/");
        })

        promise.catch(() => {
            alert("Preenchido de forma incorreta ou usuário já foi cadastrado.");
        })

        setRegisterData()
    }

    const [registerData, setRegisterData] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });

    const {email, name, image, password} = registerData; 

    function handleForm(e) {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <RegisterStyle onSubmit={register}>
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
                type="text"
                id='password'
                placeholder=' senha'
                required
                name='password'
                onChange={handleForm}
                value={password}
            />
            <input
                type="text"
                id='name'
                placeholder=' nome'
                required
                name='name'
                onChange={handleForm}
                value={name}
            />
            <input
                type="url"
                id='image'
                placeholder=' foto'
                required
                name='image'
                onChange={handleForm}
                value={image}
            />

            <button type='submit'>Cadastrar</button>

            <Link to={'/'}>
                <p>Já tem uma conta? Faça Login!</p>
            </Link>
        </RegisterStyle>
    );
}

const RegisterStyle = styled.form`
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