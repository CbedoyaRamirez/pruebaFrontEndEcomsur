import React, { useState } from "react";

import DetalleProducto from "../DetalleProducto/DetalleProducto";
import Modal from "../DetalleProducto/Modal";

import "./Producto.css";

function Producto({ producto, agregarProductosCarro }) {
  const [active, setActive] = useState(false);

  const toogle = () => {
    setActive(!active);
  };

  const obtenerImagenProducto = (nombreImagen) => {
    fetch(` http://localhost:5000/imagenes/ ${nombreImagen}`).then();
  };

  return (
    <div className="contenedor_producto">
      <img className="producto" src={producto.image} alt={producto.name} />
      <h1 className="nombreProducto">{producto.name}</h1>
      <p className="descripcion">{producto.description}</p>
      {producto.countInStock === 0 ? (
        <h1 style={{ color: "#9a031e" }}>!! SIN STOCK !!</h1>
      ) : (
        ""
      )}
      <a
        style={{
          visibility: producto.countInStock === 0 ? "hidden" : "visible",
        }}
        className="cta"
        onClick={() => agregarProductosCarro(producto)}
      >
        Add item to cart
      </a>
      <a className="cta" onClick={() => toogle(producto)}>
        Detalle producto PDP
      </a>
      <Modal active={active} toogle={toogle}>
        <div className="contenedor_producto_modal">
          <img className="producto" src={producto.image} alt={producto.name} />
          <p className="nombreProducto"><h3>Marca</h3>{producto.brand}</p>
          <p className="descripcion"><h3>Categoria</h3> {producto.category}</p>
          <p className="descripcion"> <h3>Precio</h3> {producto.price}</p>
          <p className="descripcion"><h3>Rating</h3> {producto.rating}</p>
        </div>
      </Modal>
    </div>
  );
}

export default Producto;
