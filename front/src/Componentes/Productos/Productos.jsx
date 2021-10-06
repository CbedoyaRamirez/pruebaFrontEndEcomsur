import React from "react";
import Producto from "./Producto";

import "./Productos.css";

const Productos = ({ productos, agregarProductosCarro }) => {
  return (
    <div className="contenedor__productos">
      {productos.map((prod) => (
        <Producto
          imagenProducto={prod.image}
          agregarProductosCarro={agregarProductosCarro}
          key={prod._id}
          producto={prod}
        />
      ))}
    </div>
  );
};

export default Productos;
