import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const DynamicCourses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className='row mt-lg-3'>
                {
                    courses.map(course => <SingleCourse course={course} key={course._id}></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default DynamicCourses;