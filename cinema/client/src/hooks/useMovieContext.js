import { useContext } from "react";
import MovieContext from "../contexts/MovieContext";

export const useMovieContext = () => {
    const movie = useContext(MovieContext);

    return movie;
}