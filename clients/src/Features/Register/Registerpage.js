import React, { useState } from "react";
import Cardbox from "../../components/Cardbox/Cardbox";
import {
  isEmpty,
  isMatch,
} from "../../middleware/validation/Validation";
import {
  ErrorMessage,
  SuccessMessage,
} from "../../components/Notification/Notification";
import axios from "axios";

const initialState = {
  lastName: "",
  firstName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errorMsg: "",
  successMsg: "",
};

function Registerpage() {
  const [user, setUser] = useState(initialState);

  const {
    lastName,
    firstName,
    userName,
    email,
    password,
    confirmPassword,
    errorMsg,
    successMsg,
  } = user;
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(isEmpty(firstName) || 
    isEmpty(lastName) ||
    isEmpty(userName) ||
    isEmpty(email) ||
    isEmpty(password) ||
    isEmpty(confirmPassword)){
      setUser({
        ...user,
        errorMsg: "All fields are required",
        successMsg: "",
      })
    }
    if(password.length < 6 || confirmPassword.length < 6){
      setUser({
        ...user,
        errorMsg: "Password must be at least 6 characters",
        successMsg: "",
      })
    }
    if(!isMatch(password, confirmPassword)){
      setUser({
        ...user,
        errorMsg: "Password did not match",
        successMsg: "",
      })
    }

    try {
      const res = await axios.post("/user/register", {
        firstName,
        lastName,
        userName,
        email,
        password,
        confirmPassword,
      });

      if(res.data.email === email){
        setUser({
          ...user,
          errorMsg: "Email already exists",
          successMsg: "",
        })
      }
      if(res.data.userName === userName){
        setUser({
          ...user,
          errorMsg: "Username already exists",
          successMsg: "",
        })
      }

      setUser({
        ...user,
        errorMsg: "",
        successMsg: res.data.msg,
      });
    } catch (err) {
      err.response.data.msg &&
        setUser({
          ...user,
          errorMsg: err.response.data.msg,
          successMsg: "",
        });
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
                title: "Create new account",
                formData: [
                  {
                    label: "First Name",
                    item: (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your first name"
                        value={firstName}
                        id="firstName"
                        name="firstName"
                        onChange={(e) =>
                          setUser({ ...user, firstName: e.target.value })
                        }
                      />
                    ),
                  },
                  {
                    label: "Last Name",
                    item: (
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) =>
                          setUser({ ...user, lastName: e.target.value })
                        }
                      />
                    ),
                  },
                  {
                    label: "username",
                    item: (
                      <input
                        type="text"
                        name="userName"
                        id="userName"
                        className="form-control"
                        placeholder="Enter your username"
                        value={userName}
                        onChange={(e) =>
                          setUser({ ...user, userName: e.target.value })
                        }
                      />
                    ),
                  },
                  {
                    label: "Email",
                    item: (
                      <input
                        type="text"
                        name="email"
                        id="email"
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
                        name="password"
                        id="password"
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
                    label: "Confirm Password",
                    item: (
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="form-control"    
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) =>
                          setUser({ ...user, confirmPassword: e.target.value })
                        }
                      />
                    ),
                  },
                  {
                    btnType: true,
                    btn: (
                      <button type="submit" className="btn-submit">
                        Register
                      </button>
                    ),
                    linkItem: [
                      {
                        link: "/login",
                        linkName: "Login",
                        linkLabel: "Already have an account?",
                      },
                    ]
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

export default Registerpage;
