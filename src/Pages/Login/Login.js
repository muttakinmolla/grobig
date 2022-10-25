import React from 'react';
import loginImage from '../../assets/images/login.jpg';

const Login = () => {
    return (
        <div className="bg">
            <div className="row">
                <div className="col-lg-6 mt-lg-5 mb-lg-5 m-auto">
                    <div className="card mb-3">
                        <div className="row g-0 p-lg-5">
                            <div className="col-md-4">
                                <img src={loginImage} className="img-fluid h-100 p-2 rounded" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3 m-auto">
                                            <label className="form-label">Email address</label>
                                            <input type="email" className="form-control" name='email' placeholder='type your email' />
                                        </div>
                                        <div className="mb-3 m-auto">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" name='password' placeholder='type your password' />
                                        </div>
                                        <div className="m-auto">
                                            <button type="submit" className="btn btn-primary">login</button>
                                        </div>
                                    </form>
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