import { Link } from 'react-router-dom';

import { useAuthContext } from '../../hooks/useAuthContext';

function Header() {
    const { user } = useAuthContext();
    let guestNavigation = (
        <>
            <li className="nav-item"><Link to="/all" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Recipes</Link></li>
            <li className="nav-item"><Link to="/login" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Login</Link></li>
            <li className="nav-item"><Link to="/register" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Register</Link></li>
        </>
    );

    let userNavigation = (
        <>
            <li className="nav-item"><Link to="/all" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Recipes</Link></li>
            <li className="nav-item"><Link to="/myRecipes" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">My Recipes</Link></li>
            <li className="nav-item"><Link to="/create" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Create Recipe</Link></li>
            <li className="nav-item"><Link to="/logout" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Logout</Link></li>
            <li className="nav-item"><p className="welcome-user">Welcome {user.email}</p></li>
        </>
    );

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
                                                            <Link className="navbar-brand navBrandText text-uppercase font-weight-bold" to="/">
                                                                <img src="/img/logo/cemrebakerylogo.png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="col-md-9 col-sm-9 col-xs-9">
                                                            <Link className="nav-title" to="/">Recipes</Link>
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
                                                <li className="nav-item"><Link to="/" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">Home</Link></li>
                                                <li className="nav-item"><Link to="/about" className="nav-link text-uppercase font-weight-bold js-scroll-trigger">About</Link></li>

                                                {user?.email
                                                    ? userNavigation
                                                    : guestNavigation
                                                }

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