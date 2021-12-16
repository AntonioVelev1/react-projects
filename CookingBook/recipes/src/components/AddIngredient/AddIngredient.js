function AddIngredient({
    addIngredient
}) {
    return (
        <>
            <div className="ingredients">
                <label htmlFor="ingredientsName">
                    <input className="input100 ingredients-input" type="text" name="ingredientsName" placeholder="Igredients name" />
                </label>
                <label htmlFor="ingredientsValue">
                    <input className="input100 ingredients-input" type="text" name="ingredientsValue" placeholder="Igredients value" />
                </label>
                <span className="focus-input100"></span>
            </div>
            <button className="add-ingredient" type="buton" onClick={(e) => addIngredient(e)}>Add Ingredient</button>
        </>
    );
}

export default AddIngredient;