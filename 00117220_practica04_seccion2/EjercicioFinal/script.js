var input = document.getElementById('textbox');
var botonSubmit = document.querySelector('button[type="submit"]');
var mensaje = document.querySelector('h3');

function recordatoriosAlternativa(diaSemana, mensajePersonalizado) {
    const actividades = {
        'lunes': 'Hoy tengo que atender un cliente especifico.',
        'martes': 'Hoy visito una agencia fuera de la ciudad.',
        'miercoles': 'Hoy debo llevar a mi hija al ballet.',
        'jueves': 'Hoy debo priorizar entregas de desarrollo.',
        'viernes': 'Hoy debo atender problemas de manera remota.',
        'sábado': '¡Hoy debo hacer lo que mi esposa quiera',
        'domingo': '¡No tienes actividades programadas!'
    };

    const diaEnMinusculas = diaSemana.toLowerCase();
    const mensajeActividad = actividades[diaEnMinusculas];

    if (mensajeActividad) {
        return mensajeActividad;
    } else {
        return 'No reconocí el día de la semana. Por favor, inténtalo de nuevo.';
    }
}

botonSubmit.addEventListener('click', () => {

    const diaIngresado = input.value;
    const mensajeAMostrar = recordatoriosAlternativa(diaIngresado);

    mensaje.textContent = mensajeAMostrar;
});