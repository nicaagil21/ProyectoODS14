const botonFormulario = document.querySelector('#botonFormulario');
const botonListado = document.querySelector('#botonListado');

const botonGuardar = document.querySelector('#guardarPersonaje');
const botonBorrar = document.querySelector('#borrarPersonajes');
const botonModificar = document.querySelector('#modificarPersonajes');

const vistaInicio = document.querySelector('#cuerpoMenu');
const vistaFormulario = document.querySelector('#vistaFormulario');
const vistaListado = document.querySelector('#vistaListado');

function mostrarVista(seccion) {
    vistaInicio.style.display = 'none';
    vistaFormulario.style.display = 'none';
    vistaListado.style.display = 'none';

    seccion.style.display = 'block';
}

//NAVEGAR
botonFormulario.onclick = () => mostrarVista(vistaFormulario);
botonListado.onclick = () => mostrarVista(vistaListado);

// Accion
botonGuardar.onclick = () => {
    alert("Guardando.");
    mostrarVista(vistaListado); 
};

botonModificar.onclick = () => {
    alert("Modificando datos...");
    mostrarVista(vistaFormulario);
};
//BORRAR
botonBorrar.onclick = () => {
    alert("Personaje eliminado");
    mostrarVista(vistaListado);
};

mostrarVista(vistaInicio);