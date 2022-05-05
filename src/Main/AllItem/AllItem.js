import React from 'react';
import useItems from '../../Hook/useItems';
import Item from '../Home/Item/Item';
import './AllItem.css';

const AllItem = () => {
    const [items] = useItems();
    return (
        <div className='p-5'>
            <div className='items-container py-5'>
            {
                items.map(item => <Item key={item._id} item={item}></Item>)
            }
            </div>
        </div>
    );
};

export default AllItem;