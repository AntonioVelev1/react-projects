const API_URL = 'http://localhost:3030/api/movies';

export const getMovie = async (movieId) => {
    try {
        let res = await fetch(`${API_URL}/getMovie/${movieId}`, {
            method: 'GET',
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

export const getFavourites = async (userId) => {
    try {
        let res = await fetch(`${API_URL}/favourites`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ userId })
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

export const addToFavourites = async (movieId, userId) => {
    try {
        let res = await fetch(`${API_URL}/addToFavourites/${movieId}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ userId })
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

export const removeFromFavourites = async (movieId, userId) => {
    try {
        let res = await fetch(`${API_URL}/removeFromFavourites/${movieId}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ userId })
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