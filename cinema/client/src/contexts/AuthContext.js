import { createContext, useState, useEffect } from "react";

import * as authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState({
        _id: '',
    });

    useEffect(() => {
        const userFromToken = authService.userFromToken();

        if (!!userFromToken && user._id === '') {
            authService.getUserById(userFromToken._id)
                .then((user) => {
                    if (user) {
                        login(user)
                    } else {
                        logout();
                    }
                })
        }

    }, []);

    const hasUser = user._id !== '';

    const login = (data) => setUser(data);

    const refreshUser = () => {
        const userFromToken = authService.userFromToken();

        authService.getUserById(userFromToken._id)
            .then((user) => {
                if (user) {
                    login(user);
                } else {
                    logout();
                }
            })
    }

    const logout = () => setUser({
        _id: '',
    });

    return (
        <AuthContext.Provider value={{ user, login, logout, refreshUser, hasUser }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;