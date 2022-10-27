import React from 'react';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
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
                                courses.map(course => <li className='course-item rounded' key={course.id}><NavLink course={course}  className="nav-link mt-3 rounded pt-2 pb-2  ps-lg-3 text-white {({isActive})=> isActive? 'active' : undefined}" to={`course/${course.id}`}>{course.name}</NavLink></li>)
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