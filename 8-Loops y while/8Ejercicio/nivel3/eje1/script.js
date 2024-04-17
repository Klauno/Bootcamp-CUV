while (true) {
    let opciones = ["Piedra", "Papel", "Tijera"];
    let opcionUsuario = prompt("Ingrese Piedra, Papel o Tijera:").toLowerCase();
    let opcionComputadora = opciones[Math.floor(Math.random() * 3)];
  
    alert("La computadora eligió: " + opcionComputadora);
  
    if (opcionUsuario === opcionComputadora) {
      alert("¡Empate!");
    } else if (
      (opcionUsuario === "piedra" && opcionComputadora === "Tijera") ||
      (opcionUsuario === "papel" && opcionComputadora === "Piedra") ||
      (opcionUsuario === "tijera" && opcionComputadora === "Papel")
    ) {
      alert("¡Ganaste!");
    } else {
      alert("¡La computadora gana!");
    }
  
    let jugarNuevamente = prompt("¿Te gustaría volver a jugar? (Si/No)").toLowerCase();
    if (jugarNuevamente !== "si") {
      break;
    }
  }
  
  alert("¡Gracias por jugar!");