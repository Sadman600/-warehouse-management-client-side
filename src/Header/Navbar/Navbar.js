import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css';
const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () =>{
            signOut(auth);
            navigate('/login');
    }
    return (
        <nav className="navbar navbar-expand-sm bg-secondary navbar-dark fixed-top ">
            <div className='container'>
                <NavLink className="navbar-brand" to='/'>IT Management</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: "100px" }}>
                        <li className="nav-item me-3">
                            <Link className="nav-link active fs-5" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active fs-5" aria-current="page" to='/blogs'>Blogs</Link>
                        </li>
                        {
                            user ?
                                <li className="nav-item me-3">
                                    <Link className="nav-link active fs-5" aria-current="page" to='/additem'>Add Item</Link>
                                </li>
                                : ''
                        }
                        {
                            user ? ''
                                :
                                <li className="nav-item me-3">
                                    <Link className="nav-link active fs-5" aria-current="page" to='/signup'>Sign Up</Link>
                                </li>
                        }
                        {
                            user ?
                                <button onClick={handleSignOut} type="button" className="active btn btn-link text-decoration-none">Sign Out</button>
                                :
                                <li className="nav-item me-3">
                                    <Link className="nav-link active fs-5" aria-current="page" to='/Login'>Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;