import IngredientsItem from "./IngredientItem/IngredientsItem";
import uniqid from 'uniqid';
import { useState } from 'react';

function IngredientsList({
    getIngredients,
    deleteIngredients
}) {
    const [ingredients, setIngredients] = useState([]);

    const addIngredientHandler = function (e) {
        e.preventDefault();

        let form = e.currentTarget.form;

        let formElements = Object.values(form);
        let ingredientNameInput = formElements[3];
        let ingredientValueInput = formElements[4];

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

        ingredientNameInput.value = '';
        ingredientValueInput.value = '';
    }

    const deleteAddedIngredientsHandler = function(e, id) {
        e.preventDefault();
        deleteIngredients(id);
        setIngredients(oldIngredients => oldIngredients.filter(x => x.id !== id));
    }

    return (
        <>
            <div className="wrap-input100 rs1-wrap-input100 validate-input">
                <span className="label-input100">Ingredients</span>
                <div className="ingredients">
                    <label htmlFor="ingredientsName">
                        <input className="input100 ingredients-input" type="text" name="ingredientsName" placeholder="Igredients name"/>
                    </label>
                    <label htmlFor="ingredientsValue">
                        <input className="input100 ingredients-input" type="text" name="ingredientsValue" placeholder="Igredients value"/>
                    </label>
                    <span className="focus-input100"></span>
                </div>
                <button className="add-ingredient" type="buton" onClick={addIngredientHandler}>Add Ingredient</button>
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