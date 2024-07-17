import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import About from './Components/About/About'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<h1>Portfolio WIP</h1>} />
        <Route path="/contacts" element={<h1>Contacts WIP</h1>} />
        <Route path="*" element={<h1>Error Page WIP</h1>} />
      </Routes>
    </BrowserRouter >
  )
}

export default App