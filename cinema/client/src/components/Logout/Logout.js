import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContenxt";
import * as authService from '../../services/authService';

function Logout () {
    const navigate = useNavigate();
    const { logout } = useAuthContext();

    useEffect(() => {
        authService.logout()
            .then((res) => {
                if(res){
                    logout();
                    navigate('/login');
                }
            });
    }, []);
    
    return null;
}

export default Logout;