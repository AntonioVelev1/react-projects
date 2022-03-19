import Favourites from "../Favourites/Favourites";
import { useAuthContext } from "../../hooks/useAuthContenxt";
import { useMovieContext } from "../../hooks/useMovieContext";

import SearchResult from "../Search/SearchResult";

function Home() {
    const { user, hasUser } = useAuthContext();
    const { movies } = useMovieContext();
    return (
        <>
            <div className="welcome">
                <p>Hello {user.username}!</p>
            </div>
            {hasUser ? 
                 (movies.length > 0
                    ? <SearchResult />
                    : <Favourites />)
                : <SearchResult />
            }
        </>
    );
}

export default Home;