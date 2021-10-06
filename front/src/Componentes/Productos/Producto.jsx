import React, { useState } from "react";

import Modal from "../DetalleProducto/Modal";
import "./Producto.css";

function Producto({ imagenProducto, producto, agregarProductosCarro }) {

  console.log(imagenProducto)

  const [active, setActive] = useState(false);

  const toogle = () => {
    setActive(!active);
  };

  return (
    <div className="contenedor_producto">
      {/* <img className="producto" src={producto.image} alt={producto.name} /> */}
      <img className="producto" src={imagenProducto} alt={producto.name} />
      <h1 className="nombreProducto">{producto.name}</h1>

      {producto.countInStock === 0 ? (
        <h1 style={{ color: "#9a031e" }}>!! SIN STOCK !!</h1>
      ) : (
        ""
      )}
      <div className="contenedor__botones">
        <a
          style={{
            visibility: producto.countInStock === 0 ? "hidden" : "visible",
          }}
          className="cta"
          onClick={() => agregarProductosCarro(producto)}
        >
          Add item to cart
        </a>
        <a className="cta cta-detalle" onClick={() => toogle(producto)}>
          Detalles
        </a>
      </div>
      <Modal active={active} toogle={toogle}>
        <div className="contenedor_producto_modal">
          <img className="producto" src={producto.image} alt={producto.name} />
          <div className="nombreProducto">
            <h3>Marca</h3>
            {producto.brand}
          </div>
          <p className="descripcion">{producto.description}</p>
          <div className="descripcion">
            <h3>Categoria</h3> {producto.category}
          </div>
          <div className="descripcion">
            {" "}
            <h3>Precio</h3> {producto.price}
          </div>
          <div className="descripcion">
            <h3>Rating</h3> {producto.rating}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Producto;
