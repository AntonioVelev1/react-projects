import { Link } from 'react-router-dom';

function RecipeCard({
    recipe
}) {
    console.log(recipe);
    return (
        <div className="post-slide">
            <div className="post-img">
                <div className="post-abs"><p>{recipe.name}</p></div>
                <img src={recipe.imageURL} alt="" />
            </div>
            <h3 className="post-title"><Link to={`/details/${recipe._id}`}>{recipe.name}</Link></h3>

        </div>
    );
}

export default RecipeCard;