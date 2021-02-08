let frase = prompt("Ingresa una frase.");
let guardavocales = []
let guardaconsonantes = []

for (let i = 0; i < frase.length; i++) {
    switch (frase[i].toLowerCase()) {
        case "a":
            guardavocales += frase.substr(i, 1);
            break;
        case "e":
            guardavocales += frase.substr(i, 1);
            break;
        case "i":
            guardavocales += frase.substr(i, 1);
            break;
        case "o":
            guardavocales += frase.substr(i, 1);
            break;
        case "u":
            guardavocales += frase.substr(i, 1);
            break;
        default:
            guardaconsonantes += frase.substr(i, 1);
            break;
    }
}

document.write("Tu frase tiene " + guardavocales.length + "." + "<br>Tiene " + guardaconsonantes.length + "consonantes")