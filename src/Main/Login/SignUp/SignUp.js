import React from 'react';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const handleCreateUserWithEmailAndPassword = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.psw.value;
        if (!email || !password) {
            alert('Plz enter email or password');
            return;
        } else {
            createUserWithEmailAndPassword(email, password);
            navigate('/');
        }

    }
    return (
        <div className='container'>
            <form onSubmit={handleCreateUserWithEmailAndPassword} className="signup-container">
                <h1>Sign Up</h1>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter name" name="name" required />

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder="Enter email" name="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter password" name="psw" required />

                <button type="submit" className="signup-btn">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;