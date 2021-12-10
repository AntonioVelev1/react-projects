import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';

function Logout() {
    let { logout } = useContext(AuthContext);
    let navigate = useNavigate();

    useEffect(()=>{
        authService.logout().then(()=>{
            logout();
            navigate("/login");
        })
    },[])

    return null;
    //return <Navigate to="/login" replace={false} />;
}

export default Logout;