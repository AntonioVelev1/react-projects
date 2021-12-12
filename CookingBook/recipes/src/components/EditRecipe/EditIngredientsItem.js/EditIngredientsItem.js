import { useState, useEffect } from "react";

function EditIngredientsItem({
    ingredient,
    onDelete
}) {
    

    return (
        <div>
            <label>
                <input className="input100" type="text" name="ingredientName" defaultValue={ingredient.ingredientName} />
            </label>
            <label>
                <input className="input100" type="text" name="ingredientValue" defaultValue={ingredient.ingredientValue} />
            </label>
            <label>
            <button onClick={(e) => onDelete(e, ingredient.id)}><i className="fas fa-trash-alt"></i></button>
            </label>
        </div>
    );
}

export default EditIngredientsItem;