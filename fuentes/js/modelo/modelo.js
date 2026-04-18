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
}

let personajes = [];

function crearPersonaje(personaje) {
    personajes.push(personaje);
}

function obtenerPersonajes() {
    return personajes;
}

function actualizarPersonaje(id, datosNuevos) {
    let p = personajes.find(per => per.id === id);
    if (p) {
        p.nombre = datosNuevos.nombre;
        p.fechaNacimiento = datosNuevos.fechaNacimiento;
        p.sexo = datosNuevos.sexo;
        p.activo = datosNuevos.activo;
        p.imagen = datosNuevos.imagen;
        p.oceano = datosNuevos.oceano;
        p.descripcion = datosNuevos.descripcion;
    }
}

function eliminarPersonaje(id) {
    personajes = personajes.filter(p => p.id !== id);
}