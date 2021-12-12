import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import * as recipeService from '../../services/recipeService';


function RecipeDetails() {
    const [recipe, setRecipe] = useState({});
    const [creator, setCreator] = useState(false);
    const navigate = useNavigate();
    let { recipeId } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                if (result.userId === user._id) {
                    setCreator(true);
                }
                setRecipe(result);
            })
    }, []);

    const deleteHandler = () => {
        recipeService.deleteOne(recipeId, user._id)
            .then(res => {
                navigate('/all');
            });
    }

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
                {creator
                    ? <div className="details-btns">

                        <Link className="details-edit-btn" to={`/edit/${recipe._id}`}>Edit</Link>

                        <button className="details-edit-btn" onClick={deleteHandler}>Delete</button>
                    </div>
                    : ''
                }

            </section>
        </>
    );
}

export default RecipeDetails;