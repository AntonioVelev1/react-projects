const API_URL = 'http://localhost:3030/api/movies';

export const getMovie = async (movieId) => {
    try {
        let res = await fetch(`http://api.tvmaze.com/shows/${movieId}`);

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

export const search = async (searchParams) => {
    // fetch(`http://api.tvmaze.com/search/shows?q=${searchParams}`)
    //     .then(response => response.json())
    //     .then(movies => { return movies });
    try {
        let res = await fetch(`http://api.tvmaze.com/search/shows?q=${searchParams}`);

        let result = await res.json();

        if (res.ok) {
            return result;
        }
    }
    catch (err) {
        return err;
    }
}