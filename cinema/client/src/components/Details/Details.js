import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BaseRating from "./Raiting";
import { } from './Details.css';
import * as movieService from '../../services/movieService';
import * as authService from '../../services/authService';
import { useAuthContext } from "../../hooks/useAuthContenxt";

function Details() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const { user, refreshUser } = useAuthContext();

    useEffect(() => {
        movieService.getMovie(movieId)
            .then((res) => {
                setMovie(res);
            });
    }, []);

    function addToFavouritesHandler(e) {
        e.preventDefault();

        let data = { movieId: movieId, userId: user._id };

        authService.addToFavourites(data)
            .then((res) => {
                if (res.isSuccessfully) {
                    refreshUser();
                }
            });
    }

    function removeFromFavouritesHandler(e) {
        e.preventDefault();

        authService.removeFromFavourites(movieId, user._id)
            .then((res) => {
                if (res.isSuccessfully) {
                    refreshUser();
                }
            });
    }

    return (
        <>
            <section className="details-page">
                <section className="movie-title">
                    <h1>{movie.name}</h1>
                </section>
                <section className="details-content">
                    <article className="details-img">
                        <img src={movie?.image?.medium} alt="" />
                    </article>
                    <article className="details-description">
                        {movie?.summary}
                    </article>
                </section>
                <article>
                    <div className="details-btns">
                        {user._id !== ''
                            ? (user?.movies?.includes(movie?.id?.toString())
                                ? <button className="details-btn remove" onClick={removeFromFavouritesHandler}>Remove from favourites</button>
                                : <button className="details-btn add" onClick={addToFavouritesHandler}>Add to favourites</button>)
                            : null
                        }
                    </div>
                </article>
            </section>
            <BaseRating movie={movie} />
        </>
    );
}

export default Details;