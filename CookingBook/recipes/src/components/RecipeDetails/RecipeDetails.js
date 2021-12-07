import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as recipeService from '../../services/recipeService';


function RecipeDetails() {
    const [recipe, setRecipe] = useState({});
    let { recipeId } = useParams();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
            })
    }, []);

    return (
        <>
            <section className="details-page">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center">
                            <h2>{recipe.name}</h2>
                        </div>
                    </div>
                </div>
                <section className="details-content">
                    <article className="details-img">
                        <img src={recipe.imageURL} alt="" />
                    </article>
                    <article className="blog-section-title text-center details-ingredients">
                        <h3>Ingredients</h3>
                        <ul className="details-ingredients-list">
                            {recipe.ingredients?.map(x =>
                                <li key={x._id}>{x.ingredientName} {x.ingredientValue}</li>
                            )}
                        </ul>
                    </article>
                </section>
                <div className="text-center details-description">
                    <p>{recipe.description}</p>
                </div>
                <div className="details-edit-btn">
                    <Link to={`/edit/${recipe._id}`}>Edit</Link>
                </div>
            </section>
        </>
    );
}

export default RecipeDetails;