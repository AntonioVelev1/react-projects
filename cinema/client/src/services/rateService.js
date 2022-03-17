const API_URL = 'http://localhost:3030/api/rates';

export const getRate = async (data) => {
    try {
        let res = await fetch(`${API_URL}/getRate`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        let result = await res.json();

        if (res.ok) {
            return result
        }
    }
    catch (err) {
        return err;
    }
}

export const createRate = async (data) => {
    try {
        let res = await fetch(`${API_URL}/createRate`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        let result = await res.json();

        if (res.ok) {
            return result
        }
    }
    catch (err) {
        return err;
    }
}

export const updateRate = async (data) => {
    try {
        let res = await fetch(`${API_URL}/updateRate`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        let result = await res.json();

        if (res.ok) {
            return result
        }
    }
    catch (err) {
        return err;
    }
}

export const deleteRate = async (data) => {
    try {
        let res = await fetch(`${API_URL}/deleteRate`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        let result = await res.json();

        if (res.ok) {
            return result
        }
    }
    catch (err) {
        return err;
    }
}