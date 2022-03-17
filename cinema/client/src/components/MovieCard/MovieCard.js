import { Link } from 'react-router-dom';

function MovieCard({
    movie
}) {
    return (
        <div className="movie">
            <div className="movie-image">
                <Link to={`/details/${movie?.id}`}>
                    <span className="play"><span className="name">{movie?.name}</span></span>
                    <img src={movie?.image?.medium} alt="" />
                </Link>
            </div>
            <div className="rating">
                <p>RATING</p>
                <div className="stars">
                    <div className="stars-in"> </div>
                </div>
                <span className="comments">{movie?.rating?.average || 0}</span> </div>
        </div>
    );
}

export default MovieCard;