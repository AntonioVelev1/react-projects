const API_URL = 'http://localhost:3030/api/recipes';

export const getAll = () => {
    return fetch(`${API_URL}/all`)
        .then(res => res.json());
}

export const getMyRecipes = (userId) => {
    return fetch(`${API_URL}/myRecipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ userId })
    })
        .then(res => res.json());
}

export const getLatest = () => {
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

export const edit = (recipeData, recipeId) => {
    return fetch(`${API_URL}/edit/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(recipeData)
    })
        .then(res => res.json());
}

export const deleteOne = (recipeId, userId) => {
    return fetch(`${API_URL}/delete/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({userId})
    })
        .then(res => res.json());
}

export const getOne = (recipeId) => {
    return fetch(`${API_URL}/details/${recipeId}`)
        .then(res => res.json());
}


export const like = (recipeId, userId) => {
    return fetch(`${API_URL}/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({userId})
    })
        .then(res => res.json());
}

export const unlike = (recipeId, userId) => {
    return fetch(`${API_URL}/unlike/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({userId})
    })
        .then(res => res.json());
}