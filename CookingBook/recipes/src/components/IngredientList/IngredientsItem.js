function IngredientsItem({
    ingredient,
    onDelete
}) {
    return (
        <li>{ingredient.ingredientName} - {ingredient.ingredientValue}
        <button onClick={(e) => onDelete(e, ingredient.id)}><i class="fas fa-trash-alt"></i></button>
        </li>
    );
}

export default IngredientsItem;