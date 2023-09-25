
import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import App from '../../App';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <App></App>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;