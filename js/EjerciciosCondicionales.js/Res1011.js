/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2,
3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
(hay que decir todos por los que es divisible)*/

let num = parseInt(prompt("Escribe un número, te diré si es divisible en 2, 3, 5 o 7"));
document.write("Tu número es: " + num)


if ((num % 2) == 0) {
    document.write("<br>Es divisible en 2! Resultado: " + (num / 2));
} else if ((num % 2) != 0) {
    document.write("<br>Tu número no es divisible en 2");
}

if ((num % 3) == 0) {
    document.write("<br>Es divisible en 3! Resultado: " + (num / 3));
} else if ((num % 3) != 0) {
    document.write("<br>Tu número no es divisible en 3");
}

if ((num % 5) == 0) {
    document.write("<br>Es divisible en 5! Resultado: " + (num / 5));
} else if ((num % 5) != 0) {
    document.write("<br>Tu número no es divisible en 5");
}

if ((num % 7) == 0) {
    document.write("<br>Es divisible en 7! Resultado: " + (num / 7));
} else if ((num % 7) != 0) {
    document.write("<br>Tu número no es divisible en 7");
}