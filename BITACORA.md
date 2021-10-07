# Pasos para ejecutar la prueba tecnica Front Ecomsur 2021

## Requerimientos mínimos

Node 14.15.0

## Clonar aplicacion

Se la concede permiso de clonar al siguiente correo : `kbarcelo@ecomsur.com`

1.  se debe realizar la descarga de los fuentes clonando el repositorio con el siguiente comando:
    `git clone https://github.com/CbedoyaRamirez/pruebaFrontEndEcomsur.git`

## Instalar y Correr la aplicación

Una vez clonada la aplicacion se debe realizar lo siguiente:

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

Para ejecutar la aplicacion se debe correr con un solo comando :

   `npm run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`
  
Pantallas :

LISTADO DE PRODUCTOS

En esta pantalla se muestra el listado de productos que se consume del api

![image](https://user-images.githubusercontent.com/7895342/136434697-7934b8fd-3040-4e5b-99dc-1a3f64e7ed7a.png)

DETALLE DEL PRODUCTO

Se muestra el detalle del producto indicando el rating medianta estrellas

![image](https://user-images.githubusercontent.com/7895342/136434732-5785c9b9-95a6-4888-b505-91e6341ca5ec.png)

CARRITO DE COMPRAS

En este modal se muestran los productos añadidos al carrito junto a la cantidad y la opción
de eliminar los productos añadidos

Al momento de agregar productos al carro existe una burbuja que indica que se han añadido
productos al carrito de compras mediante un numero y una animación.

![image](https://user-images.githubusercontent.com/7895342/136434757-05c94149-ce27-44d1-a5ea-e54e277a4c16.png)
