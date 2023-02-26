const url = 'http://localhost:4000/clientes';

export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST',  // Cada vez que se crea un nuevo registro se usa POST
            body: JSON.stringify( cliente ) , // Contenido de esta peticion post hacia la url de /clientes
            headers: {              //los headers son info de que tipo de dato enviamos
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientes = async() => {
    try {
        const resultado = await fetch(url); // Por default fetch envia un metodo GET
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
} 

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

export const actualizarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}