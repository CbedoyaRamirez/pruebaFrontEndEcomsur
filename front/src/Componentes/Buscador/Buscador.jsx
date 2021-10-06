import React from "react";

import './Buscador.css';

function Buscador({buscarProducto}) {
    return (
        <div className="buscador">
            <input type="search" onChange={buscarProducto}  className="buscador__input" placeholder="Buscar Producto" />
        </div>
    )
}

export default Buscador;