import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home1 from './pages/Home1';
import About from './pages/About';
import Contact from './pages/Contact';
import ForgotPassword from './components/ForgotPassword';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar1 from './components/Navbar1';
import Topbar1 from './components/Topbar1';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">  
      <Router>


    {/* <Login/> */}

      <Topbar1/>
      <Navbar1/>
         
        <Routes>
             {/* <Route  exact path="/about" element={<About/>}/> */}
            <Route  exact path="/" element={<Home1/>}/>
            {/* <Route  exact path="/contact" element={<Contact/>}/>  */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
