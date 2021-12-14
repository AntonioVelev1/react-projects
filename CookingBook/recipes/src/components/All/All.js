import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeCard from "./RecipeCard/RecipeCard";
import * as recipeService from '../../services/recipeService';

import { useAuthContext } from '../../hooks/useAuthContext';

function All() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const path = location.pathname;
  let { user } = useAuthContext();
  const userId = user._id;

  useEffect(() => {
    if (path.includes('all')) {
      console.log('test');
      recipeService.getAll()
        .then(result => {
          setRecipes(Object.values(result));
        })
    }
    else {
      console.log('test');
      recipeService.getMyRecipes(userId)
        .then(result => {
          setRecipes(Object.values(result));
        })
    }
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

                {recipes.length > 0
                  ? recipes.map(x => <RecipeCard key={x._id} recipe={x} />)
                  : <p>No recipes in database</p>}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default All;