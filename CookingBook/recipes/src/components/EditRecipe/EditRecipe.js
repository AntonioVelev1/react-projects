import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as recipeService from '../../services/recipeService';
import { useAuthContext } from '../../hooks/useAuthContext';

import uniqid from 'uniqid';

import EditIngredientsItem from './EditIngredientsItem.js/EditIngredientsItem';
import AddIngredient from '../AddIngredient/AddIngredient';

function EditRecipe() {
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);

    const { recipeId } = useParams();
    let navigate = useNavigate();

    let { user } = useAuthContext();
    let userId = user._id;
    console.log('render2');
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
                setRecipe(result);
                navigate(`/details/${recipeId}`);
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
            _id: uniqid(),
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
            <form className="contact100-form validate-form" method="POST" onSubmit={editHandler}>
                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">Name</span>
                    <input className="input100" type="text" name="name" placeholder="Enter name" defaultValue={recipe.name} />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">ImageURL</span>
                    <input className="input100" type="text" name="imageURL" placeholder="Enter name" defaultValue={recipe.imageURL} />
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
                                key={x._id}
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