
# Prueba Técnica para Inteia

Este proyecto es una prueba técnica que demuestra cómo conectar aplicaciones y microservicios utilizando tecnologías como React y Node.js. La infraestructura se despliega desde Vercel hacia Azure Cloud. A continuación, encontrarás información sobre la estructura del proyecto y cómo funciona.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: la aplicación front-end desarrollada en React y el microservicio en Node.js que actúa como servidor.

- `client/`: Contiene la aplicación front-end en React.
- `server/`: Contiene el microservicio en Node.js.

## Configuración de Variables de Entorno

Para ejecutar este proyecto, es necesario configurar las variables de entorno en ambas partes (cliente y servidor). Asegúrate de crear un archivo `.env` en el directorio raíz de cada parte con las siguientes configuraciones:

### Cliente (React - Vercel)

```env
VITE_API_URL=https://<URL_DEL_MICROSERVICIO>
