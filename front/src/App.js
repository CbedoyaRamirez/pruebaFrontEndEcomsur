import React, { useEffect, useState } from "react";

import Layout from "./Componentes/Layout/Layout";
import Productos from "./Componentes/Productos/Productos";

import "./App.css";
import Menu from "./Componentes/Menu/Menu";
import Buscador from "./Componentes/Buscador/Buscador";
import DetalleCarro from "./Componentes/DetalleCarro/DetalleCarro";

const URL = "http://localhost:5000/api/products";

const App = () => {
  let listadoProductoCarro = [];
  const [carro, setCarro] = useState([]);
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

  const agregarProductosCarro = (producto) => {
    // listadoProductoCarro.push(producto);
    console.log(listadoProductoCarro);
    // console.log(Array(carro));
    if (listadoProductoCarro.find((prod) => prod._id === producto._id)) {
      const nuevoCarro = listadoProductoCarro.map((prod) =>
        prod._id === producto._id
          ? {
              ...prod,
              cantidad: prod.cantidad + 1,
            }
          : prod
      );
      return setCarro(nuevoCarro);
    }

    return listadoProductoCarro.push({
      ...producto,
      cantidad: 1
    });
  };

  return (
    <Layout>
      <Menu productosComprados={listadoProductoCarro} />
      <Buscador />
      {/* <DetalleCarro productosComprados={carro} /> */}
      <Productos
        agregarProductosCarro={agregarProductosCarro}
        productos={listaProductos}
      />
    </Layout>
  );
};

export default App;
