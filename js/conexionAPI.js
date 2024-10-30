async function listarProductos() {
    const conexion = await fetch('http://localhost:3001/productos');
    const conexionConvertida = await conexion.json();
    //console.log(conexionConvertida);
    return (conexionConvertida);
}

async function agregarProducto(id, nombre, precio, imagen) {
    // Hacemos la solicitud para agregar el nuevo producto
    const conexion = await fetch('http://localhost:3001/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: `${id}`,
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });

    // Convertimos la respuesta a JSON
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}


// Función para eliminar un producto
async function eliminarProducto(id) {
    try {
        const response = await fetch(`http://localhost:3001/productos/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) throw new Error("Error al eliminar el producto");
        console.log(`Producto con ID ${id} eliminado correctamente`);
    } catch (error) {
        console.error("Hubo un problema al eliminar el producto:", error);
    }
}

export const conexionAPI = {
    listarProductos,
    agregarProducto,
    eliminarProducto
}

//listarProductos();