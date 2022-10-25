import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaShoppingBag, FaTrash } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {
    const course = useLoaderData();
    const { _id, course_id, course_name, imageUrl, description, price } = course;
    const checkOutHandler = () => {
        toast.success('You have Successfully buy this course', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <div className='row shadow'>
            <div className="col-lg-6 ">
                <div className="p-3 mb-5">
                    <img src={imageUrl} className="img-fluid course-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title mt-lg-4">Course Name: {course_name}</h5>
                        <p className="card-text mt-lg-4 fw-bold">Course Details: {description}</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h3 className='text-center pt-lg-3 pb-lg-2 mt-lg-5 rounded bg-info'>Order Details</h3>
                <table className="table table-success table-striped mt-lg-4">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">SL No.</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <th scope="row">1</th>
                            <td className='fw-bold'>{course_name}</td>
                            <td className='fw-bold'>{price}</td>
                            <td>
                                <FaTrash className='text-danger fw-bold' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className='btn btn-info w-25 m-auto mb-4 fw-bold fs-5' onClick={checkOutHandler}> <FaShoppingBag className='mb-1'/> Buy</button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Checkout;