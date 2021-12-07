function EditIngredientsItem({
    ingredient
}) {
    return (
        <div>
            <label>
                <input className="input100" type="text" name="ingredientName" defaultValue={ingredient.ingredientName} />
            </label>
            <label>
                <input className="input100" type="text" name="ingredientValue" defaultValue={ingredient.ingredientValue} />
            </label>
        </div>
    );
}

export default EditIngredientsItem;