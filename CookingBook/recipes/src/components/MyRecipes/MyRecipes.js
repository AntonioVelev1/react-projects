import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import * as recipeService from '../../services/recipeService';

import Pagination from "../All/Pagination/Pagination";

function MyRecipes() {
    const [recipes, setRecipes] = useState([]);
    let { user } = useAuthContext();
    const userId = user._id;

    useEffect(() => {
        recipeService.getMyRecipes(userId)
            .then(result => {
                setRecipes(Object.values(result));
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <section id="section3">
            <div className="container">

                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center">
                            <h3>Premium Quality</h3>
                            <h2>Recipes created by {user.username}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="col-md-12 noPadding">
                            <div id="news-slider" className="news-slider all-products">
                                {recipes.length > 0
                                    ? <Pagination
                                        data={recipes}
                                        pageLimit={7}
                                        dataLimit={6}
                                    />
                                    : <p>No recipes in database</p>
                                }

                                {/* {recipes.length > 0
                  ? recipes.map(x => <RecipeCard key={x._id} recipe={x} />)
                  : <p>No recipes in database</p>} */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default MyRecipes;