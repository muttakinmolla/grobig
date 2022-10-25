import React from 'react';
import './Error.css';
import errorImage from '../../assets/images/error2.jpg';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='error-main'>
            <div className="col-6 m-auto text-center pt-lg-5">

                <div className='rounded'>
                    <img src={errorImage} alt="" className='img-fluid w-50' />
                </div>
                <Link to='/' className='text-dark'>Go To Home Page</Link>
            </div>
        </div>
    );
};

export default Error404;