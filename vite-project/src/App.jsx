import './App.css'
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";

import { Navbar } from './Components/Navbar/Navbar'

function App() {


  return (
    <div>
        <Router>
          <React.Fragment>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
            </Routes>
          </React.Fragment>
        </Router>
    </div>
  )
}

export default App
