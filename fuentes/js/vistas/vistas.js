const botonFormulario = document.querySelector('#botonFormulario');
const botonListado = document.querySelector('#botonListado');

const vistaInicio = document.querySelector('#cuerpoMenu');
const vistaFormulario = document.querySelector('#vistaFormulario');
const vistaListado = document.querySelector('#vistaListado');

function mostrarVista(seccion) {
    vistaInicio.style.display = 'none';
    vistaFormulario.style.display = 'none';
    vistaListado.style.display = 'none';
    seccion.style.display = 'block';
}

botonFormulario.onclick = () => mostrarVista(vistaFormulario);
botonListado.onclick = () => mostrarVista(vistaListado);

mostrarVista(vistaInicio);