import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { imageUrl, price, description, _id, course_name } = course;
    return (
        <div>
            <div className='mt-lg-5 mb-lg-5 mb-3'>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img src={imageUrl} className="img-fluid w-50 rounded shadow p-3 mb-5 bg-body rounded" alt="..." />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <h5 className="text-center fw-bold fs-4 mb-lg-4">Course Name: {course_name}</h5>
                            <p className=""><span className='fw-bold'>Course Details:</span> {description}</p>
                            <p className="text-center fw-bold fs-4 mb-lg-4">price : ${price}</p>
                        </div>
                        <div className="d-flex flex-column flex-lg-row justify-content-lg-evenly mt-lg-5">
                            <Link to={`/course/checkout/${_id}`} className="btn btn-success text-white">Get Premium Access</Link>
                            <button className='btn btn-primary'>Download PDF</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;