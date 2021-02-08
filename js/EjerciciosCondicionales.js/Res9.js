/* document.write("Tu frase es: " + frase);
document.write("<br>Tiene " + frase.length + " caracteres, incluidos los espacios.")

for (let f = 0; f < frase.length; f++) {

 */


/*(let i = 0; i<frase.length; i++);
document.write("Tu frase tiene")*/

/*if ((frase.substr = (0, 1) == "a") || (frase.substr = (0, 1) == "e") || (frase.substr = (0, 1) == "i") ||
(frase.substr = (0, 1) == "o") || (frase.substr = (0, 1) == "u"));
document.write("Tiene " + frase.substr(f, 1) + " vocales.");*/


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
document.write("Tu frase tiene las siguientes vocales: " + guardavocales);
//document.write("<br>Tu frase tiene: " + guardavocales.length + " vocales");