import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    // Prevenir el comportamiento por defecto de enviar el formulario
    evento.preventDefault();


    const nombre = document.querySelector("[data-nombre]").value;
    const precio = parseFloat(document.querySelector("[data-precio]").value);
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        // Primero obtenemos la lista actual de productos
        const productosExistentes = await fetch('http://localhost:3001/productos');
        const productos = productosExistentes.json();

        // Luego calculamos el nuevo ID basándonos en el número de productos actuales
        const id = productos.length + 1;
        await conexionAPI.agregarProducto(id, nombre, precio, imagen);
    } catch (e) {
        alert(e)
    }
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Asegúrate de que esto esté aquí
    crearProducto(evento);
});

