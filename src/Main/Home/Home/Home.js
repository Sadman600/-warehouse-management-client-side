
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useItems from '../../../Hook/useItems';
import Banner from '../Banner/Banner';
import Item from '../Item/Item';
import './Home.css';
const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data.slice(0,6)));
    }, [items]);
    const navigate = useNavigate();
    const handleSeeAllItem = () => {
        navigate('/allitem')
    }
    return (
        <div>
            <Banner></Banner>
            <div className='my-5'>
                <p>Home</p>
                <div className='items-container'>
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
                <div className='py-3'>
                    <button onClick={handleSeeAllItem} className='btn btn-success btn-lg'>See all item</button>
                </div>
            </div>
        </div>
    );
};

export default Home;