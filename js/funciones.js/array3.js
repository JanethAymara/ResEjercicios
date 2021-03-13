/*3- Escribir un script que simule el lanzamiento de dos dados.
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno 
de los lanzamientos de los dados.
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha 
suma, repitiendo 50 veces esta operación.
*/

let resultados = [];
let i = 0;
let coincidencias = [];

do {
    let dado2 = Math.floor((Math.random() * 6) + 1);
    let dado1 = Math.floor((Math.random() * 6) + 1);
    resultados.push(dado1 + dado2);
    i++;
} while (i <= 50);



let r = 0;
for (c = 2; c <= 12; c++) {
    for (i = 1; i <= resultados.length; i++) {
        if (c == resultados[i])
            r++;
    }
    if (r != 0) coincidencias.push(r);
    document.write(`Resultado: ${c} => ${r} <br>`);
    r = 0;
}