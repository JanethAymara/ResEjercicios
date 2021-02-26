/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

let f = parseInt(prompt("Por favor, ingrese un número para filas"));
let c = parseInt(prompt("Ahora, ingrese un número para columnas"));
matriz = [];


//CREANDO LA MATRIZ
for (i = 0; i < f; i++) {
    matriz[i] = new Array(c); //ARREGLO DE ARREGLO PARA DEFINIR CELDAS 
    for (j = 0; j < c; j++) {
        matriz[i][j] = matriz.push(j) - 1; //GUARDANDO ELEMENTOS y DIRECCION DEL RECORRIDO DEFINIDO POR J
    }
}

//PRESENTACION DE MATRIZ
//Bucle a la inversa para recorrer la matriz
for (i = f - 1; i >= 0; i--) {
    for (j = c - 1; j >= 0; j--) {
        document.write(matriz[i][j] + "");
    }
    document.write("<br>");
}