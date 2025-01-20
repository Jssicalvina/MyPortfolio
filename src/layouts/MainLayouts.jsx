// outer mengatur halaman dari berdasarkan path

import {Outlet} from 'react-router-dom';
import Navbar from '../partials/Navbar';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <div className ='container pt-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;