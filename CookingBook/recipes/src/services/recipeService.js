const API_URL = 'https://locallhost/api/recipes';

export const getAll = () => {
    return fetch(API_URL)
    .then(res => res.json)
    .then(recipes => {
        console.log(recipes);
    });
}