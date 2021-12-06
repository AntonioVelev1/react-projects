const API_URL = 'http://localhost:3030/api/recipes';

export const getAll = () => {
    return fetch(`${API_URL}/all`)
        .then(res => res.json());
}

export const create = (recipeData) => {
    return fetch(`${API_URL}/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(recipeData)
    });
}

export const getOne = (recipeId) => {
    return fetch(`${API_URL}/details/${recipeId}`)
        .then(res => res.json());
}