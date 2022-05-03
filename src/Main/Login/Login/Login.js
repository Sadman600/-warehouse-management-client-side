import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleSignInWithEmailAndPassword = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.psw.value;
        // if(!user){
        //     navigate('/signup');
        // }
        signInWithEmailAndPassword(email, password);
        navigate('/');
    }
    return (
        <div className='container'>
            <form onSubmit={handleSignInWithEmailAndPassword} className="login-container">
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