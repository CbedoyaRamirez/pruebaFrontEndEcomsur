import React from 'react';

import './Burbuja.css'

const obtenerNumero = (numero) => {
    if(!numero){
        return ''
    }else {
        return numero > 9 ? '9+' : numero;
    }
}

function Burbuja({cantidadElementos}) {
    return (
        <div className="burbuja" >
            {obtenerNumero(cantidadElementos)}
        </div>
    );
}

export default Burbuja;