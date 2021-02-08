let ciudades = [];
let bandera = true; //DECLARACION DE BANDERA 
let mensaje = "Desea ingresar otra ciudad?";
let i = 0;
do {
    ciudades.push(prompt("Ingresa el nombre de una ciudad. Ingrese 0 para salir."));
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
document.write("<hr>" + ciudades.length)

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última
let index = ciudades.length;
document.write("<hr>1-" + ciudades[0]);
document.write("<br>3-" + ciudades[2]);
document.write(`<br>ultima posicion - ${ciudades[index-1]}`);

//Añade en última posición la ciudad de París.
ciudades.push("Paris");
document.write(`<br> ${ciudades.join(", ")}`);

//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write("<hr>2-" + ciudades[1]);

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = "Barcelona";
document.write("<hr>" + ciudades)