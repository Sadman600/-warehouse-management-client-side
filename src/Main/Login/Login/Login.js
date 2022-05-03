import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../SharePage/Loading';
import './Login.css';

const Login = () => {
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSignInWithEmailAndPassword = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.psw.value;
        signInWithEmailAndPassword(email, password);
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