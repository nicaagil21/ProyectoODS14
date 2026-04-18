const botonFormulario = document.querySelector('#botonFormulario');
const botonListado = document.querySelector('#botonListado');
const botonJugar = document.querySelector('#botonJugar');
const botonNoticias = document.querySelector('#botonNoticias');
const botonContacto = document.querySelector('#botonContacto');

const vistaInicio = document.querySelector('#cuerpoMenu');
const vistaFormulario = document.querySelector('#vistaFormulario');
const vistaListado = document.querySelector('#vistaListado');
const vistaNoticias = document.querySelector('#vistaNoticias');
const vistaContacto = document.querySelector('#vistaContacto');
const vistaJugar = document.querySelector('#vistaJugar');

function mostrarVista(seccion) {
    vistaInicio.style.display = 'none';
    vistaFormulario.style.display = 'none';
    vistaListado.style.display = 'none';
    vistaNoticias.style.display = 'none';
    vistaContacto.style.display = 'none';
    vistaJugar.style.display = 'none';
    seccion.style.display = 'block';
}

botonFormulario.onclick = () => mostrarVista(vistaFormulario);
botonListado.onclick = () => mostrarVista(vistaListado);
botonJugar.onclick = () => mostrarVista(vistaJugar);
botonNoticias.onclick = () => mostrarVista(vistaNoticias);
botonContacto.onclick = () => mostrarVista(vistaContacto);

mostrarVista(vistaInicio);