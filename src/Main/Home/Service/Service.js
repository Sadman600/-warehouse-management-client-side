import React from 'react';
import './Service.css';
import img1 from '../../../images/it-management-1.jpg'
import img2 from '../../../images/it-management-2.jpg'
const Service = () => {
    return (
        <section>
            <div className='container service-container'>
                <div className=''>
                    <img className='rounded' src={img1} alt=''></img>
                </div>
                <div className='text-start '>
                    <h1 className='text-primary '>Teams across the world rely on IT Service Management</h1>
                    <h4 className=''>“IT Service Management supports our processes so we all work
                        in the same tool, in the same way...Now we have a single
                        place of truth from which we can extract data and base
                        our reports. This provides us with a better overview and
                        a common understanding throughout the organization."</h4>
                </div>
            </div>
            <div className='container service-container my-5 py-5'>
                <div className='p-5 text-start border border-5 rounded'>
                    <h1 className='text-danger'>What is ITMS?</h1>
                    <h5 className=''>IT management service — often referred to as ITMS— is
                        simply how IT teams manage the end-to-end delivery of
                        IT services to customers. This includes all the processes
                        and activities to design, create, deliver, and support
                        IT services. ITMS teams oversee all kinds of workplace
                        technology, ranging from laptops, to servers, to business-critical
                        software applications.</h5>
                </div>
                <div className='mx-3'>
                    <img className='rounded' src={img2} alt=''></img>
                </div>
            </div>
        </section>
    );
};

export default Service;