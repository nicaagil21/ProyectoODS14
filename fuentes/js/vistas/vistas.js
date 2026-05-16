/*Agarrar referencias a los botones de navegación y las vistas*/
const botonInicio = document.querySelector('#botonInicio');
const botonFormulario = document.querySelector('#botonFormulario');
const botonListado = document.querySelector('#botonListado');
const botonJugar = document.querySelector('#botonJugar');
const botonNoticias = document.querySelector('#botonNoticias');
const botonContacto = document.querySelector('#botonContacto');

/*Agarrar referencias a las vistas*/
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

/*Sección para mostrar las vistas cada vez que se haga clic en un botón de navegación*/
botonInicio.onclick = function() {
    mostrarVista(vistaInicio);
};
botonFormulario.onclick = function() {
    mostrarVista(vistaFormulario);
};
botonListado.onclick = function() {
    mostrarVista(vistaListado);
};
botonJugar.onclick = function() {
    mostrarVista(vistaJugar);
};
botonNoticias.onclick = function() {
    mostrarVista(vistaNoticias);
};
botonContacto.onclick = function() {
    mostrarVista(vistaContacto);
};

mostrarVista(vistaInicio);
