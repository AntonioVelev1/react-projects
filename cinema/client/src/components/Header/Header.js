import { Link } from "react-router-dom";

function Header() {

    let guestNavigation = (
        <>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/register">REGISTER</Link></li>
        </>
    );

    let userNavigation = (
        <>
            <li><Link to="/logout">LOGOUT</Link></li>
            <li><Link to="/favourites">FAVOURITES</Link></li>
        </>
    );
    return (
        <div id="header">
            {/* <h1 id="logo"><Link to="/"><img src={"../../public/images/logo.gif"} alt="MovieHunter" /></Link></h1> */}
            <div id="navigation">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    {true ?
                        guestNavigation
                        : userNavigation
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;