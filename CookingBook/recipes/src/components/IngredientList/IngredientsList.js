import IngredientsItem from "./IngredientItem/IngredientsItem";
import uniqid from 'uniqid';
import { useState } from 'react';

import AddIngredient from "../AddIngredient/AddIngredient";

function IngredientsList({
    getIngredients,
    deleteIngredients
}) {
    const [ingredients, setIngredients] = useState([]);

    const addIngredientHandler = function (e) {
        e.preventDefault();

        let form = e.currentTarget.form;

        let formData = new FormData(form);
        let ingredientName = formData.get('ingredientsName');
        let ingredientValue = formData.get('ingredientsValue');

        let newIngredients = {
            id: uniqid(),
            ingredientName: ingredientName,
            ingredientValue: ingredientValue,
        };

        setIngredients(state => [
            ...state,
            newIngredients
        ]);

        getIngredients(newIngredients);

        form.elements['ingredientsName'].value = '';
        form.elements['ingredientsValue'].value = '';
    }

    const deleteAddedIngredientsHandler = function (e, id) {
        e.preventDefault();
        deleteIngredients(id);
        setIngredients(oldIngredients => oldIngredients.filter(x => x.id !== id));
    }

    return (
        <>
            <div className="wrap-input100 rs1-wrap-input100 validate-input">
                <span className="label-input100">Ingredients</span>
                <AddIngredient addIngredient={addIngredientHandler}></AddIngredient>
                <div className="ingredients-list">
                    <h3 className="added-ingredients-title">Added ingredients</h3>
                    <ul>
                        {ingredients.map(ingredient =>
                            <IngredientsItem
                                key={ingredient.id}
                                ingredient={ingredient}
                                onDelete={deleteAddedIngredientsHandler}
                            />
                        )}
                    </ul>
                </div>
            </div>

        </>
    );
}

export default IngredientsList;