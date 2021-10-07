import React from "react";

import Burbuja from "../Burbuja/Burbuja";
import "./Menu.css";

function Menu({ productosComprados, mostrarProductosComprados }) {

  const cantidad = productosComprados.reduce((acc, el) => acc + el.cantidad, 0);

  return (
    <nav className="nav">
      <div className="nav__items">
        <img className="nav__logo" src="./images/ecomsur_logo.png" alt="logo Ecomsur"/>
        <p className="nav__titulo">Prueba Carlos Bedoya</p>
      </div>
      <div className="nav__carro">
        {cantidad !== 0 && !isNaN(cantidad) ? (
          <Burbuja cantidadElementos={cantidad} />
        ) : null}
        <img
          className="menu__item menu__item--carro" alt="logo Carrito compras"
          src="./images/carro.png" onClick={mostrarProductosComprados}
        ></img>
      </div>
        
    </nav>
  );
}

export default Menu;
