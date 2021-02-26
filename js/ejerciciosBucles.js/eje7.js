/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el 
usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let num = 0;
do {
    num = parseInt(prompt("Ingrese un número menor a 50."));
    if (num > 50) {
        alert("El valor ingresado no es correcto");
    }
} while (num > 50);

for (let f = num; f > 0; f--) {
    for (let c = 0; c < f; c++) {
        document.write(f);
    }
    document.write("<br>");
}