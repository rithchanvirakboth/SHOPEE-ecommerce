import React, { useState } from "react";
import Card from "../../components/Card/Card";
import {
  ErrorMessage,
  SuccessMessage,
} from "../../components/Notification/Notification";
import axios from "axios";
import { isLength, isMatch } from "../../middleware/validation/Validation";
import { useParams } from "react-router-dom";

const initialState = {
  password: "",
  confirmPassword: "",
  err: "",
  success: "",
};

function ResetPassword() {
  const { access_token } = useParams();
  const [data, setData] = useState(initialState);

  const { password, confirmPassword, err, success } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLength(password, confirmPassword)){
      return setData({ ...data, err: "Password must be at least 6 characters.", success: "" });
    }

    if (!isMatch(password, confirmPassword)){
      return setData({ ...data, err: "Password did not match.", success: "" });
    }

    try {
      const res = await axios.post("/user/reset", { password },
      {
        headers: { Authorization: access_token },
      });

      setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <div className="mt-4">
            { err && ErrorMessage(err) }
            { success && SuccessMessage(success) }
          </div>
          <form onSubmit={handleSubmit}>
            <Card
              children={{
                title: "Reset Password",
                formData: [
                  {
                    label: "New Password",
                    item: (
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your new password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                      />
                    ),
                  },
                  {
                    label: "Confirm Password",
                    item: (
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Re-enter your new password again"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                      />
                    ),
                  },
                  {
                    btnType: true,
                    btn: (
                      <button type="submit" className="btn-submit">
                        Resend
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

export default ResetPassword;
