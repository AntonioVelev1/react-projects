const API_URL = 'http://localhost:3030/api/notes';

export const getNotes = async (data) => {
    try {
        let res = await fetch(`${API_URL}/getNote`, {
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

export const createNote = async (data) => {
    try {
        let res = await fetch(`${API_URL}/createNote`, {
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

export const getAll = async (data) => {
    try {
        let res = await fetch(`${API_URL}/all`, {
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

export const updateNote = async (data) => {
    try {
        let res = await fetch(`${API_URL}/updateNote`, {
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

export const deleteNote = async (data) => {
    try {
        let res = await fetch(`${API_URL}/deleteNote`, {
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