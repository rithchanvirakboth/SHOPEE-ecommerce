import { DUMMY_DATA } from "../../utils/const";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { fetchAllUsers, dispatchGetAllUsers } from "../../Redux/Actions/usersAction";


function Profile() {
  const auth = useSelector((state) => state.authReducer);
  const token = useSelector((state) => state.tokenReducer);
  const [callback] = useState(false);
  const { user, isAdmin } = auth;

  const dispatch = useDispatch();
  useEffect(() => {
    if(isAdmin){
      async function getAllUsers() {
      return fetchAllUsers(token).then(res => {
        dispatch(dispatchGetAllUsers(res));
      })
    }
    getAllUsers();
    }
  }, [token, isAdmin, dispatch, callback]);

  return (
    <div className="container-fluid">
      <div className="row g-0 text-center">
        <div className="col-lg-12 col-md-12 mt-4 ">
          <div className="row g-0 text-center">
            <h3>
            PROFILE
            </h3>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 mt-4">
          <div className="row g-0 text-center">
            {/* About */}
            <div className="col-lg-4 col-md-12 d-none d-lg-block">
              <div className="d-flex flex-column mb-3">
                <div className="p-2 text-center">
                  <h3>ABOUT</h3>
                </div>
                <div className="p-2 text-center">
                  <p>{ user.data?.bio || DUMMY_DATA.BIO }</p>
                </div>
              </div>
          </div>

            {/* Logo */}
            <div className="col-lg-4 col-md-12">
              <div className="d-flex flex-column mb-3">
                <div className="box-image-profile p-2 text-center">
                  <img src={user.data?.avatar} alt="logo" width="300px" height="300px" className="logo" />
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="col-lg-4 col-md-12">
              <div className="d-flex flex-column mb-3">
                <div className="text-center">
                  <h3>INFORMATION</h3>
                </div>
                <div className="text-center">
                <ul className="ul-profile">
                  <li className="list-group-item profile-list">Username: </li><span className="profile-data">{ user.data?.userName || "==" }</span>
                  <li className="list-group-item profile-list">Name: </li><span className="profile-data">{ user.data?.lastName} { user.data?.firstName || "--" }</span>
                  <li className="list-group-item profile-list">Email: </li><span className="profile-data">{ user.data?.email || "--" }</span>
                  <li className="list-group-item profile-list">Phone: </li><span className="profile-data">{ user.data?.phoneNumber || DUMMY_DATA.PHONE }</span>
                  <li className="list-group-item profile-list">Address: </li><span className="profile-data">{ user.data?.address || DUMMY_DATA.ADDRESS } </span>
                  <li className="list-group-item profile-list">Role: </li><span className="profile-data">{ isAdmin ? "Admin" : "User" } </span>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
