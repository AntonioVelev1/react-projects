import { useState, useEffect } from "react";
import FilmCard from "../FilmCard/FilmCard";
import { Link } from 'react-router-dom';
import * as filmService from '../../services/filmService';

function Favourites() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        filmService.getAll()
            .then(films => {
                setFilms(films);
            })
            .catch();
    }, []);
    return (
        <div className="box">
            <div className="head">
                <h2>TOP RATED</h2>
                <p className="text-right"><Link to="#">See all</Link></p>
            </div>
            <div className="movie-list">
                {films.map(x => <FilmCard key={x._id} film={{ x }} />)}
            </div>
            <div className="cl">&nbsp;</div>
        </div>
    );
}

export default Favourites;