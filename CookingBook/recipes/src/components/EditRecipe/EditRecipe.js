import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as recipeService from '../../services/recipeService';
import { useAuthContext } from '../../hooks/useAuthContext';


import uniqid from 'uniqid';

import EditIngredientsItem from './EditIngredientsItem.js/EditIngredientsItem';
import AddIngredient from '../AddIngredient/AddIngredient';
import Notification from '../common/Notification/Notification';

function EditRecipe() {
    const { recipeId } = useParams();

    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [errors, setErrors] = useState([]);
    const [show, setShow] = useState(false);

    let navigate = useNavigate();

    let { user, checkToken } = useAuthContext();
    let userId = user._id;

    useEffect(() => {
        console.log('render');
        recipeService.getOne(recipeId)
            .then(currentRecipe => {
                setRecipe(currentRecipe);
                setIngredients(currentRecipe.ingredients);
            })
            .catch(err => {
                console.log(err)
            });

    }, []);

    function convertMessage(message) {
        let handledMsg = '';

        if (message.includes('name')) {
            handledMsg = 'Name is required! ';
        }

        if (message.includes('description')) {
            handledMsg += 'Description is required! ';
        }

        if (message.includes('image')) {
            handledMsg += 'Image url is required! ';
        }

        if (message.includes('ingredient')) {
            handledMsg += 'Ingredients are required! ';
        }

        return handledMsg;
    }

    const editHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageURL = formData.get('imageURL');


        recipeService.edit({
            name,
            imageURL,
            description,
            ingredients,
            userId,
        },
            recipeId)
            .then(result => {
                if (result.message && checkToken(result)) {
                    navigate('/login');

                } else if (result.message && result.err) {
                    let msg = convertMessage(result.err.message);
                    setErrors([msg]);
                    setShow(true);
                }
                else if (typeof result === 'object' && result.message === undefined) {
                    setRecipe(result);
                    navigate(`/details/${recipeId}`);
                }
            });
    }

    const deleteAddedIngredientsHandler = function (e, id) {
        e.preventDefault();

        let filteredIngredients = ingredients.filter(x => x._id !== id);
        setIngredients(filteredIngredients);
    }

    const addIngredientHandler = function (e) {
        e.preventDefault();

        let form = e.currentTarget.form;

        let formData = new FormData(form);
        let ingredientName = formData.get('ingredientsName');
        let ingredientValue = formData.get('ingredientsValue');

        let newIngredient = {
            id: uniqid(),
            ingredientName: ingredientName,
            ingredientValue: ingredientValue,
        };

        setIngredients(state => [
            ...state,
            newIngredient
        ]);

        form.elements['ingredientsName'].value = '';
        form.elements['ingredientsValue'].value = '';
    }

    return (
        <>
            {show
                ? <Notification message={errors} onClose={() => setShow(false)} />
                : ''}
            <form className="contact100-form validate-form" method="POST" onSubmit={editHandler}>
                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">Name</span>
                    <input className="input100" type="text" name="name" placeholder="Enter name" defaultValue={recipe.name} />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">ImageURL</span>
                    <input className="input100" type="text" name="imageURL" placeholder="Enter name" defaultValue={recipe.imageURL} disabled />
                    <span className="focus-input100"></span>
                </div>


                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">Description</span>
                    <textarea name="description" className="input100" cols="30" rows="10" defaultValue={recipe.description}></textarea>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">Ingredients</span>
                    {
                        ingredients.map(x =>
                            <EditIngredientsItem
                                onDelete={deleteAddedIngredientsHandler}
                                key={x._id || x.id}
                                ingredient={x}
                            />
                        )
                    }
                    <span className="focus-input100"></span>
                    <div>
                        <AddIngredient addIngredient={addIngredientHandler}></AddIngredient>
                    </div>
                </div>



                <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn">
                        <span>
                            Save
                        </span>
                    </button>
                </div>
            </form>
        </>
    );
}

export default EditRecipe;