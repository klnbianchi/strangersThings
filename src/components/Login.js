import React, { useState, useEffect } from 'react';
import { loginUser } from '../api'
import { storeToken } from '../auth';
import StLogo from '../images/stLogo.png'

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <img className="st-logo-h2" src={StLogo}/>
            <h2>Log-in to your account</h2>
            <form
                className="login-form"
                onSubmit={async (e) => {
                    e.preventDefault();

                    try {
                        const results = await loginUser(username, password);
                        storeToken(results.data.token)
                        setIsLoggedIn(true);
                        setUsername('');
                        setPassword('');
                    } catch (err) {
                        console.log(err)
                    } finally {

                    }
                }}>

                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" />

                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />

                <button>Login</button>
            </form>

            <p>Don't have an account? <a href="./">Sign Up</a></p>
        </div>
    )
}

export default Login;