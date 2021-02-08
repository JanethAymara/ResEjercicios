let numeros = 0; //Variable vacía
let acumulador = 0;
const mensaje = "Desea agregar otro número?";


do {
    numeros = parseFloat(prompt("Ingresa un número al azar!"));
    if (isNaN(numeros)) {
        alert("No seas ura, eso no es un número.");
    } else {
        acumulador = acumulador + numeros;
    }
} while (confirm(mensaje));

document.write("La suma total es: " + acumulador);