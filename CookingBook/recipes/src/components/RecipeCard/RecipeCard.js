function RecipeCard({
    recipe
}) {
    return (
        <div className="post-slide">
            <div className="post-img">
                <div className="post-abs"><p>{recipe.name}</p></div>
                <img src={recipe.imgUrl} alt="" />
            </div>
            <h3 className="post-title"><a href="#">{recipe.name}</a></h3>
            <p className="post-description">
                12$
            </p>
        </div>
    );
}

export default RecipeCard;