import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { Routes, Route } from 'react-router-dom';
import Favourites from "./components/Favourites/Favourites";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Details from "./components/Details/Details";
import Search from "./components/Search/Search";

import { AuthProvider } from "./contexts/AuthContext";
import { MovieProvider } from "./contexts/MovieContext";
import PrivateRoute from "./components/common/PrivateRoute/PrivateRoute";
import NotLoggedUsersRoute from "./components/common/PrivateRoute/NotLoggedUsersRoutes";

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <div id="shell">
          <Header />
          <div id="main">
            <div id="content">
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/details/:movieId" element={<Details />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/favourites" element={<Favourites />} />
                </Route>
                <Route element={<NotLoggedUsersRoute />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Route>
              </Routes >
            </div>
          </div>
          <Footer />
        </div>
      </MovieProvider>
    </AuthProvider>
  );
}

export default App;
