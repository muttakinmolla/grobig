import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login.jpg';
import { AuthContext } from '../../contexts/AuthProvidor/AuthProvider';

const Login = () => {
    const { googleSignIn, signInEmailPassword, githubSignin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                setError('');
                navigate(from, { replace: true })
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

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })

    }
    return (
        <div className="container">
            <div className="bg">
                <div className="row">
                    <div className="col-lg-6 mt-lg-5 mb-lg-5 m-auto">
                        <div className="card mb-3">
                            <div className="row g-0 p-lg-3">
                                <div className="col-md-6">
                                    <img src={loginImage} className="img-fluid h-100 rounded" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <form onSubmit={handleSignIn}>

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
                                                <button type="submit" className="btn btn-primary w-100">Login</button>
                                            </div>
                                            <p className='text-center mt-lg-3'>OR</p>
                                            <div className="">
                                                <button type='button' onClick={handleGoogleSignIn} className='btn btn-outline-primary w-100'><FaGoogle className='fw-bold' /> login With Google</button>
                                                <button onClick={handleGitHubSignIng} type='button' className='btn btn-outline-primary w-100 mt-lg-2'><FaGithub className='fw-bold' /> login With GitHub</button>
                                            </div>
                                            <div className="m-auto pt-2">
                                                <p className='ms-3'>Are you a New User? Please <Link to="/register">Register</Link></p>
                                            </div>
                                        </form>
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

export default Login;