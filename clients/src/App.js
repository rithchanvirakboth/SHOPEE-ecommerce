import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Mainpage from './Features/Mainpage/Mainpage'
import Footer from './components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchUser, dispatchGetUser, dispatchLogin } from './Redux/Actions/authAction';

function App() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.tokenReducer);
  const auth = useSelector((state) => state.authReducer);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post('/user/refreshToken', null);
        dispatch({ type: 'GET_TOKEN', payload: res.data.access_token });
      };

      getToken();
    }
  
  }, [auth.isSignedIn, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);
          

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Navbar />
      </nav>
      <main className="content">
        <Mainpage />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
