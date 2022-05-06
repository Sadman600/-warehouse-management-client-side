import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import useItems from '../../Hook/useItems';
import './AllItem.css';

const AllItem = () => {
    const [items] = useItems();

    const handleDeleteItem = id => {
        fetch(`https://ancient-hollows-23865.herokuapp.com/item/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                const { deletedCount } = data.result;
                if (deletedCount > 0) {
                    alert('Delete success')
                }
            });
    }
    const navigate = useNavigate();
    const handleAddItem = () => {
        navigate('/additem');
    }
    return (
        <div className='py-5 '>
            <button onClick={handleAddItem} className='btn btn-success py-5'>Add Item</button>
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
            <Footer></Footer>
        </div>
    );
};

export default AllItem;