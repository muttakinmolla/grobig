import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import './MainCourse.css';

const MainCourse = () => {
    const courses = useLoaderData();
    return (
        <div className="container">
            <div className='row'>
                <div className="col-lg-3 border aside">
                    <ul>
                        {
                            courses.map(course => <li className='course-item pt-2 pb-2 mt-3 mb-3' course={course} key={course.id}><Link className='nav-link' to={`course/${course.id}`}>{course.name}</Link></li>)
                        }
                    </ul>
                </div>
                <div className="col-lg-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MainCourse;