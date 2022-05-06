import React from 'react';
import pageErr from '../../../src/images/404-page-error.png';
const PageNotFound = () => {
    return (
        <div className='p-5 m-5'>
            <img className='p-5 m-5' src={pageErr} alt='Page Not Found!'></img>
        </div>
    );
};

export default PageNotFound;