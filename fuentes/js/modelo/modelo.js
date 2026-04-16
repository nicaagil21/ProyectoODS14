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

// ARRAY (base de datos en memoria)
let personajes = [];

// CREATE
function crearPersonaje(personaje) {
    personajes.push(personaje);
}

// READ
function obtenerPersonajes() {
    return personajes;
}

// UPDATE
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

// DELETE
function eliminarPersonaje(id) {
    personajes = personajes.filter(p => p.id !== id);
}