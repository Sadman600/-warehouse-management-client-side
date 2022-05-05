import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, image, description, price, quantity, supplier } = item;
    const navigate = useNavigate();
    const handleUpdate = (id) => {
        navigate(`inventory/${id}`);
    };
    return (
        <div className="card">

            <img src={image} alt="John" style={{ width: "100%" }} />
            <h1>{name}</h1>
            <p>{description}</p>
            <p className="title">$ {price}</p>
            <p className="title">{quantity}</p>
            <p className="title">Supplier- {supplier}</p>

            <p><button onClick={() => handleUpdate(_id)} className='item-btn'>Update</button></p>
        </div>
    );
};

export default Item;