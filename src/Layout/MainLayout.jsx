import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Navbar/Nav';

const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;