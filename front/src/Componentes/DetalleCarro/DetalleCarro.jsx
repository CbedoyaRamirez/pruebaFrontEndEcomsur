import React, { useState } from "react";

import "./DetalleCarro.css";

function DetalleCarro({ productosComprados }) {

  const limpiarCarrito = () => {
    return localStorage.removeItem('productosCarro');
  }

  const listadoProductosMemoria = JSON.parse(localStorage.getItem("productosCarro"))

  // const [productos, setProductos] = useState(listadoProductosMemoria === null ? productosComprados : Array(listadoProductosMemoria))
  const [productos, setProductos] = useState(productosComprados)

  const eliminarProductoLista = (productoEliminar) => {
    const listaFiltrada = productos.filter(prod => prod._id !== productoEliminar._id);
    setProductos(listaFiltrada);
  }

  return (
    <div className="detalleCarro">
      <ul>
        <h1 className="detalleCarro__titulo">Productos comprados</h1>
        <a className="cta_limpiar" onClick={() => limpiarCarrito()}>Limpiar Carrito</a>
        {productos.map(prod => (
            <li className="detalleCarro__item" key={prod._id} >
              <img className="detalleCarro__img" src={prod.image}/>
              {prod.name} <span className="detalleCarro__cantidad" >Cantidad : {prod.cantidad}</span>
              <img className="cta-eliminar" src="../../images/delete.png" onClick={() => eliminarProductoLista(prod)}  />
            </li>            
        ))}
      </ul>
    </div>
  );
}

export default DetalleCarro;
