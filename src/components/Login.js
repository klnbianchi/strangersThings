import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { loginUser } from '../api';
import { storeToken,getToken } from '../auth';
import StLogo from '../images/stLogo.png'
import Register from './Register'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setIsLoggedin, setIsLoading } = props;
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

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
                        setIsLoggedin(true);
                        setUsername('');
                        setPassword('');
                        handleClick();
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
            <p>Don't have an account? <Link className='signup-link' to="/login/register">Sign Up</Link></p>
        </div>
    )
}

export default Login;