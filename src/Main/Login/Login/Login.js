import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <form action="/action_page.php" className="login-container">
                <h1>Login</h1>

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder="Enter email" name="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter password" name="psw" required />

                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
};

export default Login;