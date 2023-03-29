import React from "react";
import { MENU } from "../../utils/const";

function Menu() {
  return (
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {MENU.map((menu) => (
          <li class="nav-item">
            <a href={menu.link} class="nav-link">
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
