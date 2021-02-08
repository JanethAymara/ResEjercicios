let numero = parseInt(prompt("Escribe un número te diré si es divisible en 2"));
document.write("Tu número es: " + numero);

let resultado = numero % 2

if (resultado == 0) {
    document.write("<br>Tu número es divisible en dos! Resultado: " + numero / 2);
} else {
    document.write("<br>Tu número no es divisible! Tu resultado es: " + (numero / 2));
}