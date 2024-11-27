import { conexionAPI } from "./conexionAPI.js";

export function eventoBorrarProducto(producto) {
    producto.querySelector(".productos__boton").addEventListener("click", async (evento) => {
        evento.preventDefault();  // Prevent default button action

        try {
            const id = evento.target.closest("button").dataset.id;
            await conexionAPI.eliminarProducto(id);
            producto.remove();  // Remove product from the DOM
        } catch (e) {
            alert(e);
        }
    });
}