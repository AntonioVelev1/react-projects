import { useNavigate } from 'react-router-dom';
import IngredientsList from "../IngredientList/IngredientsList";
import * as recipeService from '../../services/recipeService';

import { useAuthContext } from '../../hooks/useAuthContext';
import { useState } from 'react/cjs/react.development';

import Notification from '../common/Notification/Notification';

function Create() {
    const [errors, setErrors] = useState([]);
    const [show, setShow] = useState(false);
    let { user } = useAuthContext();
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
            .then(res => {
                if (res.message) {
                    setErrors([res.message]);
                    setShow(true);
                } else {
                    navigate('/all');
                }
            })
            .catch(err => console.log(err));
    }

    function getIngredientsHanler(value) {
        ingredients.push(value);
    }

    function deleteIngredientsHanler(id) {
        ingredients = ingredients.filter(x => x.id !== id);
    }

    return (
        <>
            {show
                ? <Notification message={errors} onClose={() => setShow(false)} />
                : 'Loading...'}
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