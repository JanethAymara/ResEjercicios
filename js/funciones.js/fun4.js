/*4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1
al 10 del número elegido por el usuario.*/

let multip = parseInt(prompt("Ingrese un número para conocer su tabla de multiplicar"));

function Tabla() {
    document.write(`<h2>Tabla de multiplicar del ${multip}:<br>`);
    for (m = 1; m <= 10; m++) {
        let producto = multip * m;
        document.write(`<h3>${multip} x ${m} = ${producto}<br>`);
    }
    document.write(`<br>Gracias! Vuelva prontosss!`);
}

Tabla();