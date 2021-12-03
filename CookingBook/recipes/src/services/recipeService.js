const API_URL = 'recipe';

export const getAll = () => {
    return fetch(API_URL)
    .then(res => res.json)
    .then(recipes => {
        console.log(recipes);
    });
}