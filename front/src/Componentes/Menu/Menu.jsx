import React from "react";

import Burbuja from "../Burbuja/Burbuja";
import "./Menu.css";

function Menu({ productosComprados }) {

  const cantidad = productosComprados.reduce((acc, el) => acc + el.cantidad, 0);

  return (
    <nav className="nav">
      <div className="nav__items">
        <img className="nav__logo" src="./images/ecomsur_logo.png" />
        <p className="nav__titulo">Prueba Carlos Bedoya</p>
      </div>
      <div className="nav__carro">
        {cantidad !== 0 && !isNaN(cantidad) ? (
          <Burbuja cantidadElementos={cantidad} />
        ) : null}
        <img
          className="menu__item menu__item--carro"
          src="./images/carro.png"
        ></img>
      </div>
        
    </nav>
  );
}

export default Menu;
