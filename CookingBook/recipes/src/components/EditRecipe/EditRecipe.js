import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditIngredientsItem from './EditIngredientsItem.js/EditIngredientsItem';
import * as recipeService from '../../services/recipeService';

function EditRecipe() {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
            })
    }, []);

    return (
        <>
            <form className="contact100-form validate-form" method="POST">
                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">Name</span>
                    <input className="input100" type="text" name="name" placeholder="Enter name" defaultValue={recipe.name} />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">ImageUrl</span>
                    <input className="input100" type="text" name="imageURL" placeholder="ImageURL" defaultValue={recipe.imageURL} />
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