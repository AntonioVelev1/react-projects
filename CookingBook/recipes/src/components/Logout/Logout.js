import { Navigate } from 'react-router-dom';
import * as authService from '../../services/authServices';

function Logout({
    onLogout
}) {
    authService.logout();
    onLogout();

    return <Navigate to="/login" replace={true} />;
}

export default Logout;