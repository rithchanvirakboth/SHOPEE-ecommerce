import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import ChangePassword from '../ChangePassword/ChangePassword';

function Mainpage() {
  const auth = useSelector((state) => state.authReducer);

  const { isSignedIn, isAdmin } = auth;

  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={isSignedIn ? <NotFound /> : <Loginpage />} />
          <Route path="/register" element={isSignedIn ? <NotFound /> : <Registerpage />} />
          <Route path="/profile" element={isSignedIn ? <Profile /> : <NotFound />} />
          <Route path="/setting" element={isSignedIn ? <Setting /> : <NotFound />} />
          <Route path="/changePassword" element={isSignedIn ? <ChangePassword /> : <NotFound />} />

          <Route path="/user/activate/:activation_token" element={<EmailActivate />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/user/reset/:access_token" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />

          {/* admin */}
          <Route path="/admin" element={ isAdmin ? <Admin /> : <NotFound /> } />
          <Route path="/admin/*" element={<NotFound /> } />
          <Route path="/admin/user" element={isAdmin ? <User /> : <NotFound />} />
          <Route path="/admin/product" element={isAdmin ? <Product /> : <NotFound /> } />
          <Route path="/admin/purchasement" element={isAdmin ? <Purchasement /> : <NotFound /> } />
        </Routes>
    </>
  )
}

export default Mainpage