import { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authServices';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState({
        _id: '',
        email: '',
    });

    let navigate = useNavigate();

    useEffect(() => {
        authService.getProfile()
            .then(res => {
                console.log(res);
                if (res.message) {
                    logout();
                }
                else {
                    login(res);
                }
            });

        // if (!!userLocal) {
        //     let currUser = JSON.parse(userLocal);
        //     setUser(currUser);
        // }
    }, []);

    const login = (data) => {
        setUser(data);
    }

    const logout = () => {
        setUser({
            _id: '',
            email: '',
        });
    }
    const checkToken = (result) => {
        if (result.message.includes('token')) {
            logout();
            return true;
        }
        return false;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, checkToken }}>
            {children}
        </AuthContext.Provider>
    );
}