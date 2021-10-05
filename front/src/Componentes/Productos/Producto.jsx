import React from "react";

import "./Producto.css";

function Producto(props) {

  const obtenerImagenProducto = (nombreImagen) => {
    fetch(` http://localhost:5000/imagenes/ ${nombreImagen}`)
    .then()
  }

  return (
    <div className="contenedor_producto">
      <img
        className="producto"
        src={props.producto.image}
        alt={props.producto.name}
      />
      <h1 className="nombreProducto" >{props.producto.name}</h1>
      <p className="descripcion" >{props.producto.description}</p>
      {
        props.producto.countInStock === 0 ? <h1 style={{color: '#9a031e'}} >Sin stock</h1> : ''
      }
      <a
        style={{
          visibility: props.producto.countInStock === 0 ? "hidden" : "visible",
        }}
        className="cta"
      >
        Add item to cart
      </a>
    </div>
  );
}

export default Producto;
