import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = (e) => {
        e.preventDefault();
        const item = {
            email: e.target.email.value,
            name: e.target.name.value,
            image: e.target.img.value,
            description: e.target.description.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            supplier: e.target.suppname.value
        };
        fetch('https://ancient-hollows-23865.herokuapp.com/item', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                alert(`Add item success ${data.result.insertedId}`);
                e.target.reset();
            });
    }
    return (
        <div className='container'>
            <form onSubmit={handleAddItem} className="add-item-container">
                <h1>Add Item</h1>

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" value={user?.email} required readOnly />

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter name" name="name" required />

                <label htmlFor="img"><b>Image</b></label>
                <input type="text" placeholder="Enter imgurl" name="img" required />

                <label htmlFor="description"><b>Description</b></label>
                <input type="text" placeholder="Enter description" name="description" required />

                <label htmlFor="price"><b>Price</b></label>
                <input type="text" placeholder="Enter price" name="price" required />

                <label htmlFor="quantity"><b>Quantity</b></label>
                <input type="text" placeholder="Enter quantity" name="quantity" required />

                <label htmlFor="suppname"><b>Supplier Name</b></label>
                <input type="text" placeholder="Enter supplier" name="suppname" required />

                <button type="submit" className="add-item-btn">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;