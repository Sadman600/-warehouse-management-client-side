
import { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../SharePage/Loading';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
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
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }
    // const handleEmail = e => {
    //     setEmail(e.target.value);
    // }
    const handleResetPassword = async () => {
        if (!email) {
            alert('plz input email');
            return
        } else {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
    }
    return (
        <div className='container login-container'>
            <form onSubmit={handleSignInWithEmailAndPassword} className="">
                <h1>Login</h1>

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter password" name="psw" required />

                <button type="submit" className="login-btn">Login</button>
                <p className='my-3'>or</p>
            </form>
            <button onClick={handleSignInWithGoogle} className='my-1 btn btn-danger'>Login with Google</button>
            <p>Don't have a account?<button onClick={() => navigate('/signup')} type="button" className="btn btn-link"> Register now</button></p>
            <p>Forgot Password?<button onClick={handleResetPassword} type="button" className="btn btn-link"> Reset password</button></p>
        </div>
    );
};

export default Login;