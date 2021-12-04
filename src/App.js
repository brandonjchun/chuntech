import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Features from './components/pages/Features';
import Pricing from './components/pages/Pricing';
import { Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <nav>
        <Link to="/about">Go About</Link>
      </nav>

    </div>


  );
}


export default App;
