import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as authService from './services/authServices'

import { AuthContext } from './contexts/AuthContext';

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

function App() {
  const [user, setUser] = useState({
    _id: '',
    email: '',
  });

  useEffect(()=>{
    let userLocal = authService.getLocalStorage();
    if(!!userLocal){
     let currUser = JSON.parse(userLocal);
      setUser(currUser);
    }
  },[]);
 
  const login = (data) => {
    console.log(data);
    setUser(data);
  }

  const register = (data) => {
    setUser(data);
  }

  const logout = () => {
    setUser({
      _id: '',
      email: '',
    });
  }

  return (
    <AuthContext.Provider value={{user, login, register, logout}}>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<All />} />
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
    </AuthContext.Provider>
  );
}

export default App;
