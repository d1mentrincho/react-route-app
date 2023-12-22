import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [login, setLogin] = useState('kminchelle');
    const [password, setPassword] = useState('0lelplR');
    const navigate = useNavigate();

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) {
            navigate("/profile");
        }
    }, [navigate]);

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: login,
                password: password,
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                sessionStorage.setItem('user', data.token);
                navigate('/profile');
            } else {
                console.log('Login failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className='content'>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" value={login} onChange={handleLoginChange} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;