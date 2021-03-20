/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego
crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b)*/

alert("BIENVENIDO A LA CALCULADORA DE PERIMETRO DE RECTANGULOS IMAGINARIOS");
let la = parseInt(prompt("Ingresa el valor de un lado de tu rectángulo"));
let lb = parseInt(prompt("Ingresa el valor del otro lado de tu rectángulo"));

function calcPerimetro(ladoa, ladob) {
    perimetro = 2 * (ladoa + ladob);
    return perimetro;
}

calcPerimetro(la, lb);
document.write(`Lado a: ${la} <br> Lado b: ${lb} <br> El perimetro es de: ${perimetro} cm`);