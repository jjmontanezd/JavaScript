//funciones

// Funcion simple
//Declare

function saludar(nombre) {
console.log("Hola Mundo");
}

//Llamar la funcion
saludar ();


// FUNCION CON PARAMETROS

function saludopersonalizado(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

// Llamadas a la funcion

saludopersonalizado("JOHN", "sandobal");
saludopersonalizado("DIANA", "castillo");
saludopersonalizado("MIGUEL", "Bosee");
saludopersonalizado("JOHN", "Montañez");


// FUNCION CON PARAMETROS POR DEFECTO

function bienvenidaSENA(nombre, programa="ADSO"){
    console.log(`Hola Aprendiz ${nombre} del  programa de${programa}`)
}

bienvenidaSENA("john");
bienvenidaSENA("pepitpo", "mineria");

//FUNCIO CON PARAMETROS DESORDENADOS

// FUNCIÓN CON PARÁMETROS DESORDENADOS

function calcularEdad(nombre, anioNacimiento) {
    let edad = 2026 - anioNacimiento;
    console.log(`Hola ${nombre}, tu edad es ${edad} años`);
}

calcularEdad("John", 1999);
calcularEdad("Dayana", 2002);
calcularEdad("Juan", 2002);

//FUNCION CON RETORNO DE VALOR

function calcularPromedio(num1, num2, num3) {
    let resultado = (num1, num2, num3) / 3;
    return resultado;
}

let result = calcularPromedio(4,5,6);
console.log(`El resultado del promedio es: ${result}`);

function clasificar(promedio) {
   if (promedio >= 4.5) {
    return "Exelente";
   } 
   if (promedio >= 3.5) {
    return "bueno"
   }
}


// Calculadora

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

console.log(sumar(9, 7));
console.log(restar(2, 7));
console.log(multiplicar(4, 7));
console.log(dividir(8, 7));


function Calculadora(num1, num2, opcion) {
    switch (opcion) {
        case 1:
            return sumar(num1, num2);
        case 2:
            return restar(num1, num2);
        case 3:
            return multiplicar(num1, num2);
        case 4:
            return dividir(num1, num2);
        default:
            return "opcion no valida";
    }
    
}
 console.log(Calculadora(5,3,1)); //sumar
 console.log(Calculadora(8,3,1)); //restar
 console.log(Calculadora(5,7,1)); //multiplicar
 console.log(Calculadora(5,7,6)); //dividir
// FUNCION FLECHA


