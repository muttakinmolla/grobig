import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const AllCourses = () => {
    const allCourses = useLoaderData();
    if (!allCourses) {
        return (
            <p>loading....</p>
        )
    }
    return (
        <div className='row mt-lg-3'>
            {
                allCourses.map(course => <SingleCourse course={course} key={course._id}></SingleCourse>)
            }
        </div>
    );
};

export default AllCourses;