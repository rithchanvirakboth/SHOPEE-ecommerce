import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Mainpage from "./Features/Mainpage/Mainpage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { dispatchLogin, fetchUser, dispatchGetUser } from "./redux/actions/authAction";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const token = useSelector((state) => state.tokenReducer);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        const res = await axios.post('/user/refreshToken', null)
        console.log(res);
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
    }
    refreshToken()
    }
  }, [auth.isLogged, dispatch])

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then(
          res => {
            dispatch(dispatchGetUser(res));
          }
        )
      }
      getUser();
    }
  }, [token, dispatch]);


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Navbar />
      </nav>
      <main className="content">
        <Mainpage />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
