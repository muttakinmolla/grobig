import React from 'react';

const Login = () => {
    return (
        <div className='container mt-lg-5 mb-lg-5'>
            <div className="row">
                <form>
                    <div className="mb-3 m-auto col-lg-7">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' placeholder='type your email' />
                    </div>
                    <div className="mb-3 m-auto col-lg-7">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' placeholder='type your password'/>
                    </div>
                    <div className="col-lg-7 m-auto">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;