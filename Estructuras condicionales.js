// Estructuras condicionales 

// sintaxis - if

if (true) {
    //Bloque de codigo
}

// ejemplo if

let evidencia = 3.6;
if (evidencia >= 3.5) {//true
    console.log("El resultado de aprendizaje es APROBADO");
}else{
    console.log("El resultado no fue Aprobado");
}

// IF - ELSE IF

// clasificacion de edades
let edad = 26;

if (edad <= 13) {
    console.log("Eres un niño");
} else if (edad <= 18) {
    console.log("Eres un adolescente");
} else if (edad <= 60) {
    console.log("Eres un adulto");
} else {
    console.log("Eres un adulto mayor");
}


//IF ANIDADO 

//ejemplo de If anidado pension
let edadActual = 20;
let semanas_cotizadas = 1000;
let genero = "Masculino";

if (genero == "Femenino") {
    if (edadActual >= 45) {
        if (semanas_cotizadas >= 1250) {
            console.log("Felicidades, te pensionaste");
        } else {
            console.log("Lo siento, no tienes las semanas suficientes para pensionarte");
        }
    } else {
        console.log("Lo siento, no tienes la edad suficiente para pensionarte");
    }

} else if (genero == "Masculino") {
    if (edadActual >= 62) {
        if (semanas_cotizadas >= 1300) {
            console.log("Felicidades, te pensionaste");
        } else {
            console.log("Lo siento, no tienes las semanas suficientes para pensionarte");
        }
    } else {
        console.log("Lo siento, no tienes la edad suficiente para pensionarte");
    }

} else {
    console.log("Género no válido");
} 

// condiciones con operadore logicos 

// inicio de seccion  - login

let correo = "sena@gmail.com";
let contraseña = "12345";

if (correo == "sena@gmail.com" && contraseña == "12345") {
    console.log("Bienvenidos al sistema");    
}else{
    console.log("correo o contraseña incorrecta");
}

// condicional con operadores logicos or

// Proceso de certificacion sena

let etapa_lectiva = false;
let etapa_practica = false;

if (etapa_lectiva || etapa_practica) {
    console.log("Felicitaciones te Certificaste !! ")   
}else{
    console.log("Lo siento, no cimples con los requisitos de Certificacion")
}


// operador ternario

let nota = 2.6;
let resultado = (nota >=3.5)?"APROBO":"NO APROBO";
console.log(resultado);

// switch - dias de la semana

let dia = 1;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día no válido");
}

// reto: calcula con un menu manejado con un  switch obsion de ususrio y un operador matematico

let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));

let opcion = Number(prompt("Selecciona una operación: 1. Sumar, 2. Restar, 3. Multiplicar, 4. Dividir"));

switch (opcion) {
    case 1:
        console.log(`La suma de ${num1} + ${num2} es: ${num1 + num2}`);
        break;

    case 2:
        console.log(`La resta de ${num1} - ${num2} es: ${num1 - num2}`);
        break;

    case 3:
        console.log(`La multiplicación de ${num1} x ${num2} es: ${num1 * num2}`);
        break;

    case 4:
        if (num2 !== 0) {
            console.log(`La división de ${num1} / ${num2} es: ${num1 / num2}`);
        } else {
            console.log("Error: no se puede dividir entre cero");
        }
        break;

    default:
        console.log(`La opción ${opcion} no es válida`);
}


