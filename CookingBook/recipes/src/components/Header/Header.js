function Header() {
    return (
        <header className="top">
            <div className="fixedArea">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 noPadding">
                        <div className="content-wrapper one">
                            <header className="header">
                                <nav className="navbar navbar-default myNavBar">
                                    <div className="container">

                                        <div className="navbar-header">
                                            <div className="row">
                                                <div className="col-md-9 col-sm-9 col-xs-9">
                                                    <div className="row">
                                                        <div className="col-md-3 col-xs-3 col-sm-3">
                                                            <a className="navbar-brand navBrandText text-uppercase font-weight-bold" href="index.html"><img src="./img/logo/cemrebakerylogo.png" alt="restorant" /></a>

                                                        </div>
                                                        <div className="col-md-9 col-sm-9 col-xs-9">
                                                            <a className="nav-title" href="index.html">Recipes</a>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className="col-md-3 col-sm-3 col-xs-3">
                                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                                        <span className="sr-only">Toggle navigation</span>
                                                        <span className="icon-bar"></span>
                                                        <span className="icon-bar"></span>
                                                        <span className="icon-bar"></span>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                            <ul className="nav navbar-nav navbar-right navBar">
                                                <li className="nav-item"><a href="#section0" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Home</a></li>
                                                <li className="nav-item"><a href="#section1" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Categories</a></li>
                                                <li className="nav-item"><a href="#section2" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">About</a></li>
                                                <li className="nav-item"><a href="#section2" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Login</a></li>
                                                <li className="nav-item"><a href="#section2" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Register</a></li>
                                                <li className="nav-item"><a href="#section2" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Logout</a></li>
                                                <li className="nav-item"><a href="#section3" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Portfolio</a></li>
                                                <li className="nav-item"><a href="#section4" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Testimonial</a></li>
                                                <li className="nav-item"><a href="#section5" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Blog</a></li>
                                                <li className="nav-item"><a href="#section6" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;