import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div>
            <form action="/action_page.php" className="signup-container">
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