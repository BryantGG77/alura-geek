async function listarProductos() {
    const conexion = await fetch('https://fake-api-three-lovat.vercel.app/productos');
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return (conexionConvertida);
}

async function agregarProducto(nombre, precio, imagen) {
    // Hacemos la solicitud para agregar el nuevo producto
    const conexion = await fetch('https://fake-api-three-lovat.vercel.app/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });

    if (!conexion.ok) {
        throw new Error('Error al agregar el producto');
    }

    // Convertimos la respuesta a JSON
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}


// Función para eliminar un producto
async function eliminarProducto(id) {
    const conexion = await fetch(`https://fake-api-three-lovat.vercel.app/productos/${id}`, {
        method: "DELETE"
    });

    if (!conexion.ok) {
        throw new Error('Error al eliminar el producto');
    }

    const conexionConvertida = conexion.json();
    return (conexionConvertida);
}

export const conexionAPI = {
    listarProductos,
    agregarProducto,
    eliminarProducto
}

//listarProductos();