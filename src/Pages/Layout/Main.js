import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div className='container-fluid'>
            <NavBar></NavBar>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;