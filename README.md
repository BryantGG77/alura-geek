# Alura Geek

**Alura Geek** es una aplicación de tienda en línea construida como parte de los desafíos de Alura Latam. El proyecto está desarrollado utilizando **HTML**, **CSS** y **JavaScript** para el frontend, y emplea **JSON Server** como simulador de una base de datos para gestionar las solicitudes **GET**, **POST** y **DELETE**.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura de la Base de Datos](#estructura-de-la-base-de-datos)
- [Autores](#autores)

## Descripción

Alura Geek es una plataforma que permite a los usuarios ver productos de una tienda en línea, añadir nuevos productos, eliminarlos y ver los detalles de cada uno. La aplicación ha sido diseñada siguiendo el enfoque **mobile-first** para garantizar una experiencia óptima en dispositivos móviles y de escritorio.

Este proyecto está enfocado en simular la interacción con un backend utilizando JSON Server, lo cual permite la práctica de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de datos.

## Características

- **Ver Productos:** Los usuarios pueden ver una lista de productos disponibles en la tienda.
- **Agregar Producto:** Los administradores pueden añadir nuevos productos a través de un formulario.
- **Eliminar Producto:** Los administradores pueden eliminar productos de la tienda.
- **Responsive Design:** La interfaz se adapta a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **HTML5** - Estructura de la aplicación.
- **CSS3** - Estilos y diseño responsivo.
- **JavaScript (ES6+)** - Lógica de la aplicación.
- **JSON Server** - Simulador de una base de datos para pruebas de API.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue los siguientes pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/BryantGG77/alura-geek.git

2. **Navega al directorio del proyecto:**
  cd alura-geek
3. **Instala JSON Server (si aún no lo tienes):**
   npm install -g json-server
4. **Inicia JSON Server:**
   json-server --watch db.json --port 3001
5. **Abre el archivo index.html en tu navegador para ver la aplicación en funcionamiento, puedes instalar la extensión Live Server para poder correrlo.**

## USO

- Visualizar Productos: Al cargar la aplicación, puedes ver todos los productos listados desde la base de datos de JSON Server.
- Añadir Productos: Usa el formulario en la sección de administración para agregar nuevos productos.
- Eliminar Productos: Haz clic en el botón de eliminar para quitar un producto de la lista.
  
