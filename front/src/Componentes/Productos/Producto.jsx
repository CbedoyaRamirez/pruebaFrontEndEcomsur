import React from "react";

import "./Producto.css";

function Producto({ producto, agregarProductosCarro }) {
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
    </div>
  );
}

export default Producto;
