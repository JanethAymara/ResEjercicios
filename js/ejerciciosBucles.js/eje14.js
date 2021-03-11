/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – 
entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”,
deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/


let guardamsj = [],
    msj = prompt("Escribe un mensaje, lo robotizaremos xd");

for (let i = 0; i < msj.length; i++) {
    guardamsj = msj;
    document.write(`${guardamsj[i]} - `);
    /*if (i == " ") {
        document.write(`!`);
    } else {
    }*/
}

/*switch (guardamsj.length) {
    case " ":
        Text = "-";
        break;
    case ".":
        Text = "!";
        break;
    default:
        Text: "<3";
}*/