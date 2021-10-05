import React from "react";
import Producto from "./Producto";

import './Productos.css'

const Productos = ({children}) => {
  return (
      <div className="contenedor__productos" >
          {children.map(prod => (
            <Producto key={prod._id} producto={prod} />
          ))}
      </div>
    );
};

export default Productos;
