let edad = parseInt(prompt("Ingresa tu nota."));

switch (edad) {
    case 1:
    case 2:
        alert("Realmente estudiaste?");
        break;
    case 3:
    case 4:
        alert("Se sincero contigo mismo, estudia con más ganas!");
        break;
    case 5:
    case 6:
        alert("Pudo ser mejor.");
        break;
    case 7:
        alert("Bien! Pero es suficiente para ti?");
        break;
    case 8:
    case 9:
        alert("Bien hecho! Sigue así. Llegarás muy lejos!");
        break;
    case 10:
        alert("FELICIDADES, LO DISTE TODO!");
        break;
    default:
        alert("Eso no es una nota! QUE GRACIOSO JA JA JA -.-");
}