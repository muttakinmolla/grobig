import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { imageUrl, price, description, _id, course_name } = course;
    return (
        <div>
            <div className='mt-3 mb-3'>
                <div className="card shadow p-3 mb-5">
                    <img src={imageUrl} className="img-fluid w-75 m-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Course Name: {course_name}</h5>
                        <p className="card-text"><span className='fw-bold'>Course Details:</span> {description}</p>
                        <p>price : ${price}</p>
                        <Link to={`/course/checkout/${_id}`} className="btn btn-primary">Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;