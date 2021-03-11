/*16- Realiza un script que pida una cadena de texto y la devuelva al revés.
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

//let text = [];
let msj = prompt("Ingresa un mensaje")

for (i = msj.length - 1; i >= 0; i--) {
    document.write(`${msj[i]}`);
}