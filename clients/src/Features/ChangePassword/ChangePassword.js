import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ErrorMessage, SuccessMessage } from "../../components/Notification/Notification";

const initialState = {
  password: "",
  confirmPassword: "",
  error: "",
  success: "",
};

function ChangePassword() {
  const auth = useSelector((state) => state.authReducer);
  const token = useSelector((state) => state.tokenReducer);

  const { user } =  auth;
  const [loading] = useState(false);
  const [data, setData] = useState(initialState);

  const {
    password,
    confirmPassword,
    error,
    success,
  } = data;

  const updatePassword = async () => {
    try {
      if (password.length < 6) {
        return setData({
          ...data,
          error: "Password must be at least 6 characters.",
          success: "",
        });
      }
      if (password !== confirmPassword) {
        return setData({
          ...data,
          error: "Password did not match.",
          success: "",
        });
      }
      await axios.post(
        "/user/reset",
        {
          password,
          confirmPassword: password,
        },
        {
          headers: { Authorization: token },
        }
      );

      setData({
        ...data,
        error: "",
        success: "Password updated successfully!",
      });
    } catch (error) {
      setData({
        ...data,
        error: error.response.data.msg,
        success: "",
      });
    }
  };


  const handleChangePassword = () => {
    updatePassword();
  };

  return (
    <div className="changePassword-container">
      <div className="mt-4">
        {error && ErrorMessage(error)}
        {success && SuccessMessage(success)}
        {loading && <h3>Loading.....</h3>}
      </div>
      <div className="header-setting text-start mt-4">
        <h4 className="header-top mt-2 mb-2">PASSWORD RESET</h4>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column text-start mx-4 my-2">
            <label className="label-setting">New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your new password"
              id="password"
              name="password"
              defaultValue={user.data?.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="d-flex flex-column text-start mx-4 my-2">
            <label className="label-setting">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your confirm password"
              id="confirmPassword"
              name="confirmPassword"
              defaultValue={user.data?.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="d-flex flex-row my-3 mx-4">
            <button
              disabled={loading}
              onClick={handleChangePassword}
              className="btn-submit"
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
