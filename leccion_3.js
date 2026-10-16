let nota1 = Number(prompt("Ingresa la primera nota:"));
let nota2 = Number(prompt("Ingresa la segunda nota:"));
let nota3 = Number(prompt("Ingresa la tercera nota:"));

let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);

let aprobo = promedio >= 3.0;

let faltan = aprobo ? 0 : (3.0 - Number(promedio)).toFixed(1);

console.log(`El aprendiz obtuvo un promedio de ${promedio}. ¿Aprobó? ${aprobo}`);
console.log(`Puntos que le faltan para llegar a 3.0: ${faltan}`);