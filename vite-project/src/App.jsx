import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { CarNow } from './Components/CarNow/CarNow'
import { Flota } from './Routes/Flota'
import { Contacto } from './Routes/Contacto'
import { Nosotros } from './Routes/Nosotros'
import { Home } from './Routes/Home'
import { Registrate } from './Routes/Registrate'
import { MarcasAutos } from "./Components/MarcasAutos/MarcasAutos";
import { Footer } from "./Components/Footer/Footer";
function App() {

  return (
    <Router>
          <React.Fragment>
            <Navbar/>
            <CarNow/>
            <MarcasAutos/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/flota" element={<Flota/>} />
              <Route path="/nosotros" element={<Nosotros/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/registrate" element={<Registrate/>} />
            </Routes>
            <Footer/>
          </React.Fragment>
        </Router>
  )
}

export default App
