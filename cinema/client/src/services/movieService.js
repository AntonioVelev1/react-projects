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

export const getFromFavourites = async (movieId) => {
    try {
        let res = await fetch(`http://api.tvmaze.com/shows/${movieId}`, {
            mode: 'no-cors',
            headers: {
                'content-type': 'application/json',
            }
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