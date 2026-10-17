
// APP SALARIO

function salario(salario, horasExtras) {
    return salario + (horasExtras * 9000);
}

function estimarsalario(salariototal) {
    if (salariototal >= 2000000) {
        return "Salario alto";
    } else {
        return "Menor a 2 millones";
    }
}

let salariototal = salario(1500000, 20);

console.log("Salario total: $" + salariototal);
console.log(estimarsalario(salariototal));
