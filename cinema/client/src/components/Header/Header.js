import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContenxt";
import { useMovieContext } from '../../hooks/useMovieContext';
import * as movieService from '../../services/movieService';


function Header() {
    const { user } = useAuthContext();
    const { setResult } = useMovieContext();
    let location = useLocation();

    const inputEl = useRef(null);

    useEffect(() => {
        if(!location.pathname.includes('details')) {
            inputEl.current.value = '';
        }

        setResult([]);
    }, [location])

    let guestNavigation = (
        <>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/register">REGISTER</Link></li>
        </>
    );

    let userNavigation = (
        <>
            <li><Link to="/favourites">FAVOURITES</Link></li>
            <li><Link to="/logout">LOGOUT</Link></li>
        </>
    );

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
                    setResult([]);
                }
            });
            //e.target.elements['search'].value = '';
    }

    function extractData(data) {
        return data.map(x => { return x = x.show });
    }

    return (
        <div id="header">
            <Link to="/"><img src="/images/logo.jpg" alt="MovieHunter" /></Link>

            <div id="navigation">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/search">SEARCH</Link></li>
                    {user?.email ?
                        userNavigation
                        : guestNavigation
                    }
                </ul>
            </div>
            <div id="sub-navigation">
                <div id="search">
                    <form acceptCharset="utf-8" onSubmit={searchHandler}>
                        <input ref={inputEl} type="text" name="search" placeholder="Enter search here" id="search-field" className="blink search-field" />
                        <input type="submit" value="Search" className="search-button" />
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Header;