import MovieCard from "../MovieCard/MovieCard";
import { useMovieContext } from "../../hooks/useMovieContext";

function SearchResult() {
    const { movies } = useMovieContext();

    return (
        <div className="box">
            {movies?.length > 0
                ? (<>
                    <div className="head">
                        <h2>Search Result</h2>
                    </div>
                    <div className="movie-list">
                        {movies?.length > 0
                            ? movies.map(x => <MovieCard key={x.id} movie={x} />)
                            : null
                        }
                    </div>
                    <div className="cl">&nbsp;</div>
                </>)
                : null
            }
        </div >
    );
}

export default SearchResult;