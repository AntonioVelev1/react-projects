import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useAuthContext';
import {} from './RecipeCard.css';

function RecipeCard({
    recipe
}) {
    const { user } = useAuthContext();
    const userId = user._id;

    return (
        <div className="post-slide">
            <div className="post-img">
                <div className="post-abs"><p>{recipe.name}</p></div>
                <img src={recipe.imageURL} alt="" />
            </div>
            <h3 className="post-title"><Link to={`/details/${recipe._id}`}>{recipe.name}</Link></h3>
            <div className="post-content">
                {userId && (userId === recipe.userId._id
                    ? <div>
                        <Link className="details-edit-btn" to={`/edit/${recipe._id}`}>Edit</Link>
                    </div>
                    : ''
                )}
                <p>Likes: {recipe.likes?.length}</p>
            </div>
        </div>
    );
}

export default RecipeCard;