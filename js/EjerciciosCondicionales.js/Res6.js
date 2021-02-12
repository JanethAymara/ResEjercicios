/*6.- Escribe un programa que pida dos números y escriba en la pantalla cual
es el mayor.*/

let numero1 = parseInt(prompt("Escribe un número"));
document.write("Número 1: " + numero1)

let numero2 = parseInt(prompt("Escribe un número"));
document.write("<br>Número 2: " + numero2)

if (numero1 > numero2) {
    document.write("<br>El número 1 es mayor")
} else {
    document.write("<br>El número 2 es mayor")
}