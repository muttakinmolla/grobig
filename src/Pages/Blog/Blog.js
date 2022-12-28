import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvidor/AuthProvider';

const Blog = () => {
    const {user} = useContext(AuthContext)
    console.log(user?.email)
    return (
        <div className='container'>
            <div className="row mb-lg-5 mt-lg-5">
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn btn-outline-primary w-100" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">1. What is Cors?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                                <div className="card card-body">
                                    <p><span className='fw-bold'>Answer :</span> CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn btn-outline-primary w-100" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">2. Why We are youse Firebase and what are the other option?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                <div className="card card-body">
                                    <p><span className='fw-bold'>Answer : </span>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. The other option We can use - Back4App, Parse, ASW Amplify, Backendless, Kuzzle supabase. etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn btn-outline-primary w-100" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">3. What does Private Route work?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample3">
                                <div className="card card-body">
                                    <p><span className='fw-bold'>Answer : </span> The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. Private Route works like a scanner. It's scan the user is Authenticate or not?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-auto">
                    <p>
                        <a className="btn btn-outline-primary w-100" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">4. What is Node ?</a>
                    </p>
                    <div className="row mb-lg-3">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample4">
                                <div className="card card-body">
                                    <p><span className='fw-bold'>Answer : </span>Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;