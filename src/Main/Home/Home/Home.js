import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-5'>
                <p>Home</p>
            </div>
        </div>
    );
};

export default Home;