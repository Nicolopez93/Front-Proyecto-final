import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";import './App.css'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Flota } from './Routes/Flota'
import { Contact } from './Routes/Contact'
import { About } from './Routes/About'
import { Home } from './Routes/Home'
import { Reservation } from "./Routes/Reservation";

function App() {

  return (
    <Router>
          <React.Fragment>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/flota" element={<Flota/>} />
              <Route path="/reservation" element={<Reservation/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </React.Fragment>
        </Router>
  )
}

export default App
