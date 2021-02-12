/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor
de los tres.*/

let numero1 = parseInt(prompt("Escribe un número"));
document.write("Número 1: " + numero1)

let numero2 = parseInt(prompt("Escribe un número"));
document.write("<br>Número 2: " + numero2)

let numero3 = parseInt(prompt("Escribe un número"));
document.write("<br>Número 3: " + numero3)


if (numero1 > numero2) {
    document.write("<br>El número 1 es mayor")
} else if (numero2 > numero3) {
    document.write("<br>El número 2 es mayor")
} else if (numero1 > numero3) {
    document.write("<br>El Número 3 es mayor")
} else if (numero1 == numero2 && numero2 == numero3) {
    document.write("<br> Los números ingresados son iguales entre sí.")
}