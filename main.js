function unirListas() {
    const ul1 = document.querySelectorAll(".productos__lista")[0];
    const ul2 = document.querySelectorAll(".productos__lista")[1];  // Revisamos si existe ul2

    if (window.innerWidth >= 1050 && ul2) {  // Verificamos si ul2 existe antes de mover los elementos
        // Mover los li de ul2 a ul1
        while (ul2.firstChild) {
            ul1.appendChild(ul2.firstChild);
        }
        ul2.remove();  // Elimina la segunda lista ul
    }
}

// Escuchamos cuando la ventana cambia de tamaño
window.addEventListener("resize", unirListas);

// Ejecutamos la función cuando la página carga
window.addEventListener("load", unirListas);
