
import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import App from '../../App';
import Home from '../Home/Home';
// import Featured from '../Featured/featured';
// import DonationDetails from '../Donation/DonationDetails';



const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <App></App>
            {/* <Featured></Featured> */}
            
            {/* <DonationDetails></DonationDetails> */}
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;