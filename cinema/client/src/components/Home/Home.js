import Favourites from "../Favourites/Favourites";
import { useAuthContext } from "../../hooks/useAuthContenxt";
import { useMovieContext } from "../../hooks/useMovieContext";

import SearchResult from "../SearchResult/SearchResult";

function Home() {
    const { user } = useAuthContext();
    const { movies } = useMovieContext();
    return ( 
        <>
            <div className="welcome">
                <p>Hello {user.username}!</p>
            </div>
            <Favourites />
            <SearchResult />
        </>
    );
}

export default Home;