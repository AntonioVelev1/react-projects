import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as authService from './services/authServices';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import All from './components/All/All';
import About from './components/About/About';
import Create from './components/CreateRecipe/Create';

function App() {
  const [user, setUser] = useState({ isAuthenticated: false, username: '' });

  useEffect(() => {
    let user = authService.getUser();

    setUser({
      isAuthenticated: Boolean(user),
      user: user
    });
  }, []);

  const onLogin = (username) => {
    setUser({
      isAuthenticated: true,
      user: username
    });
  }
  
  return (
    <div>
      <Header { ...user }/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
