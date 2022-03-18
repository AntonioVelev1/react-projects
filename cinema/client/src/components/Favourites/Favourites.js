import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from 'react-router-dom';
import * as movieService from '../../services/movieService';
import { useAuthContext } from "../../hooks/useAuthContenxt";

function Favourites() {
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        if (user._id !== '') {
            for (const movieId of user.movies) {
                movieService.getMovie(movieId)
                    .then(movie => {
                        setFavouriteMovies((state) => [
                            ...state,
                            movie
                        ]);
                    })
                    .catch();
            }
        }
    }, []);
    return (
        <div className="box">
            <div className="head">
                <h2>FAVOURITES</h2>
                <p className="text-right"><Link to="#">See all</Link></p>
            </div>
            <div className="movie-list">
                {favouriteMovies?.length > 0
                    ? favouriteMovies.map((x, index) => <MovieCard key={index} movie={x} />)
                    : <p>You have no favourite movies</p>
                }
            </div>
            <div className="cl">&nbsp;</div>
        </div>
    );
}

export default Favourites;