class Personaje {
    constructor(id, nombre, fechaNacimiento, sexo, activo, imagen, oceano, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.activo = activo;
        this.imagen = imagen;
        this.oceano = oceano;
        this.descripcion = descripcion;
    }

    actualizar(datos) {
        this.nombre = datos.nombre;
        this.fechaNacimiento = datos.fechaNacimiento;
        this.sexo = datos.sexo;
        this.activo = datos.activo;
        this.imagen = datos.imagen;
        this.oceano = datos.oceano;
        this.descripcion = datos.descripcion;
    }
}

let listaPersonajes = [];

function crearPersonaje(personaje) {
    listaPersonajes.push(personaje);
}

function obtenerPersonajes() {
    return listaPersonajes;
}

function buscarPersonaje(id) {
    for (let i = 0; i < listaPersonajes.length; i++) {
        if (listaPersonajes[i].id === id) {
            return listaPersonajes[i];
        }
    }
    return null;
}

function actualizarPersonaje(id, datosNuevos) {
    let personaje = buscarPersonaje(id);
    if (personaje !== null) {
        personaje.actualizar(datosNuevos);
    }
}

function eliminarPersonaje(id) {
    for (let i = 0; i < listaPersonajes.length; i++) {
        if (listaPersonajes[i].id === id) {
            listaPersonajes.splice(i, 1); // Eliminar el personaje del array
            break;
        }
    }
}
