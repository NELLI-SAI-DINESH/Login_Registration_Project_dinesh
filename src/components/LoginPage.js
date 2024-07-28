import React, { useState } from 'react';
import '../css/style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  UserProvider } from "./Context"; // Assuming UserContext is imported

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const { setUserLoggedIn } = useContext(UserContext); // Assuming UserContext has setUserLoggedIn method

    const navigate = useNavigate();

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:4001/users?email=${email}&password=${password}`); //everyword checking from database
            if (response.status === 200) {
                if (Array.isArray(response.data) && response.data.length === 0) {
                    setError("Login Failed, Details are incorrect.");
                    sessionStorage.setItem('isLoggedIn', false);
                    <UserProvider value={false}></UserProvider>
                    // setUserLoggedIn(false); // Set context state
                } else {
                    sessionStorage.setItem('isLoggedIn', true);
                    sessionStorage.setItem('email', email);
                    <UserProvider value={true}></UserProvider>

                    // setUserLoggedIn(true); // Set context state
                    navigate("/dashboardPage");
                }
            }
        } catch (error) {
            setError("error");
        }
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>welcome</span>

                <label htmlFor='email'>Email Id:</label>
                <input
                    type='text'
                    id="email"
                    name="email"
                    placeholder="Email Id"
                    value={email}
                    onChange={emailChangeHandler}
                    pattern='^([a-zA-Z0-9_\-\.]+)@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,})$'
                    title='for Eg: ABC@gmail.com'
                    autoComplete="off"
                    required
                />

                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={passwordChangeHandler}
                    required
                />

                <button type="submit">Login</button>
                <p>{error}</p>
            </form>
        </div>
    );
}

export default LoginPage;
