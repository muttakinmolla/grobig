import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCourse.css';

const SingleCourse = ({ course }) => {
    const { _id, course_id, course_name, imageUrl, description, price } = course;
    return (
        <div className='col-lg-4 mb-3'>
            <div className="card shadow p-3 mb-5">
                <img src={imageUrl} className="img-fluid course-img m-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{course_name}</h5>
                    <p className="card-text">{description}</p>
                    <p>price : ${price}</p>
                    <Link to={`/course/details/${_id}`} className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;