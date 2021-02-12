/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el numero ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/

let edad = parseInt(prompt("Ingresa tu nota."));

switch (edad) {
    case 1:
    case 2:
        alert("Realmente estudiaste?");
        break;
    case 3:
    case 4:
        alert("Se sincero contigo mismo, estudia con más ganas!");
        break;
    case 5:
    case 6:
        alert("Pudo ser mejor.");
        break;
    case 7:
        alert("Bien! Pero es suficiente para ti?");
        break;
    case 8:
    case 9:
        alert("Bien hecho! Sigue así. Llegarás muy lejos!");
        break;
    case 10:
        alert("FELICIDADES, LO DISTE TODO!");
        break;
    default:
        alert("Eso no es una nota! QUE GRACIOSO JA JA JA -.-");
}