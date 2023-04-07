import React, { useState } from "react";
import { isMatch } from "../../../../middleware/validation/Validation";
import { ErrorMessage, SuccessMessage } from "../../../../components/Notification/Notification";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  bio: "",
  phoneNumber: "",
  address: "",
  errorMsg: "",
  successMsg: "",
};

function CreateUser() {
  const [data, setData] = useState(initialState);
  const navigate = useNavigate()
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
    bio,
    phoneNumber,
    address,
    errorMsg,
    successMsg,
  } = data;

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !userName || !email || !password) {
      setData({
        ...data,
        errorMsg: "All fields are required",
        successMsg: "",
      });
    }

    if (password.length < 6) {
      setData({
        ...data,
        errorMsg: "Password must be at least 6 characters",
        successMsg: "",
      });
    }

    if (!isMatch(password, confirmPassword)) {
      setData({
        ...data,
        errorMsg: "Password did not match",
        successMsg: "",
      });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setData({
        ...data,
        errorMsg: "Invalid email",
        successMsg: "",
      });
    }

    try {
      const res = await axios.post('/user/createUser',
        {
          firstName,
          lastName,
          userName,
          email,
          password,
          confirmPassword,
          bio,
          phoneNumber,
          address,
        });

      if (res.data.email === email) {
        setData({
          ...data,
          errorMsg: "Email already exists",
          successMsg: "",
        });
      }

      if (res.data.userName === userName) {
        setData({
          ...data,
          errorMsg: "Username already exists",
          successMsg: "",
        });
      }

      setData({
        ...data,
        errorMsg: "",
        successMsg: res.data.msg,
      });

    }catch (err) {
      err.response.data.msg &&
        setData({
          ...data,
          errorMsg: err.response.data.msg,
          successMsg: "",
        });
    }





    
  };

  return (
    <div className="container my-4">
      <div className="notification">
        { errorMsg && ErrorMessage(errorMsg) }
        { successMsg && SuccessMessage(successMsg) }
      </div>
      <div className="d-flex justify-content-center my-4">
        <div className="card" style={{ width: "50rem" }}>
          <div className="update-header">
            <h3 className="text-center">Create User</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  placeholder="Enter your first name"
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  placeholder="Enter your last name"
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  name="Username"
                  value={userName}
                  placeholder="Enter your username"
                  onChange={(e) =>
                    setData({ ...data, userName: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  name="Password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  ConfirmPassword
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Re enter your password"
                  onChange={(e) =>
                    setData({ ...data, confirmPassword: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Bio
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  cols="30"
                  rows="10"
                  className="form-control"
                  value={bio}
                  onChange={(e) => setData({ ...data, bio: e.target.value })}
                  placeholder="Enter your bio"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  placeholder="Enter your phone number"
                  onChange={(e) =>
                    setData({ ...data, phoneNumber: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={address}
                  placeholder="Enter your address"
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                />
              </div>
              <div className="my-4">
                <label htmlFor="lastName" className="form-label invisible">
                  label
                </label>
                <button type="submit" className="btn-submit">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
