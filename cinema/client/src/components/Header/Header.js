import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContenxt";

function Header() {
    const { user } = useAuthContext();
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
    }

    return (
        <div id="header">
            <Link to="/"><img src="images/logo.jpg" alt="MovieHunter" /></Link>

            <div id="navigation">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    {user?.email ?
                        userNavigation
                        : guestNavigation
                    }
                </ul>
            </div>
            <div id="sub-navigation">
                <div id="search">
                    <form acceptCharset="utf-8" onClick={searchHandler}>
                        <input type="text" name="search field" placeholder="Enter search here" id="search-field" className="blink search-field" />
                        <input type="submit" value="Search" className="search-button" />
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Header;