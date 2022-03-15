import { Link } from 'react-router-dom';

function FilmCard({
    film
}) {
    return (
        <div className="movie">
            <div className="movie-image">
                <Link to={`/details/${film._id}`}>
                    <span className="play"><span className="name">{film.name}</span></span>
                    <img src={film.imageURL} alt="" />
                </Link>
            </div>
            <div className="rating">
                <p>RATING</p>
                <div className="stars">
                    <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
        </div>
    );
}

export default FilmCard;