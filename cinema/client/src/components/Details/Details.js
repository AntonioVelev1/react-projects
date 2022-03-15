import { useState, useEffect } from "react";
import BaseRating from "./Raiting";
import { } from './Details.css';
import * as filmService from '../../services/filmService';

function Details() {
    const [film, setFilm] = useState({});

    useEffect(() => {
        filmService.getFilm()
            .then((res) => {
                setFilm(res);
            });
    }, []);
    
    return (
        <>
            <section className="details-page">
                <section className="film-title">
                    <h1>{film.name}</h1>
                </section>
                <section className="details-content">
                    <article className="details-img">
                        <img src={film.imageURL} alt="" />
                    </article>
                    <article className="details-description">
                        <p>{film.description}</p>
                    </article>
                </section>
                <article>
                    <div className="details-btns">
                        <button className="details-btn">Add to favourites</button>
                        <button className="details-btn">Remove from favourites</button>
                    </div>
                </article>
            </section>
            <BaseRating />
        </>
    );
}

export default Details;