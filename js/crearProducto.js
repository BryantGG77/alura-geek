import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    evento.preventDefault();  // Prevent form submission

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
            // Add product to API
            await conexionAPI.agregarProducto(nombre, precio, imagen);
            formulario.reset();  // Reset form after product is added
        }
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", (evento) => {
    console.log("Formulario enviado");
    evento.preventDefault();
    crearProducto(evento);
    return false;
});

