import React from "react";
import Logo from "../BrandLogo/brandLogo";
import Dropdown from "../Dropdown/Dropdown";
import Offcanva from "../Offcanva/Offcanva";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";
import { TITLE } from "../../utils/const";

function Navbar() {
  const auth = useSelector((state) => state.authReducer);

  const { user, isLogged } = auth;

  return (
    <div className="container-fluid">
      {/* Logo */}
      <div className="col-lg-3 col-xl-3 d-flex justify-content-center">
        <div className="d-none d-lg-block d-xl-block">
          <Logo />
        </div>
        <div className="d-md-block d-sm-block d-lg-none">
          <Offcanva />
        </div>
      </div>

      <div className="col-lg-6 col xl-6 d-flex justify-content-center">
        <div className="d-none d-lg-block d-xl-block">
          <Menu />
        </div>
        <div className="d-md-block d-sm-block d-lg-none">
          <Logo />
        </div>
      </div>

      {isLogged ? (
        <div className="col-lg-3 col-xl-3 d-flex justify-content-center">
          <Dropdown
            children={{
              name: user.data?.userName,
            }}
          />
        </div>
      ) : (
        <div className="col-lg-3 col-xl-3 d-flex justify-content-center">
          <div className="text-center signin">
            <a href="/login">{TITLE.SIGN_IN}</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
