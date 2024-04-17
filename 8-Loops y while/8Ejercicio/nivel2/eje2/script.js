let contadorPositivos = 0;

while (true) {
  let numero = parseInt(prompt("Ingrese un número entero:"));

  if (numero < 0) {
    break;
  }

  if (numero > 0) {
    contadorPositivos++;
  }
}

alert("La cantidad de números positivos ingresados es: " + contadorPositivos);