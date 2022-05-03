import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const {imgurl} = item;
    return (
        <div className="card">
            <img src={imgurl} alt="John" style={{ width: "100%" }} />
            <h1>John Doe</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Harvard University</p>

            <p><button className='item-btn'>Update</button></p>
        </div>
    );
};

export default Item;