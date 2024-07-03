import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import Product from './components/Product';
import Gallery from './components/Gallery';  // Add this line
import About from './components/About';      // Add this line
import Contact from './components/Contact';  // Add this line

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="product" element={<Product />} />
        <Route path="gallery" element={<Gallery />} />  {/* Gallery route */}
        <Route path="about" element={<About />} />      {/* About route */}
        <Route path="contact" element={<Contact />} />  {/* Contact route */}
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
