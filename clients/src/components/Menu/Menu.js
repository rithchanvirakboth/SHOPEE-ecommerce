import React from "react";
import { MENU } from "../../utils/const";

function Menu() {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {MENU.map((menu, index) => (
          <li className="nav-item" key={index}>
            <a href={menu.link} className="nav-link">
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
