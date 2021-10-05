import React from "react";

import "./DetalleCarro.css";

function DetalleCarro({ productosComprados }) {
  return (
    <div className="detalleCarro">
      <ul>
        <h1>Productos comprados</h1>
        {productosComprados.map(prod => (
            <li className="detalleCarro__item" key={prod._id} >
              <img className="detalleCarro__img" src={prod.image}/>
              {prod.name} <span>{prod.cantidad}</span>
            </li>            
        ))}
      </ul>
    </div>
  );
}

export default DetalleCarro;
