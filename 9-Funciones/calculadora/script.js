
  
function calcular() { 

   let operacion = prompt("Ingrese la operación (+, -, *, /):");
   let num1 = parseFloat(prompt("Ingrese el primer número:"));
   let num2 = parseFloat(prompt("Ingrese el segundo número:"));
   let resultado;


    if (operacion == "+") {
        resultado = num1 + num2;
    } else if (operacion == "-") {
        resultado = num1 - num2;
    } else if (operacion == "*") {
        resultado = num1 * num2;
    } else if (operacion == "/") {
        if (num2 !== 0) {
             alert("Error: No se puede dividir por cero.");  
        } else {resultado = num1 / num2; }}
        
alert(`Resultado: ${resultado}`);
    }


calcular()