import React, { Component } from "react";
import DetalleProducto from "./DetalleProducto";

import "./Modal.css";

class Modal extends Component {
  render() {
    const { children, toogle, active } = this.props;

    return (
      <DetalleProducto>
        {active && (
          <div className="modal">
            <div className="modal__ventana">
              <div className="modal__contenido" >{children}</div>
              <a className="modal_cta" onClick={toogle}>
                Cerrar
              </a>
            </div>
            <div onClick={toogle} className="modal__background" />
          </div>
        )}
      </DetalleProducto>
    );
  }
}

export default Modal;
