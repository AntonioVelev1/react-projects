import SearchResult from "./SearchResult";

import * as movieService from '../../services/movieService';
import { useMovieContext } from "../../hooks/useMovieContext";

function Search() {
    const { setResult } = useMovieContext();

    function searchHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let searchParams = formData.get('search');

        movieService.search(searchParams)
            .then((res) => {
                if (res) {
                    setResult(extractData(res));
                }
                else {
                    setResult({});
                }
            });
    }

    function extractData(data) {
        return data.map(x => { return x = x.show });
    }


    return (
        <div className="box">
            <div className="head search-head">
                <h2>Search</h2>
            </div>
            <div className="search-page">
                <div id="search">
                    <form acceptCharset="utf-8" onSubmit={searchHandler}>
                        <input type="text" name="search" placeholder="Enter search here" id="search-field" className="blink search-field" />
                        <input type="submit" value="Search" className="search-button" />
                    </form>
                </div>
            </div>
            <SearchResult />
        </div>
    );
}

export default Search;