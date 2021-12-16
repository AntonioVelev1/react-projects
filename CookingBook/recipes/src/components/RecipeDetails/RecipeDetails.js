import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../hooks/useAuthContext';
import * as recipeService from '../../services/recipeService';

import DeleteConfirmation from '../common/DeleteConfirmation/DelteConfirmation';
import { } from './Details.css';


function RecipeDetails() {
    const [recipe, setRecipe] = useState({});
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    let { recipeId } = useParams();
    const { user } = useAuthContext();
    const userId = user._id;

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
            })
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();
        recipeService.deleteOne(recipeId, user._id)
            .then(res => {
                navigate('/all');
            });
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();

        setShow(true);
    }

    const likeHandler = () => {
        if (recipe.likes.includes(userId)) {
            console.log('You already like this recipe');

            recipeService.unlike(recipeId, userId)
                .then(res => {
                    if (res.message === 'Uniked successful!') {
                        let likes = recipe.likes.filter(x => x !== userId);
                        setRecipe(state => ({
                            ...state,
                            likes,
                        }));
                    }
                });
        } else {
            recipeService.like(recipeId, userId)
                .then(res => {
                    if (res.message === 'Liked successful!') {
                        let likes = [...recipe.likes, userId];
                        setRecipe(state => ({
                            ...state,
                            likes,
                        }));
                    }
                });
        }
    }

    return (
        <>
            {show
                ? <DeleteConfirmation onClose={() => setShow(false)} />
                : ''}
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
                                <li key={x._id}>{x.ingredientName} - {x.ingredientValue}</li>
                            )}
                        </ul>
                    </article>
                </section>
                <div className="text-center details-description">
                    <p>{recipe.description}</p>
                </div>
                {userId && (userId === recipe.userId
                    ? <div className="details-btns">

                        <Link className="details-edit-btn" to={`/edit/${recipe._id}`}>Edit</Link>

                        <button className="details-edit-btn" onClick={deleteClickHandler}>Delete</button>
                    </div>
                    : <button className="details-edit-btn" onClick={likeHandler}>Like</button>
                )}
                <div>
                    <p className='likes'>Likes: {recipe.likes?.length}</p>
                </div>
            </section>
        </>
    );
}

export default RecipeDetails;