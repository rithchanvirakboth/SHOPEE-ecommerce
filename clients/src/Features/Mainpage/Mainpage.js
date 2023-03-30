import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailActivate from '../EmailActivate/EmailActivate';
import Homepage from '../Home/Homepage';
import Loginpage from '../Login/Loginpage';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Registerpage from '../Register/Registerpage';

function Mainpage() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user/activate/:activation_token" element={<EmailActivate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default Mainpage