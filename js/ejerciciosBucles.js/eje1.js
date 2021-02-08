let edad = parseInt(prompt("Hola! Cuál es tu edad?"))
document.write("Tu edad es: " + edad);

if (edad >= 18) {
    document.write("<br>Felicidades! Ya tienes edad para conducir.");
} else {
    document.write("<br>Ouch! Aun no puedes conducir, pero puedes ser un gran copiloto!");
}








/*switch (edad) {
    case (edad >= 18):
        document.write("Felicidades! Tienes la edad suficiente para conducir:)<br>");
        break;
    case (edad <= 18):
        document.write("Lo siento! Aún no tienes edad para conducir. Pero puedes ser un gran copiloto!");
        break;
}*/