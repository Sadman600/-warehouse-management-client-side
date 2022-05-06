import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const { email, name, image, description, price, quantity, supplier } = item;
    useEffect(() => {
        fetch(`https://ancient-hollows-23865.herokuapp.com/item/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item]);
    const handleUpdate = (e) => {
        e.preventDefault();
        const preQuantity = parseInt(quantity);
        const newQuantity = parseInt(e.target.quantity.value);
        const updateItem = {
            email: email,
            name: name,
            image: image,
            description: description,
            price: price,
            quantity: preQuantity + newQuantity,
            supplier: supplier
        };
        fetch(`https://ancient-hollows-23865.herokuapp.com/item/${itemId}`, {
            method: 'PUT',
            body: JSON.stringify(updateItem),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Add Quantity success');
                e.target.reset();
            });
    }
    const handleDelivery = () => {
        const preQuantity = parseInt(quantity);
        const updateItem = {
            email: email,
            name: name,
            image: image,
            description: description,
            price: price,
            quantity: preQuantity - 1,
            supplier: supplier
        };
        fetch(`https://ancient-hollows-23865.herokuapp.com/item/${itemId}`, {
            method: 'PUT',
            body: JSON.stringify(updateItem),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Delivery success');
            });
    }
    return (
        <div className='py-5'>
            <form onSubmit={handleUpdate} className='w-25 mx-auto py-3'>
                <div className="input-group">
                    <input type="text" name='quantity' className="form-control" size="50" placeholder="Add quantity" required />
                    <div className="input-group-btn">
                        <input type="submit" value='Add Quantity' className="btn btn-danger"></input>
                    </div>
                </div>
            </form>
            <div className=''>
                <div className="card">

                    <img src={image} alt="John" style={{ width: "100%" }} />
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <p className="title">$ {price}</p>
                    <p className="title">Quantity: {quantity} </p>
                    <p className="title">Supplier- {supplier}</p>

                    <p><button onClick={handleDelivery} className='item-btn'>Delivery</button></p>
                </div>
            </div>
        </div>
    );
};

export default Inventory;