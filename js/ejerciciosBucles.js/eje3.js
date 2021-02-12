//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.


let bandas = [];
let bandera = true;
let mensaje = "Desea ingresar una más?";
let c = 0;

do {
    bandas.push(prompt("TOP Bandas favoritas"));
    if (!confirm(mensaje)) {
        bandera = false;
    }
    c++;
} while (bandera);

document.write(bandas.join(" - "));