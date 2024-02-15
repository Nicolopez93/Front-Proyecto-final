import './App.css'
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import  Navbar  from './Components/Navbar/Navbar'
import  Contacto  from './Routes/Contacto';
import  Sucursales  from './Routes/Sucursales';
import FlotaAutos  from './Routes/FlotaAutos';
import  Home  from './Routes/Home';
import  Nosotros  from './Routes/Nosotros';

function App() {

  return (
    <div>
        <Router>
          <React.Fragment>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/sucursales" element={<Sucursales/>} />
              <Route path="/flotaautos" element={<FlotaAutos/>} />
              <Route path="/nosotros" element={<Nosotros/>} />
            </Routes>
          </React.Fragment>
        </Router>
    </div>
  )
}

export default App
