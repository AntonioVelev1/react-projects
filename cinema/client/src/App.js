import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import All from "./components/All/All";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { Routes, Route } from 'react-router-dom';
import Favourites from "./components/Favourites/Favourites";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <div id="shell">
      <Header />
      <div id="main">
        <div id="content">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/favourites" element={<Favourites />} />


          </Routes >
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
