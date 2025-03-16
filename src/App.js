import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Book from './components/Book';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <Router>
      <Topbar />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Contact" element={<Contact address="Kuleshwor-14, Kathmandu, Nepal" mail="Bookzone100@gmail.com" phone="9761824988 / 9888006238"/>} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
