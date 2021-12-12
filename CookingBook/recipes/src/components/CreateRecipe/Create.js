import { useNavigate } from 'react-router-dom';
import IngredientsList from "../IngredientList/IngredientsList";
import * as recipeService from '../../services/recipeService';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

function Create() {
    let { user } = useContext(AuthContext)
    const navigate = useNavigate();
    let ingredients = [];

    let userId = user._id;

    const createRecipeHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let imageURL = formData.get('imageURL');
        let description = formData.get('description');

        recipeService.create({
            name,
            imageURL,
            description,
            ingredients,
            userId,
        })
            .then(result => {
                navigate('/all');
            });
    }

    function getIngredientsHanler(value) {
        ingredients.push(value);
    }

    function deleteIngredientsHanler(id) {
        ingredients = ingredients.filter(x => x.id !== id);
    }

    return (
        <>
            <form className="contact100-form validate-form" onSubmit={createRecipeHandler} method="POST">
                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">Name</span>
                    <input className="input100" type="text" name="name" placeholder="Enter name" />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">ImageUrl</span>
                    <input className="input100" type="text" name="imageURL" placeholder="ImageURL" />
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 rs1-wrap-input100 validate-input">
                    <span className="label-input100">Description</span>
                    <textarea name="description" className="input100" cols="30" rows="10"></textarea>
                    <span className="focus-input100"></span>
                </div>


                <IngredientsList getIngredients={getIngredientsHanler} deleteIngredients={deleteIngredientsHanler} />

                <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn">
                        <span>
                            Submit
                        </span>
                    </button>
                </div>
            </form>
        </>
    );
}

export default Create;