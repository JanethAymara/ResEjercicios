/*8- Crea script para generar pirámide siguiente con los números del 1 al número que
indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/
let num = parseInt(prompt("Ingresa un número menor a 50."));

for (let f = 0; f < num; f++) {
    for (let c = 0; c <= f; c++) {
        document.write(c + 1);
    }
    document.write("<br>");
}