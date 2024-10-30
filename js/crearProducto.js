import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    // Prevenir el comportamiento por defecto de enviar el formulario
    evento.preventDefault();

    // Primero obtenemos la lista actual de productos
    const productosExistentes = await fetch('http://localhost:3001/productos');
    const productos = await productosExistentes.json();

    // Luego calculamos el nuevo ID basándonos en el número de productos actuales
    const id = productos.length + 1;

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = parseFloat(document.querySelector("[data-precio]").value);
    const imagen = document.querySelector("[data-imagen]").value;

    console.log(id, nombre, precio, imagen);
    await conexionAPI.agregarProducto(id, nombre, precio, imagen);
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Asegúrate de que esto esté aquí
    crearProducto(evento);
});

