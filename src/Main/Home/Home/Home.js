
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useItems from '../../../Hook/useItems';
import Banner from '../Banner/Banner';
import Item from '../Item/Item';
import Service from '../Service/Service';
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
        navigate('/manageitems')
    }
    return (
        <div>
            <Banner></Banner>
            <div className='my-5'>
                <div className='items-container'>
                    {
                        items.map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
                <div className='py-3'>
                    <button onClick={handleSeeAllItem} className='btn btn-success btn-lg'>Manage Inventories</button>
                </div>
            </div>
            <Service></Service>
        </div>
    );
};

export default Home;