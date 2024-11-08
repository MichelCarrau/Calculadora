const pantalla = document.querySelector('.pantalla');
let operacionPendiente = '';
let numeroAnterior = '';
let operadorActual = null;
let reiniciarPantalla = false;

function agregar(valor) {
    if (reiniciarPantalla) {
        pantalla.value = '';
        reiniciarPantalla = false;
    }
    pantalla.value += valor;
}

function limpiar() {
    pantalla.value = '';
    operacionPendiente = '';
    numeroAnterior = '';
    operadorActual = null;
}

function borrarUltimo() {
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
    try {
        // Evalúa la expresión matemática directamente
        pantalla.value = eval(pantalla.value);
        reiniciarPantalla = true;
    } catch (error) {
        pantalla.value = 'Error';
        setTimeout(limpiar, 1500);
    }
}

function calcularRaiz() {
    const numero = parseFloat(pantalla.value);
    if (isNaN(numero) || numero < 0) {
        pantalla.value = 'Error';
        setTimeout(limpiar, 1500);
        return;
    }
    pantalla.value = Math.sqrt(numero);
    reiniciarPantalla = true;
}
