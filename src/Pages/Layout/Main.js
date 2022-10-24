import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div className='container-fluid'>
            <NavBar></NavBar>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;