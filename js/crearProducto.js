import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    // Prevenir el comportamiento por defecto de enviar el formulario
    evento.preventDefault();


    const nombre = document.querySelector("[data-nombre]").value;
    const precio = parseFloat(document.querySelector("[data-precio]").value);
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conexionAPI.agregarProducto(nombre, precio, imagen);
    } catch (e) {
        alert(e)
    }
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Asegúrate de que esto esté aquí
    crearProducto(evento);
});

