import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvidor/AuthProvider';
import './Navbar.css';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState('light')

    const handleThemeChange = (theme) => {
        console.log(theme)
        setTheme(theme);
    }

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='sticky-top bg-light'>

            <div className='container pt-2 pb-2'>
                <nav className="navbar navbar-expand-lg navbar-light bg-sm-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand fs-3 fw-bold logo" to="/">GrowBig</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-3 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px;" }}>
                                <li className="nav-item fs-5 fw-bold item">
                                    <Link className="nav-link" aria-current="page" to="/course">Courses</Link>
                                </li>
                                <li className="nav-item fs-5 fw-bold item">
                                    <Link className="nav-link" to="/faq">FAQ</Link>
                                </li>

                                <li className="nav-item fs-5 fw-bold item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                {
                                    user?.uid ?
                                        <>
                                            <img src={user.photoURL} style={{ height: '40px' }} className='rounded-circle' alt="" />
                                            {/* <li className="nav-item fs-5 fw-bold item">
                                                <p>{user?.displayName}</p>
                                            </li> */}
                                            <button onClick={handleLogOut}>Logout</button>

                                        </>
                                        :
                                        <>
                                            <li className="nav-item fs-5 fw-bold item">
                                                <Link className="nav-link" to="/register">Register</Link>
                                            </li>
                                        </>
                                }

                            </ul>
                            <div className="d-flex ms-4">
                                {
                                    theme === 'light' ? <button className="btn btn-outline-dark" onClick={() => handleThemeChange('dark')} type="button">dark</button> : <button onClick={() => handleThemeChange('light')} className="btn btn-outline-success" type="button">light</button>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;