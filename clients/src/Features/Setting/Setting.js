import React, { useEffect, useState } from "react";
import BoxSetting from "../../components/BoxSetting/BoxSetting";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  ErrorMessage,
  SuccessMessage,
} from "../../components/Notification/Notification";

import {
  fetchAllUsers,
  dispatchGetAllUsers,
} from "../../Redux/Actions/usersAction";

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  bio: "",
  phoneNumber: "",
  address: "",
  password: "",
  confirmPassword: "",
  error: "",
  success: "",
};

function Setting() {
  const auth = useSelector((state) => state.authReducer);
  const token = useSelector((state) => state.tokenReducer);
  const { user, isAdmin } = auth;
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [data, setData] = useState(initialState);
  const [callback] = useState(false);

  const {
    firstName,
    lastName,
    userName,
    bio,
    phoneNumber,
    address,
    success,
    error,
  } = data;

  const dispatch = useDispatch();
  useEffect(() => {
    if (isAdmin) {
      return fetchAllUsers(token).then((res) => {
        dispatch(dispatchGetAllUsers(res));
      });
    }
  }, [token, isAdmin, dispatch, callback]);

  const changeAvatar = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return setData({ ...data, error: "No files were uploaded." });

      if (file.size > 1024 * 1024) {
        return setData({
          ...data,
          error: "The largest image size is 1mb",
        });
      }

      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        return setData({
          ...data,
          error: "Image format is incorrect.",
        });
      }

      let formData = new FormData();
      formData.append("file", file);

      setLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      setLoading(false);
      setAvatar(res.data.url);
    } catch (error) {
      setData({ ...data, error: error.response.data.msg });
    }
  };

  const updateInformation = async () => {
    try {
      await axios.patch(
        "/user/setting",
        {
          firstName: firstName ? firstName : user.data?.firstName,
          lastName: lastName ? lastName : user.data?.lastName,
          userName: userName ? userName : user.data?.userName,
          bio: bio ? bio : user.data?.bio,
          phoneNumber: phoneNumber ? phoneNumber : user.data?.phoneNumber,
          address: address ? address : user.data?.address,
          avatar: avatar ? avatar : user.data?.avatar,
        },
        {
          headers: { Authorization: token },
        }
      );

      setData({
        ...data,
        error: "",
        success: "Update Success!",
      });
    } catch (error) {
      setData({
        ...data,
        error: error.response.data.msg,
        success: "",
      });
    }
  };

  const handleUpdate = () => {
    updateInformation();
  };


  return (
    <div className="Setting container">
      <div className="mt-4">
        {error && ErrorMessage(error)}
        {success && SuccessMessage(success)}
        {loading && <h3>Loading.....</h3>}
      </div>
      <div className="row col-12 d-flex justify-content-center">
        <div className="p-2 col-12 col-lg-5 d-none d-lg-block mt-4 mb-4">
          <div className="d-flex justify-content-center card-info">
            <BoxSetting
              children={
                <div className="setting-infor d-flex flex-column justify-content-center">
                  <div className="header-top mt-4">INFORMATION</div>
                  <div className="body-content mt-3">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12">
                        <img
                          src={user.data?.avatar}
                          alt="avatar"
                          width="70px"
                          height="70px"
                          className="avatar"
                        />
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">Full Name</h6>
                        <p className="text-center">
                          {user.data?.lastName || "--"}{" "}
                          {user.data?.firstName || "--"}
                        </p>
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">username</h6>
                        <p className="text-center">
                          {user.data?.userName || "--"}
                        </p>
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">Email</h6>
                        <p className="text-center">
                          {user.data?.email || "--"}
                        </p>
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">Bio</h6>
                        <p className="text-center text-break">
                          {user.data?.bio || "--"}
                        </p>
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">Phone Number</h6>
                        <p className="text-center">
                          {user.data?.phoneNumber || "--"}
                        </p>
                      </div>
                      <div className="col-12 text-center mx-3">
                        <h6 className="infor-label">Address</h6>
                        <p className="text-center">
                          {user.data?.address || "--"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
        <div className="p-2 col-12 col-md-12 col-sm-12 d-block d-lg-none">
          <div className="d-flex justify-content-center mt-4">
            <BoxSetting
              children={
                <div className="setting-small d-flex flex-column justify-content-center">
                  <h4 className="header-top mt-2 mb-2">INFORMATION</h4>
                  <div className="data d-flex-flex-row text-start">
                    <span className="header-top text-start me-2">Name: </span>
                    <span className="text-start">
                      {user.data?.lastName || "--"}{" "}
                      {user.data?.firstName || "--"}
                    </span>
                  </div>
                  <div className="data d-flex-flex-row text-start">
                    <span className="header-top text-start me-2">
                      Username:{" "}
                    </span>
                    <span className="text-start">
                      {user.data?.userName || "--"}
                    </span>
                  </div>
                  <div className="data d-flex-flex-row text-start">
                    <span className="header-top text-start me-2">Email: </span>
                    <span className="text-start">
                      {user.data?.email || "--"}
                    </span>
                  </div>
                  <div className="data d-flex-flex-row text-start">
                    <span className="header-top text-start me-2">
                      Phone Number:{" "}
                    </span>
                    <span className="text-start">
                      {user.data?.phoneNumber || "--"}
                    </span>
                  </div>
                  <div className="data d-flex-flex-row text-start">
                    <span className="header-top text-start me-2">
                      Address:{" "}
                    </span>
                    <span className="text-start">
                      {user.data?.address || "--"}
                    </span>
                  </div>
                </div>
              }
            />
          </div>
        </div>
        <div className="p-2 col-12 col-lg-5 col-md-12 col-sm-12 mt-3">
          <div className="header-setting text-start ms-4 mt-4">
            <h4 className="header-top mt-2 mb-2">SETTING INFORMATION</h4>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column text-start mx-4 my-2">
                <label className="label-setting">Avatar</label>
                <input
                  type="file"
                  name="file"
                  className="form-control"
                  id="file_up"
                  onChange={changeAvatar}
                />
              </div>
              <div className="d-flex flex-column text-start mx-4 my-2">
                <label className="label-setting">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your first name"
                  id="firstName"
                  name="firstName"
                  defaultValue={user.data?.firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                />
              </div>
              <div className="d-flex flex-column text-start mx-4 my-2">
                <label className="label-setting">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your last name"
                  id="lastName"
                  name="lastName"
                  defaultValue={user.data?.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                />
              </div>
              <div className="d-flex flex-column text-start mx-4 my-2">
                <label className="label-setting">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  id="userName"
                  name="userName"
                  defaultValue={user.data?.userName}
                  onChange={(e) =>
                    setData({ ...data, userName: e.target.value })
                  }
                />
              </div>
              <div className="d-flex flex-column text-start mx-4 my-2">
                <label className="label-setting">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone number"
                  id="phoneNumber"
                  name="phoneNumber"
                  defaultValue={user.data?.phoneNumber}
                  onChange={(e) =>
                    setData({ ...data, phoneNumber: e.target.value })
                  }
                />
              </div>
              <div className="d-flex flex-column text-start mx-4 my-2">
                <label className="label-setting">Bio</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your bio"
                  id="bio"
                  name="bio"
                  maxLength="400"
                  defaultValue={user.data?.bio}
                  onChange={(e) => setData({ ...data, bio: e.target.value })}
                />
              </div>
              <div className="d-flex flex-column text-start mx-4 my-2">
                <label className="label-setting">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                  id="address"
                  name="address"
                  defaultValue={user.data?.address}
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                />
              </div>

              <div className="d-flex flex-row my-4 mx-4">
                <button
                  disabled={loading}
                  onClick={handleUpdate}
                  className="btn-submit"
                >
                  Update
                </button>
              </div>
              <div className="d-flex flex-row my-4 mx-4">
                <a href="/ChangePassword" className="btn-change-password">
                  Change Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
