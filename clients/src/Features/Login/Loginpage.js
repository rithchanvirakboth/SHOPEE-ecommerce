import { React, useState } from "react";
import Cardbox from "../../components/Cardbox/Cardbox";
import axios from "axios";
import {
  ErrorMessage,
  SuccessMessage,
} from "../../components/Notification/Notification";
import { 
  dispatchLogin,
} from '../../redux/actions/authAction';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  errorMsg: "",
  successMsg: "",
};

function Loginpage() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password, errorMsg, successMsg } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", { email, password });

      setUser({ ...user, errorMsg: "", successMsg: res.data.msg });

      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      navigate("/");

    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, errorMsg: err.response.data.msg, successMsg: "" });
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
        <div className="mt-4">
            {errorMsg && ErrorMessage(errorMsg)}
            {successMsg && SuccessMessage(successMsg)}
        </div>
          <form onSubmit={handleSubmit}>
            <Cardbox
              children={{
                title: "Sign In",
                formData: [
                  {
                    label: "Email",
                    item: (
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                      />
                    ),
                  },
                  {
                    label: "Password",
                    item: (
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                      />
                    ),
                  },
                  {
                    btnType: true,
                    btn: (
                      <button type="submit" className="btn-submit">
                        Login
                      </button>
                    ),
                  },
                ],
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
