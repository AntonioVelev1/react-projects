import { useEffect, useState } from 'react';
import RecipeCard from "../RecipeCard/RecipeCard";
import * as recipeService from '../../services/recipeService';

function All() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll()
      .then(result => {
        setRecipes(result);
      })
  }, []);

  return (
    <section id="section3">
      <div className="container">

        <div className="row">
          <div className="col-xs-12">
            <div className="section-title text-center">
              <h3>Premium Quality</h3>
              <h2>Cemre Bakery Fresh Cakes</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="col-md-12 noPadding">
              <div id="news-slider" className="news-slider all-products">

                {recipes.map(x => <RecipeCard key="{x._id}" />)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default All;