import axios from "axios";
import React from "react";
import Producto from "./Producto";

import './Productos.css'

const Productos = ({productos, agregarProductosCarro}) => {

  const obtenerImagenProducto  = async (nombreImagen) => {
    return await axios.get(` http://localhost:5000${nombreImagen}` , {
      responseType: "blob" 
    }).then(response => response.data)
     
    //  return await axios({
    //   method: 'GET',
    //   url: `http://localhost:5000${nombreImagen}`,
    //   responseType: 'stream',
    // }).then(response => Buffer.from(response.data, 'binary').toString('base64'))

    // fetch(
    //   ` http://localhost:5000${nombreImagen}`
    // ).then(res => res.blob()).then((blob) => {
    //   return URL.createObjectURL(blob);
    // });
    

  };  

  return (
      <div className="contenedor__productos" >
          {productos.map(prod => (
            <Producto imagenProducto={obtenerImagenProducto(prod.image)} agregarProductosCarro={agregarProductosCarro} key={prod._id} producto={prod} />
          ))}
      </div>
    );
};

export default Productos;
