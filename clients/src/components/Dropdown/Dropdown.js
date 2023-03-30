import React from "react";
import { DROPDOWN_MENU } from "../../utils/const";

function Dropdown() {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="40"
            fill="#5e5e4a"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </button>
        <ul className="dropdown-menu" id="dropdown">
          {DROPDOWN_MENU.map((item, index) => {
            return (
              <li key={index}>
                {item.divider === true ? (
                  <hr className={item.class} />
                ) : (
                  <a className="dropdown-item" href={item.link}>
                    {item.title}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
