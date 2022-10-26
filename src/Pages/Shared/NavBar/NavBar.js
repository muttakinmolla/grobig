import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvidor/AuthProvider';
import './Navbar.css';
import logo from '../../../assets/images/growBig (2).gif';

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
                        <Link className="navbar-brand fs-3 fw-bold logo" to="/"><img src={logo} alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-3 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px;" }}>
                                <li className="nav-item fs-5 fw-bold item me-lg-4">
                                    <Link className="nav-link" aria-current="page" to="/course">Courses</Link>
                                </li>
                                <li className="nav-item fs-5 fw-bold item me-lg-4">
                                    <Link className="nav-link" to="/faq">FAQ</Link>
                                </li>

                                <li className="nav-item fs-5 fw-bold item me-lg-4">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>

                                {
                                    user?.uid ?
                                        <>

                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={user.photoURL} style={{ height: '40px' }} className='rounded-circle' alt="" data-bs-toggle="tooltip" data-bs-placement="top" title={user?.displayName} />
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><button onClick={handleLogOut} className='btn dropdown-item'>Logout</button></li>
                                                    <li><Link className="dropdown-item" href="#">Profile</Link></li>
                                                </ul>
                                            </li>


                                        </>
                                        :
                                        <>
                                            <li className="nav-item fs-5 fw-bold item">
                                                <Link className="nav-link" to="/login">Login</Link>
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