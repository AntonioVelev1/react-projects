import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import All from './components/All/All';
import About from './components/About/About'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
