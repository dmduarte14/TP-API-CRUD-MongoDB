
# TP-API-CRUD-MongoDB Daniel Duarte 
<div style="text-align: center;">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTVteWV6cHR1cnF2YzVhdDhxNHdvenBvMXAwemgybDU3dXR4enRiZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MMnzoF2qdznMWzWE86/giphy.gif" width="100" height="50" />
</div>

Este proyecto es una API CRUD construida con Node.js, Cors, Express y MongoDB. Incluye autenticación, manejo de sesiones y soporte para métodos extendidos.


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
## package.json
```cmd
{
  "name": "tp-api-crud-con-mongodb",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node  src/index.js",
    "dev": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "body-parser": "^1.20.3",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "express-session": "^1.18.1",
    "jsonwebtoken": "^9.0.2",
    "method-override": "^3.0.0",
    "mongodb": "^6.12.0",
    "mongoose": "^8.9.3",
    "nodemon": "^3.1.9",
    "npm-check-updates": "^17.1.13"
  }
}
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
- [cors](https://www.npmjs.com/package/cors) - Política de seguridad que permite que los recursos de una página web se soliciten desde otro dominio.




    
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

# Archivos MOCK
## Usuarios
```cmd
[
  {
    "name": "freddie",
    "LastName": "mercury",
    "email": "freddie.mercury@example.com",
    "age": 45,
    "registrationDate": "2025-01-01T10:00:00Z",
    "password": "Querty123"
  },
  {
    "name": "michael",
    "LastName": "jackson",
    "email": "michael.jackson@example.com",
    "age": 50,
    "registrationDate": "2025-01-05T12:30:00Z",
    "password": "Querty123"
  },
  {
    "name": "beyoncé",
    "LastName": "knowles",
    "email": "beyonce.knowles@example.com",
    "age": 38,
    "registrationDate": "2025-01-10T09:00:00Z",
    "password": "Querty123"
  },
  {
    "name": "elvis",
    "LastName": "presley",
    "email": "elvis.presley@example.com",
    "age": 42,
    "registrationDate": "2025-01-15T14:15:00Z",
    "password": "Querty123"
  },
  {
    "name": "whitney",
    "LastName": "houston",
    "email": "whitney.houston@example.com",
    "age": 48,
    "registrationDate": "2025-01-20T16:45:00Z",
    "password": "Querty123"
  }
]

```
## Categorias
```cmd
  {
    "name": "herramientas manuales"
  },
  {
    "name": "herramientas eléctricas"
  },
  {
    "name": "medición"
  },
  {
    "name": "accesorios"
  },
  {
    "name": "materiales de construcción"
  }
```


## Productos
```cmd
[
  {
    "name": "martillo",
    "price": 1500,
    "profitRate": 1.2,
    "description": "Martillo de acero con mango ergonómico.",
    "status": "AVAILABLE",
    "category": "6792aa5187d3930453be1351",
    "highlighted": true,
    "creationDate": "2025-01-15T10:00:00Z",
    "stock": 25
  },
  {
    "name": "destornillador philips",
    "price": 800,
    "profitRate": 1.25,
    "description": "Destornillador de punta cruz de alta calidad.",
    "status": "AVAILABLE",
    "category": "6792aa5187d3930453be1351",
    "highlighted": false,
    "creationDate": "2025-01-16T12:30:00Z",
    "stock": 40
  },
  {
    "name": "taladro electrico",
    "price": 7500,
    "profitRate": 1.15,
    "description": "Taladro eléctrico de 600W con múltiples velocidades.",
    "status": "NOT AVAILABLE",
    "category": "6792aa5b87d3930453be1354",
    "highlighted": true,
    "creationDate": "2025-01-10T09:00:00Z",
    "stock": 10
  },
  {
    "name": "cinta metrica 5m",
    "price": 400,
    "profitRate": 1.3,
    "description": "Cinta métrica resistente de 5 metros.",
    "status": "AVAILABLE",
    "category": "6792aa6887d3930453be1357",
    "highlighted": false,
    "creationDate": "2025-01-12T14:15:00Z",
    "stock": 60
  },
  {
    "name": "juego de llaves allen",
    "price": 1200,
    "profitRate": 1.18,
    "description": "Juego de 10 llaves Allen de diferentes medidas.",
    "status": "DISCONTINUED",
    "category": "6792aa7287d3930453be135a",
    "highlighted": false,
    "creationDate": "2025-01-18T16:45:00Z",
    "stock": 0
  },
  {
    "name": "cemento portland",
    "price": 750,
    "profitRate": 1.1,
    "description": "Bolsa de cemento Portland de 50kg.",
    "status": "AVAILABLE",
    "category": "6792aa7887d3930453be135d",
    "highlighted": false,
    "creationDate": "2025-01-19T08:00:00Z",
    "stock": 100
  },
  {
    "name": "pala metálica",
    "price": 3000,
    "profitRate": 1.2,
    "description": "Pala metálica reforzada para construcción.",
    "status": "AVAILABLE",
    "category": "6792aa5187d3930453be1351",
    "highlighted": true,
    "creationDate": "2025-01-20T15:30:00Z",
    "stock": 15
  },
  {
    "name": "nivel de burbuja 40cm",
    "price": 650,
    "profitRate": 1.15,
    "description": "Nivel de burbuja compacto para medición precisa.",
    "status": "AVAILABLE",
    "category": "6792aa6887d3930453be1357",
    "highlighted": false,
    "creationDate": "2025-01-14T13:00:00Z",
    "stock": 30
  }
]

```

![Gif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTQ1eWZhandsZXA1MW95YWc1anZnbnd5cDh3YzVmbmRldW9zZDB2ayZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/tHIRLHtNwxpjIFqPdV/giphy.gif)



