import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Features from './components/pages/Features';
import Pricing from './components/pages/Pricing';
import { Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navigation';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <Navbar />
      <Routes>
        <Route end path="/" element={<Home />} />
        <Route end path="/about" element={<About />} />
        <Route end path="/features" element={<Features />} />
        <Route end path="/pricing" element={<Pricing />} />
        <Route end path="/contact" element={<Contact />} />
      </Routes>

    </div>


  );
}
/*
<Route exact path="__PATH__"/> no longer works in react-router-dom V6, use <Route end path="__PATH__"/>
  https://stackoverflow.com/questions/64718464/navlink-exact-prop-not-working-for-react-router-dom-6



*/

export default App;
