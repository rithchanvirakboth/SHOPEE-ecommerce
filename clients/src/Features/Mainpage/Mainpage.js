import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmailActivate from '../EmailActivate/EmailActivate';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import Homepage from '../Home/Homepage';
import Loginpage from '../Login/Loginpage';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Registerpage from '../Register/Registerpage';
import ResetPassword from '../ResetPassword/ResetPassword';
import Admin from '../Admin/Admin';
import { useSelector } from 'react-redux';
import Setting from '../Setting/Setting';
import User from '../Admin/User/User';
import Product from '../Admin/Product/Product';
import Purchasement from '../Admin/Purchasement/Purchasement';

function Mainpage() {
  const auth = useSelector((state) => state.authReducer);

  const { isLogged, isAdmin } = auth;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={isLogged ? <NotFound /> : <Loginpage />} />
          <Route path="/register" element={isLogged ? <NotFound /> : <Registerpage />} />
          <Route path="/profile" element={isLogged ? <Profile /> : <NotFound />} />
          <Route path="/setting" element={isLogged ? <Setting /> : <NotFound />} />
          <Route path="/user/activate/:activation_token" element={<EmailActivate />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/user/reset/:access_token" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />

          {/* admin */}
          <Route path="/admin" element={<Admin /> } />
          <Route path="/admin/*" element={<NotFound /> } />
          <Route path="/admin/user" element={<User /> } />
          <Route path="/admin/product" element={<Product /> } />
          <Route path="/admin/purchasement" element={<Purchasement /> } />
        </Routes>
      </Router>
    </>
  )
}

export default Mainpage