import axios from "axios";
import React, { useState } from "react";

import "./Buscador.css";

function Buscador({ buscarProducto, filtradoSeleccion }) {
  const [valorSeleccionado, setValorSeleccionado] = useState("selectNombre");

  const obtenerValorBusqueda = (valor) => {
    setValorSeleccionado(valor.target.value);
  };

  return (
    <div className="buscador">
      <select
        className="buscador__select"
        onChange={(e) => obtenerValorBusqueda(e)}>
        <option value="selectNombre" selected>
          Buscar por nombre
        </option>
        <option value="selectId">Buscar por id</option>
      </select>
      <input
        type={valorSeleccionado && valorSeleccionado === "selectNombre"
            ?  "search"
            : "number"
            } 
        onChange={
            valorSeleccionado && valorSeleccionado === "selectNombre"
            ? buscarProducto
            : filtradoSeleccion
            }
        className="buscador__input"
        placeholder={
          valorSeleccionado && valorSeleccionado === "selectNombre"
            ? "Escriba el nombre del producto"
            : "Escriba el ID del producto"
        }
      />
    </div>
  );
}

export default Buscador;
