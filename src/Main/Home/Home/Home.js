import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Item from '../Item/Item';
import './Home.css';
const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return (
        <div>
            <Banner></Banner>
            <div className='my-5'>
                <p>Home</p>
                <div className='items-container'>
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;