import React, { useEffect, useState } from "react";

import Layout from "./Componentes/Layout/Layout";
import Productos from "./Componentes/Productos/Productos";
import Menu from "./Componentes/Menu/Menu";
import Buscador from "./Componentes/Buscador/Buscador";
import axios from "axios";
import Modal from "./Componentes/DetalleProducto/Modal";

import "./App.css";
import TituloTienda from "./Componentes/TituloTienda/TituloTienda";

const URLPRODUCTOS = "http://localhost:5000/api/products";

const App = () => {
  const [carro, setCarro] = useState([]);
  const [listaProductos, setListaProductos] = useState([]);
  const [buscarProductos, setBuscarProductos] = useState([]);
  const [encontroProductos, setEncontroProductos] = useState(true);
  const [active, setActive] = useState(false);
  const [response, setResponse] = useState("");

  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();

    const obtenerListadoProductos = async () => {
      const listadoProd = await axios.get(URLPRODUCTOS);
      setBuscarProductos(listadoProd.data);
      setListaProductos(listadoProd.data);
    };
    obtenerListadoProductos();

    if(sessionStorage.getItem("productosCarro") !== null) {
      setCarro([...JSON.parse(sessionStorage.getItem("productosCarro"))]);
    }
  }, []);

  const toogle = () => {
    setActive(!active);
  };

  const agregarProductosCarro = (producto) => {
    setCarro([...carro, producto]);
    if (sessionStorage.getItem("productosCarro") !== null) {
      if (carro.find((prod) => prod._id === producto._id)) {
        const nuevoCarro = carro.map((prod) =>
          prod._id === producto._id
            ? {
                ...prod,
                cantidad: prod.cantidad + 1,
              }
            : prod
        );
        sessionStorage.setItem("productosCarro", JSON.stringify(nuevoCarro));
        return setCarro([...nuevoCarro]);
      }
    }
    const nuevoObjeto = { ...producto, cantidad: 1 };
    const objLocalStorage = [...carro, nuevoObjeto];
    sessionStorage.setItem("productosCarro", JSON.stringify(objLocalStorage));
    return setCarro([...carro, nuevoObjeto]);
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
      if (productoEncontrado.length === 0) {
        setEncontroProductos(false);
      } else {
        setEncontroProductos(true);
      }
    } else {
      setBuscarProductos(listaProductos);
    }
  };

  const eliminarProductoLista = (producto) => {
    const filtro = carro.filter((prod) => prod._id !== producto._id);
    setCarro(filtro);
  };

  return (
    <Layout>
      <Menu mostrarProductosComprados={toogle} productosComprados={carro} />
      <Buscador buscarProducto={buscarProducto} />
      <TituloTienda />
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

      <Modal active={active} toogle={toogle}>
        <div className="contenedor_producto_modal--carrito">
          {carro && carro.length > 0 ? (
            <p className="contenedor__titulo">Productos comprados</p>
          ) : null}
          {carro && carro.length > 0 ? (
            carro.map((prod) => (
              <li className="detalleCarro__item" key={prod._id}>
                <img className="detalleCarro__img" src={`http://localhost:5000/${prod.image}`} alt={prod.name} />
                <p className="detalleCarro__nombre">{prod.name}</p>
                <span className="detalleCarro__cantidad">
                  Cantidad : {prod.cantidad}
                </span>
                <img
                  className="cta-eliminar"
                  src="../../images/delete.png"
                  onClick={() => eliminarProductoLista(prod)}
                />
              </li>
            ))
          ) : (
            <p>SIN PRODUCTOS EN EL CARRO</p>
          )}
        </div>
      </Modal>
    </Layout>
  );
};

export default App;
