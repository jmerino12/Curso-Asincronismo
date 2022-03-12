/**
 * Una función callback es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior.
 *
 * Una función que acepta otras funciones como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para determinar cuándo se ejecuta la función callback
 */
function sum(num1, num2) {
  return num1 + num2;
}

//Calc es una funcion de Orden Superios
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 4, sum));

function date(callback) {
  console.log(`Funcion date ${new Date()}`);
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 0);
}
function printDate(dateNow) {
  console.log(`Funcion printDate ${dateNow}`);
}

date(printDate);
