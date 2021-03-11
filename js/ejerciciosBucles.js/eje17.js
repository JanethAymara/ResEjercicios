/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por
teclado.*/

let frase = prompt("Ingresa un mensajitu");
let fraserev = frase.toLowerCase();
let vocal = 0;

for (let i = 0; i < fraserev.length; i++) {
    if (fraserev[i] == "a" || fraserev[i] == "e" || fraserev[i] == "i" || fraserev[i] == "o" ||
        fraserev[i] == "u") {
        let vocal = i + 1;
        document.write(`Tu frase es: ${frase}.<br>La primera vocal encontrada está en la posición: ${vocal}`);
        break;
    }
}