import { useEffect, useState, createContext } from 'react';
import * as authService from '../services/authServices';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState({
        _id: '',
        email: '',
    });

    useEffect(() => {
        let userLocal = authService.getLocalStorage();
        if (!!userLocal) {
            let currUser = JSON.parse(userLocal);
            setUser(currUser);
        }
    }, []);

    console.log('test');
    const login = (data) => {
        setUser(data);
    }

    const logout = () => {
        setUser({
            _id: '',
            email: '',
        });
    }


    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}