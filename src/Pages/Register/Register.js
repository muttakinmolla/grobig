import React from 'react';
import './Register.css';
import loginImage from '../../assets/images/login.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvidor/AuthProvider';
import { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';

const Register = () => {
    const { googleSignIn, createUserEmailPassword } = useContext(AuthContext);
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name, photoUrl)
        createUserEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mt-lg-5 mb-lg-5 m-auto">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={loginImage} className="img-fluid h-100 p-2 rounded" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <form onSubmit={handleFormSubmit}>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" name='name' placeholder='type your name' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Photo Url</label>
                                                <input type="text" className="form-control" name='photoUrl' placeholder='put your photoUrl' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Email address</label>
                                                <input type="email" className="form-control" name='email' placeholder='type your email' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" name='password' placeholder='type your password' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <p className='text-danger'>{error}</p>
                                            </div>
                                            <div className="m-auto pt-lg-2">
                                                <button type="submit" className="btn btn-primary w-100">Register</button>
                                            </div>
                                        </form>
                                        <p className='text-center mt-lg-3'>OR</p>
                                        <div className="">
                                            <button onClick={handleGoogleSignIn} className='btn btn-outline-primary w-100'><FaGoogle className='fw-bold' /> login With Google</button>
                                            <button className='btn btn-outline-primary w-100 mt-lg-2'><FaFacebook className='fw-bold' /> login With Google</button>
                                        </div>
                                        <p className='ms-2 mt-2'>Already Have an Account? <Link to="/login">Login</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Register;