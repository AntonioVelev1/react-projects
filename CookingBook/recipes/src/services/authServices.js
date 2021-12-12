const API_URL = 'http://localhost:3030/api/users';

export const login = async (userData) => {
    let res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
    // .then(rlt=>  localStorage.setItem('username', rlt.username))
    // .catch(er => (er.message));

    let result = await res.json();

    if (res.ok) {
        setLocalStorage(result);
        return result;
    }

    throw result.message;
}

export const register = async (userData) => {
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
        setLocalStorage(result);
        return result;
    }

    throw result.message;
}

export const logout = () => {
    return fetch(`${API_URL}/logout`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(res => localStorage.removeItem('user'));
};

export const setLocalStorage = (result) => {
    let obj = JSON.stringify(result);
    localStorage.setItem('user', obj);
};

export const getLocalStorage = () => {
    return localStorage.getItem('user');
};

