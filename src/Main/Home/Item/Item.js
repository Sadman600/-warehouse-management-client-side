import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { name, image, description, price, quantity, supplier } = item;
    return (
        <div className="card">
            
            <img src={image} alt="John" style={{ width: "100%" }} />
            <h1>{name}</h1>
            <p>{description}</p>
            <p className="title">$ {price}</p>
            <p className="title">{quantity}</p>
            <p className="title">Supplier- {supplier}</p>

            <p><button className='item-btn'>Update</button></p>
        </div>
    );
};

export default Item;