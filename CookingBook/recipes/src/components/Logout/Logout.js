import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices';
import { useEffect } from 'react/cjs/react.development';
import { useAuthContext } from '../../hooks/useAuthContext';

function Logout() {
    let { logout } = useAuthContext();
    let navigate = useNavigate();

    useEffect(()=>{
        authService.logout().then(()=>{
            logout();
            navigate("/login");
        })
    },[])

    return null;
}

export default Logout;