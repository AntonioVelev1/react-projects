import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from 'react-router-dom';
import * as movieService from '../../services/movieService';

function All() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll()
            .then(movies => {
                setMovies(movies);
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
                { movies.length > 0
                  ? movies.map(x => <MovieCard key={x._id} movie={x} />)
                  : <p>No movies in database</p>
                }
            </div>
            <div className="cl">&nbsp;</div>
        </div>
    );
}

export default All;