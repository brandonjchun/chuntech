import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
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
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}


export default App;
