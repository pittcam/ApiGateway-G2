# 🎬 MovieNest - Vue + Flask + PostgreSQL + GraphQL

¡Bienvenido a **MovieNest**!  
Este proyecto es una aplicación web para la gestión de películas favoritas con listas.

## 🚀 Requisitos Previos

- Docker y Docker Compose
- Configuración ambiente de PostgreSQL Local
- Conexión a internet activa
---

## ⚙️ Configuración Inicial

Antes de levantar el proyecto, es necesario realizar algunos ajustes en la configuración del entorno y base de datos:

### 📄 Variables de Entorno

Editá el archivo `.env` y el docker-compose del contenedor del servicio 2 con los siguientes datos:

env
- POSTGRES_DB=MovieNest
- POSTGRES_USER=tu usuario #cambiar el usuario o mantener
- POSTGRES_PASSWORD=tu contraseña #cambiar la contraseña
- POSTGRES_HOST=host.docker.internal
- POSTGRES_PORT=5433

## Ejecutar el contenedor general

### 📄 1. A nivel de MovieNest-App

Correr el siguiente comando en la raíz de la carpeta MovieNest-App:
docker-compose up --build

Si quiere detenerse se usa el comando: docker-compose down

## 2. Acceder a la página de forma local

Al crearse los contenedores correctamente, se accede a la página a través de cualquier navegador (Edge, Chrome, Opera, etc.). Mediante la dirección:

- localhost:5173

Para acceder a los servicios y probar las queries de graphQL para los dos servicios se accede con las siguientes direcciones:
- http://localhost:5000/graphql -->Servicio 1 
- http://localhost:5001/graphql --->Servicio2

En el servicio 1, puede probarse con una query de registro como la siguiente:

```
mutation {
  registerUser(
    email: "usuario@gmail.com"
    password: "12345678"
    username: "nuevouser"
    name: "Nuevo Usuario"
  ) {
    id
    email
    token
  }
}
```

En el servicio 2, puedo comprobarse la obtención de la información de la película por el título, por una query como esta:

```
query BuscarPeliculas {
  searchMovies(query: "Batman") {
    id
    title
    overview
    release_date
    poster
  }
 
}
```
