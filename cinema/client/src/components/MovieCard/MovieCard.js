import { Link } from 'react-router-dom';

function MovieCard({
    movie
}) {
    return (
        <div className="movie">
            <div className="movie-image">
                <Link to={`/details/${movie?.id}`}>
                    <span className="play"><span className="name">{movie?.name}</span></span>
                    <img src={movie?.image?.medium || 'https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8='} alt="" />
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