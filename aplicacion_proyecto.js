
// APP SALARIO

const VALOR_HORA_EXTRA = 9000;
const LIMITE_SALARIO_ALTO = 2000000;

function calcularSalario(salarioBase, horasExtras) {
    return salarioBase + horasExtras * VALOR_HORA_EXTRA;
}

function estimarSalario(salarioTotal) {
    if (salarioTotal >= LIMITE_SALARIO_ALTO) {
        return "Salario alto";
    } else {
        return "Menor a 2 millones";
    }
}

// Pedimos los datos al usuario
const salarioBase = Number(prompt("Escribe el salario base:"));
const horasExtras = Number(prompt("Escribe las horas extras:"));

const salarioTotal = calcularSalario(salarioBase, horasExtras);

console.log("Salario total: $" + salarioTotal);
console.log(estimarSalario(salarioTotal));
