import React from "react";
import Burbuja from "../Burbuja/Burbuja";

import "./Menu.css";

function Menu(props) {
  return (
    <nav className="nav" >
      <a className="nav__titulo">Prueba Carlos Bedoya</a>
      <ul>
        <li className="menu">
          <Burbuja />
          <img
            className="menu__item menu__item--carro"
            src="./images/carro.png"
          ></img>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
