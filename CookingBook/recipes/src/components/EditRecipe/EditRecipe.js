import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EditIngredientsItem from './EditIngredientsItem.js/EditIngredientsItem';
import * as recipeService from '../../services/recipeService';
import { useAuthContext } from '../../hooks/useAuthContext';

function EditRecipe() {
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);

    const { recipeId } = useParams();
    let navigate = useNavigate();

    let { user } = useAuthContext();
    let userId = user._id;

    const obj = {
        userId,
        recipeId,
    };

    console.log(obj);
    //let ingredients = recipe.ingredients;

    useEffect(() => {
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

                if (result.isSuccessfully === false) {
                    navigate(`/`);
                }
                else {
                    setRecipe(result);
                    navigate(`/details/${recipeId}`);
                }
            });
    }

    const deleteAddedIngredientsHandler = function (e, id) {
        e.preventDefault();

        console.log('delete');
        let filteredIngredients = ingredients.filter(x => x.id !== id);
        setIngredients(filteredIngredients);
        // deleteIngredients(id);
        // setIngredients(oldIngredients => oldIngredients.filter(x => x.id !== id));
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
                        recipe.ingredients?.map(x =>
                            <EditIngredientsItem
                                onDelete={deleteAddedIngredientsHandler}
                                key={x._id}
                                ingredient={x}
                            />
                        )
                    }
                    <span className="focus-input100"></span>
                </div>

                {/* <IngredientsList getIngredients={getIngredientsHanler} deleteIngredients={deleteIngredientsHanler} /> */}

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