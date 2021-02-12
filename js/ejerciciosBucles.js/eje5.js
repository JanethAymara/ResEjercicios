//5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

let dni = 0;
let comparador = 0;
let asignaLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

do {
    dni = parseInt(prompt("Ingrese su número de DNI, le asignaremos una letra equivalente."));
    if (!isNaN(dni)) {
        if (dni > 0 && dni < 99999999) {
            comparador = dni % 23;
            alert("A su DNI le corresponde la letra: " + asignaLetras[comparador]);
        } else {
            alert("No es un valor válido");
        }
    } else {
        alert("No corresponde a un número");
    }
} while (confirm("Desea ingresar otro número?"));
document.write("Gracias por juegar conmigo :)");