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

// Instanciar UI
const ui = new UI();
console.log(ui);

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpcines(); // Llena el select con los años...
})