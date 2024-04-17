let numero = parseInt(prompt("Ingresa un número positivo:"));
let producto = 1;
let contador = 1;
while (contador <= numero) {
    producto *= contador;
    contador++;
  }
  alert(`El producto acumulado de los enteros positivos entre 1 y ${numero} es: ${producto}`);
