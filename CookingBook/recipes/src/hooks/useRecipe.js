import { useState, useEffect } from "react";

import * as recipeService from '../services/recipeService';

const useRecipe = (recipeId) => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
            })
    }, []);

    return [
        recipe,
        setRecipe
    ];
}

export default useRecipe;