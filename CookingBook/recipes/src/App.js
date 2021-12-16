import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import All from './components/All/All';
import About from './components/About/About';
import Create from './components/CreateRecipe/Create';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import EditRecipe from './components/EditRecipe/EditRecipe';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <AuthProvider>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<All />} />
            <Route path="/myRecipes" element={<All />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:recipeId" element={<RecipeDetails />} />
            <Route path="/edit/:recipeId" element={<EditRecipe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
