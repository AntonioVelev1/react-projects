import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BaseRating from "./Raiting";
import { } from './Details.css';
import * as movieService from '../../services/movieService';
import { useAuthContext } from "../../hooks/useAuthContenxt";

function Details() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const { user } = useAuthContext();

    useEffect(() => {
        movieService.getMovie(movieId)
            .then((res) => {
                setMovie(res);
            });
    }, []);

    function addToFavouritesHandler(e) {
        e.preventDefault();

        movieService.addToFavourites(movieId, user._id)
            .then((res) => {
                if (!res.message) {
                    setMovie(res);
                }
            });
    }

    function removeFromFavouritesHandler(e) {
        e.preventDefault();

        movieService.removeFromFavourites(movieId, user._id)
            .then((res) => {
                if (!res.message) {
                    setMovie(res);
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
                        <img src={movie.imageURL} alt="" />
                    </article>
                    <article className="details-description">
                        <p>{movie.description}</p>
                    </article>
                </section>
                <article>
                    <div className="details-btns">
                        {user._id !== ''
                            ? (movie?.userId?.includes(user._id)
                                ? <button className="details-btn remove" onClick={removeFromFavouritesHandler}>Remove from favourites</button>
                                : <button className="details-btn add" onClick={addToFavouritesHandler}>Add to favourites</button>)
                            : null
                        }
                    </div>
                </article>
            </section>
            <BaseRating movie={movie}/>
        </>
    );
}

export default Details;