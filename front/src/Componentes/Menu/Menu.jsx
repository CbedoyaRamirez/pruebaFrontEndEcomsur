import React from "react";
import Burbuja from "../Burbuja/Burbuja";

import "./Menu.css";

function Menu(props) {
  return (
    <nav className="nav">
      <div className="nav__items">
        <img className="nav__logo" src="./images/ecomsur_logo.png" />
        <p className="nav__titulo">Prueba Carlos Bedoya</p>
      </div>
      <div className="nav__carro">
        <ul>
          <li className="menu">
            <Burbuja />
            <img
              className="menu__item menu__item--carro"
              src="./images/carro.png"
            ></img>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
