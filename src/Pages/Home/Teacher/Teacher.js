import React from 'react';
import './Teacher.css';
import author from '../../../assets/images/author-image1.jpg';
import author2 from '../../../assets/images/author-image2.jpg';
import author3 from '../../../assets/images/author-image3.jpg';
import author4 from '../../../assets/images/author-image4.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Teacher = () => {
    return (
        <div className='mb-lg-5'>
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">
                        <div className="section-title text-center mt-lg-5 mb-lg-5">
                            <h2>Teachers <small>Meet Professional Trainers</small></h2>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 text-center">
                        <div className="team-thumb">
                            <div className="team-image">
                                <img src={author} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="team-info">
                                <h3>Mark Wilson</h3>
                                <span>I love Teaching</span>
                            </div>
                            <ul className="social-icon">
                                <li>
                                    <FaFacebook />
                                </li>
                                <li> <FaInstagram /></li>
                                <li> <FaTwitter /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 text-center">
                        <div className="team-thumb">
                            <div className="team-image">
                                <img src={author2} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="team-info">
                                <h3>Catherine</h3>
                                <span>Education is the key!</span>
                            </div>
                            <ul className="social-icon">
                                <li>
                                    <FaFacebook />
                                </li>
                                <li> <FaInstagram /></li>
                                <li> <FaTwitter /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 text-center">
                        <div className="team-thumb">
                            <div className="team-image">
                                <img src={author3} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="team-info">
                                <h3>Jessie Ca</h3>
                                <span>I like Online Courses</span>
                            </div>
                            <ul className="social-icon">
                                <li>
                                    <FaFacebook />
                                </li>
                                <li> <FaInstagram /></li>
                                <li> <FaTwitter /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 text-center">
                        <div className="team-thumb">
                            <div className="team-image">
                                <img src={author4} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="team-info">
                                <h3>Andrew Berti</h3>
                                <span>Learning is fun</span>
                            </div>
                            <ul className="social-icon">
                                <li>
                                    <FaFacebook />
                                </li>
                                <li> <FaInstagram /></li>
                                <li> <FaTwitter /></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Teacher;