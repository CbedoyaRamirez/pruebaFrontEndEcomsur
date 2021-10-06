import React from "react";

import "./DetalleCarro.css";

function DetalleCarro({ productosComprados }) {

  console.log(productosComprados);

  return (
    <div className="detalleCarro">
      <ul>
        <h1 className="detalleCarro__titulo">Productos comprados</h1>
        {productosComprados.map(prod => (
            <li className="detalleCarro__item" key={prod._id} >
              <img className="detalleCarro__img" src={prod.image}/>
              {prod.name} <span className="detalleCarro__cantidad" >Cantidad : {prod.cantidad}</span>
              <img className="cta-eliminar" src="../../images/delete.png" />
            </li>            
        ))}
      </ul>
    </div>
  );
}

export default DetalleCarro;
