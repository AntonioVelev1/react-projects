import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({
    children
}) => {
    const [movies, setMovies] = useState([]);

    const setResult = (recivedMovies) => setMovies(recivedMovies);


    return (
        <MovieContext.Provider value={{ movies, setResult }}>
            {children}
        </MovieContext.Provider>
    );

}

export default MovieContext;