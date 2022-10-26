import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const AllCourses = () => {
    const allCourses = useLoaderData();
    return (
        <div className='row mt-lg-3'>
            {
                allCourses.map(course=><SingleCourse course={course} key={course._id}></SingleCourse>)
            }
        </div>
    );
};

export default AllCourses;