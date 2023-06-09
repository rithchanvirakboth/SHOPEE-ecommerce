import React from "react";
import { MENU } from "../../utils/const";
import BrandLogo from "../BrandLogo/brandLogo";
import { useSelector } from "react-redux";

function Offcanva() {
  const auth = useSelector((state) => state.authReducer);
  const { isAdmin } = auth;
  return (
    <>
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="30"
          fill="#5e5e4a"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <BrandLogo />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          { MENU.map((item, index) => (
            <div key={index} className="text-center">
              <li className="dropdown-item my-4">
                <a href={item.link} className="menu-canva">{item.name}</a>
              </li>
            </div>
          ))}
          
          { isAdmin ? (
              <div className="text-center admin-console">
              <li className="dropdown-item my-4">
                <a href="/admin" className="menu-canva">Admin Console</a>
              </li>
            </div>
          ): " "}
        </div>

      </div>
    </>
  );
}

export default Offcanva;
