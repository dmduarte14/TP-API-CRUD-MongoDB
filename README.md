
# TP-API-CRUD-MongoDB Daniel Duarte

Este proyecto es una API CRUD construida con Node.js, Express y MongoDB. Incluye autenticación, manejo de sesiones y soporte para métodos extendidos.


## Autor

- [@dmduarte14](https://github.com/dmduarte14)


## Instalación

Clona este repositorio.

Instala las dependencias con:

1. Clona este repositorio

2. Instala las dependencias con 
```bash
  npm install 
```
3. Configura las variables de entorno en un archivo .env como el siguiente:
```bash
PORT=3030
MONGODB_URI="mongodb://127.0.0.1:27017/TP-API-CRUD"
```
4. Inicia el servidor
  - Modo Desarrollo
```bash
npm run dev
```
  - Modo Produccion
```bash
npm start
```

## Dependencias principales



- [express](https://www.npmjs.com/package/express) - Framework para construir la API.
- [mongoose](https://www.npmjs.com/package/mongoose) - ODM para MongoDB.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Manejo de JWT.
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Hashing de contraseñas.
- [dotenv](https://www.npmjs.com/package/dotenv) - Gestión de variables de entorno.




    
## Rutas y enpoints

### Rutas de usuarios.
 #### /api/user


| Metodo | Ruta     | Descripcion                |
| :-------- | :------- | :------------------------- |
| `POST` | `api/user/create` | Crear nuevo usuario.|
| `GET` | `api/user/get` | Obtener todos los usuarios. |
| `GET` | `api/user/get:id` | Obtener solo un usuario. |
| `DELETE` | `api/user/delete:id` | Eliminar un usuario. |
| `PUT` | `api/user/update:id` | Actualizar un usuario. |
| `POST` | `api/user/login` | Ingreso al sistema con credenciales y generación de token. |


### Rutas de productos.
 ### /api/product

| Metodo | Ruta     | Descripcion                |
| :-------- | :------- | :------------------------- |
| `POST` | `api/product/create` | Crear nuevo producto.|
| `GET` | `api/product/get` | Obtener todos los producto. |
| `GET` | `api/product/get:id` | Obtener solo un producto. |
| `DELETE` | `api/product/delete:id` | Eliminar un producto. |
| `PUT` | `api/product/update:id` | Actualizar un producto. |


### Rutas de Categorias
 ### /api/category

| Metodo | Ruta     | Descripcion                |
| :-------- | :------- | :------------------------- |
| `POST` | `api/category/create` | Crear nueva categoria.|
| `GET` | `api/category/get` | Obtener todas las categorias. |
| `GET` | `api/category/get:id` | Obtener sola un categoria. |
| `DELETE` | `api/category/delete:id` | Eliminar una categoria. |
| `PUT` | `api/category/update:id` | Actualizar una categoria. |



## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Appendix

Any additional information goes here


