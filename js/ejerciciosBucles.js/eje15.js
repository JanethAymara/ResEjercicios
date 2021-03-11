/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let msj = prompt("Ingresa una frase");
let guardavocales = [];
let guardaconsonantes = [];

for (i = 0; i < msj.length; i++) {
    switch (msj[i].toLowerCase()) {
        case "a":
            guardavocales += msj.substr(i, 1);
            break;
        case "e":
            guardavocales += msj.substr(i, 1);
            break;
        case "i":
            guardavocales += msj.substr(i, 1);
            break;
        case "o":
            guardavocales += msj.substr(i, 1);
            break;
        case "u":
            guardavocales += msj.substr(i, 1);
            break;
        default:
            guardaconsonantes += msj.substr(i, 1);
    }
}
document.write(`Tu frase tiene ${guardavocales.length} vocales en total`);