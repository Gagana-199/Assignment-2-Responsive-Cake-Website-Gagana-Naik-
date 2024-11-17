import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CakeGallery from './pages/CakeGallery';
import CakeDetails from './pages/CakeDetails';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<CakeGallery />} />
        <Route path="/cake/:id" element={<CakeDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
