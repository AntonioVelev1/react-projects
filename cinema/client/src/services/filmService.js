const API_URL = 'http://localhost:3030/api/films';

export const getFilm = async (filmId) => {
    try {
        let res = await fetch(`${API_URL}/getFilm`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({filmId})
        });

        let result = await res.json();

        if (res.ok) {
            return result;
        }
    }
    catch (err) {
        return err;
    }
}

export const getAll = async () => {
    try {
        let res = await fetch(`${API_URL}/all`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
        });

        let result = await res.json();

        if (res.ok) {
            return result;
        }
    }
    catch (err) {
        return err;
    }
}