import React from 'react';
import './Register.css';
import loginImage from '../../assets/images/login.jpg';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvidor/AuthProvider';
import { useContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import toast from 'react-hot-toast';

const Register = () => {
    const { googleSignIn, createUserEmailPassword, githubSignin, updateUserProfile, emailVerify } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
            .then(result => { })
            .catch(error => { })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUserEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoUrl);
                handleEmailVerification();
                toast.success('Please Verify your Email');
                navigate(from, { replace: true });
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
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGitHubSignIng = () => {
        githubSignin(githubProvider)
            .then(result => {
                const user = result.user;
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleEmailVerification = () => {
        emailVerify()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                setError(error.message);
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
                                            <button onClick={handleGitHubSignIng} className='btn btn-outline-primary w-100 mt-lg-2'><FaGithub className='fw-bold' /> login With github</button>
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