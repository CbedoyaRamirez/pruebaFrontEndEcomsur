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

BUSCADOR DE PRODUCTOS

Se implementa el buscador de productos

- Por nombre del producto
- Por id del producto (El api solo permite la busqueda por id, sin embargo no es muy util ya que el cliente no conoce el id)

![image](https://user-images.githubusercontent.com/7895342/136458036-904d857d-4b49-4ad6-8f9a-b3c7be94ac2e.png)


# -------------------------------------------------------------------------------------------------------------------------------------------------------------
# Prueba tecnica Front Ecomsur 2021

### Por favor, empezar la prueba después de haber leído este documento completo.

  - [Requerimientos mínimos](#requerimientos-mínimos)
  - [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
  - [Descripción de la prueba](#descripción-de-la-prueba)
  - [Reglas de entrega](#reglas-de-entrega)

## Requerimientos mínimos

Node 14.15.0

## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`
 y se ve de la siguiente forma:
 
 ![image](https://user-images.githubusercontent.com/7895342/136434513-b46eac05-4ef6-4a89-96de-e47bfbbca386.png)

- El servidor se encuentra en:
  `http://localhost:5000/`

- La lista de productos se encuentra:
  `http://localhost:5000/api/products`

- Puedes encontrar cada producto por su ID:
  `http://localhost:5000/api/products/1`

- Las imágenes se encuentran en:|
  `http://localhost:5000/imagenes/{{nombre-de-la-imagen}}`

## Descripción de la prueba

Se requiere implementar un carrito de compras simple que traiga toda la info del API local, éste debe contar con las siguientes secciones:

- Una lista de ítems mostrando el catálogo de productos. (Product List Page)
- Página de producto mostrando detalle de producto. (Product Display Page)
- Un carrito de compras que tenga todos los ítems que serán comprados por el usuario. (Cart Page)
- Espacio donde se muestre la sincronización de los ítems añadidos al carrito. (Mini cart) ![mini cart example](/minicart-example.png)

`Favor de no utilizar "CSS frameworks" como Bootstrap, MUI, Semantic UI, etc. Parte importante de la prueba es ver tu uso de CSS. No es necesario que la prueba tenga un diseño muy complejo, estamos evaluando funcionalidad, no diseño ni uso de colores.`
`Puedes instalar cualquier Libreria NPM que gustes para facilitar el desarrollo (Axios para llamadas al API, Modals, transiciones, etc..)`

#### Las reglas del negocio son:

- Cada ítem del catálogo debe tener un action button con el texto `Add item to cart`.
- Si no hay stock el `action button` debe deshabilitarse
- Cada ítem en el carro debe tener un `action button` para remover el ítem del carro.
- Los items en el carrito se deben de agrupar mostrando cantidad de cada producto añadido.

#### Puntos extras:

- Mostrar el rating y número de reviews en el PLP y PDP
- Usar Redux para mantener el estado global.
- Mantener info de ítems en carrito al recargar la página

#### Notas

- Recuerda la filosofía "Mobile-First Responsive Design".
- Piensa en otras tiendas en linea que hayas usado. El publico final no es necesariamente alguien muy tecnico.
- Si no utilizas el API local tu prueba será descartada.

## Reglas de entrega

1. Documenta la resolución de tu problema en un un archivo BITACORA.md, además, indica detalladamente cómo instalar las dependencias o archivos necesarios para correr tu aplicación.

2. Es necesario que garantices que tu aplicación pueda correr en la máquina de otra persona.

3. Sube tu respuesta a un repositorio en una cuenta tuya de GitHub, GitLab o BitBucket y da acceso a `kbarcelo@ecomsur.com` y posiblemente a otros correos que te pida RRHH

## ¡Mucho éxito! 💪
