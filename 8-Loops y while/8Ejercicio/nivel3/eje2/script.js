let contadorIntentos = 0;
let numeroAzar = Math.floor(Math.random() * 10) + 1;

while (true) {
  let intento = prompt("Ingresa un número entre 1 y 10:");
  let numeroUsuario = parseInt(intento);

  if (isNaN(numeroUsuario)) {
    alert("Por favor, ingresa un número válido.");
    continue;
  }

  contadorIntentos++;

  if (numeroUsuario === numeroAzar) {
    alert("¡Felicidades! Adivinaste el número " + numeroAzar + " en " + contadorIntentos + " intentos.");
    break;
  } else if (numeroUsuario < numeroAzar) {
    alert("El número es mayor.");
  } else {
    alert("El número es menor.");
  }
}