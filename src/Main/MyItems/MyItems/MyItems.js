import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './MyItems.css';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
            console.log(data);
        }
        getItems();
    }, [items]);

    const handleDeleteItem = id => {
        fetch(`http://localhost:5000/item/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                const { deletedCount } = data.result;
                if (deletedCount > 0) {
                    alert('Delete success')
                }
            });
    }

    return (
        <div className='py-5'>

            <div className='items-container py-5'>
                {
                    items.map(item => <div className="card">

                        <img src={item.image} alt="John" style={{ width: "100%" }} />
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p className="title">$ {item.price}</p>
                        <p className="title">{item.quantity}</p>
                        <p className="title">Supplier- {item.supplier}</p>
                        <p><button onClick={() => handleDeleteItem(item._id)} className='delete-btn'>Delete</button></p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;