function IngredientsItem({
    ingredient
}) {
    return (
        <li>{ingredient.ingredientName} - {ingredient.ingredientValue}</li>
    );
}

export default IngredientsItem;