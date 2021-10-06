import React, { useEffect, useReducer, useState } from "react";

import Layout from "./Componentes/Layout/Layout";
import Productos from "./Componentes/Productos/Productos";

import "./App.css";
import Menu from "./Componentes/Menu/Menu";
import Buscador from "./Componentes/Buscador/Buscador";
import DetalleCarro from "./Componentes/DetalleCarro/DetalleCarro";
import axios from "axios";
import { shoppingInitialState, shoppingReducer } from "./Reducers/comprarReducer";
import { TYPES } from "./Actions/comprarAction";

const URL = "http://localhost:5000/api/products";

const App = () => {
  const [carro, setCarro] = useState([]);
  const [listaProductos, setListaProductos] = useState([]);
  const [buscarProductos, setBuscarProductos] = useState([]);
  const [encontroProductos, setEncontroProductos] = useState(true);
  // const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  // const { productos, carrito } = state;

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
      const listadoProd = await axios.get(URL);
      setBuscarProductos(listadoProd.data);
      setListaProductos(listadoProd.data);
      // dispatch({ type: TYPES.AÑADIR, payload: listadoProd.data });
    };
    obtenerListadoProductos();
  }, []);
  // -------------------------------------------------

  const agregarProductosCarro = (producto) => {
    console.log("carro");
    console.log(carro);
    if (Array(carro).find((prod) => prod._id === producto._id)) {
      const nuevoCarro = Array(carro).map((prod) =>
        prod._id === producto._id
          ? {
              ...prod,
              cantidad: prod.cantidad + 1,
            }
          : prod
      );
      return setCarro(nuevoCarro);
    }

    const nuevoObjeto = {...producto , ['cantidad']: 1}
    return setCarro(Array(nuevoObjeto));
  };

  const buscarProducto = (producto) => {
    const keyboard = producto.target.value;

    if (keyboard !== "") {
      const productoEncontrado = listaProductos.filter((prod) =>
        String(prod.name)
          .toLocaleLowerCase()
          .includes(keyboard.toLocaleLowerCase())
      );
      setBuscarProductos(productoEncontrado);
      if(productoEncontrado.length === 0) {
        setEncontroProductos(false)
      }else {
        setEncontroProductos(true)
      }
    } else {
      setBuscarProductos(listaProductos);
    }
  };

  return (
    <Layout>
      <Menu productosComprados={carro} />
      <Buscador buscarProducto={buscarProducto} />
      {carro && carro.length > 0 ? (
        <DetalleCarro productosComprados={carro} />
      ) : null}

      {encontroProductos ? (
        <Productos
          agregarProductosCarro={agregarProductosCarro}
          productos={buscarProductos}
        />
      ) : (
        <h1 className="noencontrados contenedor__productos--noregistros">
          PRODUCTOS NO ENCONTRADOS
        </h1>
      )}
    </Layout>
  );
};

export default App;
