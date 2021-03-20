/*2- Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function Revision(cadena) {
    //cadena = prompt("Ingrese una frase al azar.")
    if (cadena == cadena.toLowerCase()) {
        document.write(`La frase "${cadena}" está formada solo por minúsculas<br>`);
    }
    if (cadena == cadena.toUpperCase()) {
        document.write(`La frase "${cadena}" está formada solo por mayúsculas<br>`);
    } else {
        document.write(`La frase "${cadena}" está formada por una mezcla de mayúsculas y minúsculas<br>`);
    }
}

Revision("el perrito es tiernito");
Revision("JAKIE GROSA");
Revision("Lu CAPO, IDOLO, MASTER, CRACK!")