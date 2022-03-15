import { createContext, useState, useEffect } from "react";

import * as authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState({
        id: '',
        //email: '',
    });

    useEffect(() => {
        const user = authService.getUser();
        if (user) {
            login(user)
        } else {
            logout();
        }
    }, []);

    const login = (data) => setUser(data);

    const logout = () => setUser({
        id: '',
        //email: '',
    });

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;