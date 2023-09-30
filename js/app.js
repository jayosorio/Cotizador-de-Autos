// Primeros Pasos y primer Prototype

// Constructores
function Seguro(marca, year, tipo) {
    this.marca,
    this.year,
    this.tipo
}
function UI() {}

// Llena las opciones de los años
UI.prototype.llenarOpcines = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto')
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

// Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpcines(); // Llena el select con los años...
})

// Validar formulario
eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value

    // Leer el año seleccionado
    const year = document.querySelector('#year').value

    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'exito');
}