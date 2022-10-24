import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-6">
                        <div className="footer-info">
                            <div className="section-title">
                                <h2>Home Address</h2>
                            </div>
                            <div>
                                <p>ariara-7511, Lohagra, Narail, Khulna, Bangladesh.</p>
                            </div>

                            <ul className="social-icon">
                                <li>
                                    <FaFacebook />
                                </li>
                                <li> <FaInstagram /></li>
                                <li> <FaTwitter /></li>
                            </ul>

                            <div className="copyright-text">
                                <p>Copyright &copy; 2022 Muttakin Molla</p>

                                <p>Design & Develop: Md. Muttakin Molla</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="footer-info">
                            <div className="section-title">
                                <h2>Contact Info</h2>
                            </div>
                            <address>
                                <p>+88 01711 338153, +88 01713 213951</p>
                                <p><a href="mailto:youremail.co">muttakinmmolla@gmail.com</a></p>
                            </address>

                            <div className="footer_menu">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><Link to="#">Career</Link></li>
                                    <li><Link to="#">Investor</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Refund Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="footer-info newsletter-form">
                            <div className="section-title">
                                <h2>Newsletter Signup</h2>
                            </div>
                            <div>
                                <div className="form-group">
                                    <form action="#" method="get">
                                        <input type="email" className="form-control" placeholder="Enter your email" name="email" id="email" required="" />
                                        <input type="submit" className="form-control" name="submit" id="form-submit" value="Send me" />
                                    </form>
                                    <span><sup>*</sup> Please note - we do not spam your email.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;