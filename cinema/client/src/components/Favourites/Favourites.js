import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link, useLocation } from 'react-router-dom';
import * as movieService from '../../services/movieService';
import { useAuthContext } from "../../hooks/useAuthContenxt";

function Favourites() {
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const { user } = useAuthContext();
    let location = useLocation();

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
    }, [user]);

    function isOnHome(){
        return !location.pathname.includes('favourites');
    }
    return (
        <div className="box">
            <div className="head">
                <h2>FAVOURITES</h2>
                {isOnHome()
                    ? <p className="text-right"><Link to="/favourites">See all</Link></p>
                    : null
                }
            </div>
            <div className="movie-list">
                {favouriteMovies?.length > 0
                    ? favouriteMovies.map((x, index) => (
                        isOnHome() ?  
                        (index < 4 ?  <MovieCard key={index} movie={x} /> : null)
                        :  <MovieCard key={index} movie={x} />
                    ))
                    : <p>You have no favourite movies</p>
                }
            </div>
            <div className="cl">&nbsp;</div>
        </div>
    );
}

export default Favourites;