/*1- Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.*/

function parImpar(numero) {
    let compr = numero % 2;
    if (compr == 0) {
        document.write(`El número "${numero}" es Par!<br>`);
    } else {
        document.write(`El número "${numero}" es Impar!<br>`);
    }
}

parImpar(9513);
parImpar(5644);
parImpar(3215);
parImpar(98);
parImpar(32);
parImpar(5635);