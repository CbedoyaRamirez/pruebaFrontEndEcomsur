import React, { useEffect, useState } from "react";

import Layout from "./Componentes/Layout/Layout";
import Productos from "./Componentes/Productos/Productos";

import "./App.css";
import Menu from "./Componentes/Menu/Menu";

const URL = "http://localhost:5000/api/products";

const App = () => {
  const [listaProductos, setlistaProductos] = useState([]);

  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();

    const obtenerListadoProductos = async () => {
      const data = await fetch(URL);
      const lista = await data.json();
      setlistaProductos(lista);
    };
    obtenerListadoProductos();
  }, []);
  // -------------------------------------------------

  return (
    <Layout>
      <Menu />
      <Productos>{listaProductos}</Productos>
    </Layout>
  );
};

export default App;
