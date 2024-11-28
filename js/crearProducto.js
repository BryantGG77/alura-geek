import { conexionAPI } from "./conexionAPI.js";
import { crearCarta } from "./mostrarProductos.js"; // Importamos la función

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = parseFloat(document.querySelector("[data-precio]").value);
    const imagen = document.querySelector("[data-imagen]").value;

    const mensaje = document.createElement("p");
    formulario.appendChild(mensaje);

    try {
        if (isNaN(precio)) {
            mensaje.textContent = "El precio debe ser un número válido";
            mensaje.classList.add("mensaje__error");
        } else {
            const nuevoProducto = await conexionAPI.agregarProducto(nombre, precio, imagen);

            // Crear y agregar la nueva tarjeta al DOM
            const lista = document.querySelector("[data-lista]");
            const nuevaCarta = crearCarta(nuevoProducto.id, nombre, imagen, precio);
            lista.appendChild(nuevaCarta);

            mensaje.textContent = "Producto agregado correctamente";
            mensaje.classList.add("mensaje__exito");
            formulario.reset();

        }
    } catch (e) {
        console.error(e);
        mensaje.textContent = "Hubo un error al agregar el producto";
        mensaje.classList.add("mensaje__error");

    } finally {
        setTimeout(() => mensaje.remove(), 3000);
    }
}

formulario.addEventListener("submit", crearProducto);
