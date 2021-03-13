/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe 
mostrar el arreglo generado, luego realizar las siguientes acciones:
-Mostrar la longitud del arreglo.
-Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
-Añade en última posición la ciudad de París.
-Escribe por pantalla el elemento que ocupa la segunda posición.
- Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/



let ciudades = [];
let bandera = true; //DECLARACION DE BANDERA 
let mensaje = "Desea ingresar otra ciudad?";
let i = 0;
do {
    //Solicito ciudades y agrego al final del arreglo con push
    ciudades.push(prompt("Ingresa el nombre de una ciudad. Ingrese 0 para salir."));

    //confirmacion: si se ingresa 0 o cancelar, para dejar de ejecutar
    if (ciudades[i] == "0" || !confirm(mensaje)) {
        bandera = false;
        if (ciudades[i] == "0") {
            ciudades.splice(i, 1);
        }
    }
    i++;
} while (bandera);

document.write(ciudades.join("<br>"));

//Mostrar la longitud del arreglo.
document.write("<hr> Cantidad de elementos: " + ciudades.length)

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última
let index = ciudades.length;
document.write("<hr>1° Posición:- " + ciudades[0]);
document.write("<br>3° Posición:- " + ciudades[2]);
document.write(`<br>Última posicion:- ${ciudades[index-1]}`);

//Añade en última posición la ciudad de París.
ciudades.push("Paris");
document.write(`<hr><br> ${ciudades.join(", ")}`);

//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write("<hr>2° Posición:- " + ciudades[1]);

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = "Barcelona";
document.write("<hr><br>" + ciudades.join(", "));