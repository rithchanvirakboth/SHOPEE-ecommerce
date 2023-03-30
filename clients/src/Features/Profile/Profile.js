import React from "react";
import logo from "../../Assets/logo.png";
function Profile() {
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
                  <p>text</p>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="col-lg-4 col-md-12">
              <div className="d-flex flex-column mb-3">
                <div className="p-2 text-center">
                  <img src={logo} alt="logo" width="300px" height="150px" />
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
                  <li className="list-group-item profile-list">Name: </li><span className="profile-data">Rithboth</span>
                  <li className="list-group-item profile-list">Email: </li><span className="profile-data">rithboth0@gmail.com</span>
                  <li className="list-group-item profile-list">Phone: </li><span className="profile-data">015812384</span>
                  <li className="list-group-item profile-list">Address: </li><span className="profile-data">161A </span>
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
