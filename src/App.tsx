import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Repos from './pages/Repos';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos:login" element={<Repos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
