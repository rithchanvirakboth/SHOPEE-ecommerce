import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../Home/Homepage';
import Loginpage from '../Login/Loginpage';
import Registerpage from '../Register/Registerpage';

function Mainpage() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
        </Routes>
      </Router>
    </>
  )
}

export default Mainpage