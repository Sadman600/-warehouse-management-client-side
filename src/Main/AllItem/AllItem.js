import React from 'react';
import useItems from '../../Hook/useItems';
import './AllItem.css';

const AllItem = () => {
    const [items] = useItems();

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
    );
};

export default AllItem;