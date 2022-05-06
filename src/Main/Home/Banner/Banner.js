import React from 'react';

import banner from '../../../images/banner.jpg';
const Banner = () => {
    return (
        <div className=' my-5'>
            {/* <img src={"https://img.freepik.com/free-photo/double-exposure-businessman-using-tablet-with-cityscape-financial-graph-blurred-buildi_1258-84463.jpg?t=st=1651568774~exp=1651569374~hmac=fb40e5e8b896cc4ecca143e7a83606aaad5869765172afd74da21148e3e899a2&w=1060.jpg?w=1380"} className="rounded" alt="Cinque Terre" style={{width:"100%"}} height="500"></img> */}
            <img src={banner} className="rounded" alt="Cinque Terre" style={{width:"100%"}} height="500"></img>
        </div>
    );
};

export default Banner;