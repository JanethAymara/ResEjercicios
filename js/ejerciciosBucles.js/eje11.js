/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del
mayor. *
*/

let guardanom = [];
let guardaedad = [];
let nombre = "";
let edad = 0;

for (let i = 0; i < 3; i++) {
    edad = parseInt(prompt("Ingresa edad"));
    nombre = prompt("Ingresa nombre");
    guardaedad.push(edad);
    guardanom.push(nombre);
}


for (let i = 0; i < guardaedad.length; i++) {
    document.write(`${guardaedad[i]} - ${guardanom[i]} <br>`)
}

let pin = Math.max(...guardaedad);
let go = guardaedad.indexOf(pin);

document.write(`La persona de mayor edad es ${guardanom[go]} con ${pin} años`);

//document.write(`${guardaedad[pin]} ${guardanom[pin]} es de mayor edad`);

//document.write(guardanye[Math.max(guardanye.length)]);
//document.write(guardanye.Mathmax + "es mayor");