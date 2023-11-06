import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Navbar/Nav';

import Footers from '../Pages/Home/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footers/>
        </div>
    );
};

export default MainLayout;