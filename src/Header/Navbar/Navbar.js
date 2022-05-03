import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
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
                            <Link className="nav-link active fs-5" aria-current="page" to='/additem'>Add Item</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active fs-5" aria-current="page" to='/signup'>Sign Up</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link active fs-5" aria-current="page" to='/Login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;