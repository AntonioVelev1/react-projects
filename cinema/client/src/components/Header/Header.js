

function Header() {

    let guestNavigation = (
        <>
            <li><a href="#">LOGIN</a></li>
            <li><a href="#">REGISTER</a></li>
        </>
    );

    let userNavigation = (
        <>
            <li><a href="#">LOGOUT</a></li>
            <li><a href="#">MYFILMS</a></li>
        </>
    );
    return (
        <div id="header">
            <h1 id="logo"><a href="#"><img src="images/logo.gif" alt="MovieHunter" /></a></h1>
            <div id="navigation">
                <ul>
                    <li><a className="active" href="#">HOME</a></li>
                    <li><a href="#">LOGIN</a></li>
                    <li><a href="#">REGISTER</a></li>
                    <li><a href="#">ABOUT</a></li>
                </ul>
            </div>
            <div id="sub-navigation">
                <ul>
                    <li><a href="#">SHOW ALL</a></li>
                    <li><a href="#">LATEST TRAILERS</a></li>
                    <li><a href="#">TOP RATED</a></li>
                    <li><a href="#">MOST COMMENTED</a></li>
                </ul>
                <div id="search">
                    <form action="#" method="get" acceptCharset="utf-8">
                        <label htmlFor="search-field">SEARCH</label>
                        <input type="text" name="search field" placeholder="Enter search here" id="search-field" className="blink search-field" />
                        <input type="submit" value="Search" className="search-button" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Header;