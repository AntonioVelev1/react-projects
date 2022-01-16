
function EditIngredientsItem({
    ingredient,
    onDelete
}) {
    function setIngredientsName(e) {
        e.preventDefault();
        let newName = e.currentTarget.value;
        ingredient.ingredientName = newName;
    }

    function setIngredientsValue(e) {
        e.preventDefault();
        let newValue = e.currentTarget.value;
        ingredient.ingredientValue = newValue;
    }

    return (
        <div>
            <label>
                <input onBlur={setIngredientsName} className="input100 wrap-input100" type="text" name="ingredientName" defaultValue={ingredient.ingredientName} />
            </label>
            <label>
                <input onBlur={setIngredientsValue} className="input100 wrap-input100" type="text" name="ingredientValue" defaultValue={ingredient.ingredientValue} />
            </label>
            <label>
                <button onClick={(e) => onDelete(e, ingredient._id)}><i className="fas fa-trash-alt"></i></button>
            </label>
        </div>
    );
}

export default EditIngredientsItem;