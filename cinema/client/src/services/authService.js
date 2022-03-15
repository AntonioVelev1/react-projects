import Cookies from 'js-cookie';
const API_URL = 'http://localhost:3030/api/users';

const cookieKey = 'token';
export const token = Cookies.get(cookieKey);


export const login = async (userData) => {
    try {
        let res = await fetch(`${API_URL}/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        let result = await res.json();

        if (res.ok) {
            Cookies.set('token', result.token);
            return parseToken(result.token);
        }
    }
    catch (err) {
        return err;
    }

}

export const register = async (userData) => {
    try {
        let res = await fetch(`${API_URL}/register`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        })

        let result = await res.json();

        if (res.ok) {
            Cookies.set('token', result.token);
            return parseToken(result.token);
        }
    }
    catch (err) {
        return err;
    }
}

export const logout = async () => {
    try {
        let res = await fetch(`${API_URL}/logout`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            }
        });

        let result = await res.json();

        if (res.ok) {
            Cookies.remove('token');
        }

        return result;
    }
    catch (err) {
        return err;
    }
};


export const getUser = () => {
    return parseToken();
}


function parseToken() {
    const token = Cookies.get(cookieKey);

    if (!token) {
        return;
    }

    try {
        const parsedToken = JSON.parse(atob(token.split('.')[1]));
        return {
            id: parsedToken.id,
            //username: parsedToken.unique_name,
        }
    } catch (error) {
        return;
    }
}