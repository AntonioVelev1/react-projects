import IngredientsItem from "./IngredientsItem";
import uniqid from 'uniqid';
import { useState } from 'react';

function IngredientsList() {
    const [ingredients, setIngredients] = useState([]);

    const addIngredientHandler = function (e) {
        let form = e.currentTarget.form;

        let formElements = Object.values(form);
        let ingredientNameInput = formElements[3];
        let ingredientValueInput = formElements[4];

        let formData = new FormData(form);
        let ingredientName = formData.get('ingredientsName');
        let ingredientValue = formData.get('ingredientsValue');
        console.log(ingredientName, ingredientValue);

        let newIngredients = {
            id: uniqid(),
            ingredientName: ingredientName,
            ingredientValue: ingredientValue,
        };

        
        setIngredients(state => [
            ...state,
            newIngredients
        ]);

        ingredientNameInput.value = '';
        ingredientValueInput.value = '';
    }

    return (
        <>
            <div className="wrap-input100 rs1-wrap-input100 validate-input">
                <span className="label-input100">Ingredients</span>
                <div className="ingredients">
                    <label htmlFor="ingredientsName">Igredients name
                        <input className="input100 ingredients-input" type="text" name="ingredientsName" />
                    </label>
                    <label htmlFor="ingredientsValue">Igredients value
                        <input className="input100 ingredients-input" type="text" name="ingredientsValue" />
                    </label>
                    <span className="focus-input100"></span>
                </div>
                <button className="add-ingredient" type="button" onClick={addIngredientHandler}>Add Ingredient</button>
                <div className="ingredients-list">
                    <h3>Yor ingredients</h3>
                    <ul>
                        {ingredients.map(ingredient =>
                            <IngredientsItem
                                key={ingredient.id}
                                ingredient={ingredient}
                            />
                        )}
                    </ul>
                </div>
            </div>

        </>
    );
}

export default IngredientsList;