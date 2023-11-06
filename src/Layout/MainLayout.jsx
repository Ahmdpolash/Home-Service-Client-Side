import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Navbar/Nav';

import Footers from '../Pages/Home/Footer';

const MainLayout = () => {
    return (
        <>
            <Nav/>
            <Outlet/>
            <Footers/>
        </>
    );
};

export default MainLayout;