
import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import App from '../../App';
import Featured from '../Featured/featured';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <App></App>
            <Featured></Featured>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;