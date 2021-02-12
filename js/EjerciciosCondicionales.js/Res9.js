/* 9.- Escribe un programa que pida una frase y escriba las vocales que
aparecen*/


let frase = prompt("Ingresa una frase.");
let guardavocales = []
for (let i = 0; i < frase.length; i++) { //contador
    if (frase[i].toLowerCase() == "a") {
        guardavocales += frase.substr(i, 1);
    } else if (frase[i].toLowerCase() == "e") {
        guardavocales += frase.substr(i, 1);
    } else if (frase[i].toLowerCase() == "i") {
        guardavocales += frase.substr(i, 1);
    } else if (frase[i].toLowerCase() == "o") {
        guardavocales += frase.substr(i, 1);
    } else if (frase[i].toLowerCase() == "u") {
        guardavocales += frase.substr(i, 1);
    } else if (frase[i].toLowerCase() == " ") {
        guardavocales += frase.substr(i, 1);
    }
}
document.write(`Tu frase es: "${frase}" <br>Y tiene las siguientes vocales: "${guardavocales}`);
//document.write("<br>Tu frase tiene: " + guardavocales.length + " vocales");