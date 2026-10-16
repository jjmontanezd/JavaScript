let nota = Number(prompt("Ingresa la nota del aprendiz (0 a 5):"));

if (nota >= 0 && nota <= 5) {
    if (nota >= 4.5) {
        console.log(`Nota: ${nota}. Clasificación: Excelente`);
    } else if (nota >= 3.5) {
        console.log(`Nota: ${nota}. Clasificación: Bueno`);
    } else if (nota >= 3.0) {
        console.log(`Nota: ${nota}. Clasificación: Aceptable`);
    } else {
        console.log(`Nota: ${nota}. Debe reforzar`);
    }
} else {
    console.log("Nota no válida");
}

// Menú del aprendiz

let opcion = Number(prompt("Selecciona una opción: 1. Ver horario, 2. Consultar notas, 3. Salir"));

switch (opcion) {
    case 1:
        console.log("Tu horario de clases es de lunes a viernes.");
        break;

    case 2:
        console.log(`Tu nota ingresada es: ${nota}`);
        break;

    case 3:
        console.log("Has salido del programa.");
        break;

    default:
        console.log("Opción no válida");
}