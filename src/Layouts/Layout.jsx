
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber/Navber';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className=' min-h-[calc(100vh-306px)]'>
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;