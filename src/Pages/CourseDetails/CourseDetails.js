import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { imageUrl, price, description, _id, course_name } = course;
    return (
        <div>
            <div className='col-lg-4 mb-3'>
                <div className="card shadow p-3 mb-5">
                    <img src={imageUrl} className="img-fluid course-img m-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{course_name}</h5>
                        <p className="card-text">{description}</p>
                        <p>price : ${price}</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;