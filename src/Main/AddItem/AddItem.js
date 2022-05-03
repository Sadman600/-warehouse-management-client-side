import React from 'react';
import './AddItem.css';

const AddItem = () => {
    return (
        <div className='container'>
            <form action="/action_page.php" className="add-item-container">
                <h1>Add Item</h1>

                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" required />

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter name" name="name" required />

                <label htmlFor="imgurl"><b>Image</b></label>
                <input type="text" placeholder="Enter imgurl" name="imgurl" required />

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