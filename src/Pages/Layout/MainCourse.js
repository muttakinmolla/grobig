import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import './MainCourse.css';

const MainCourse = () => {
    const courses = useLoaderData();
    return (
        <div className=''>
            <div className="container main-course">
                <div className='row'>
                    <div className="col-lg-3 aside">
                        <ul className='px-2'>
                            {
                                courses.map(course => <li className='course-item pt-2 pb-2 mt-3 mb-3 rounded' course={course} key={course.id}><Link className='nav-link ps-lg-3 text-white' to={`course/${course.id}`}>{course.name}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCourse;