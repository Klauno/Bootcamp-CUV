while (true) {
    let respuesta = prompt("¿Ya merito llegamos?");
  
    if (respuesta && (respuesta.toLowerCase() === "si")) {
      alert("¡Bienvenido a Muy Muy Lejano!");
      break;
    } else {
      alert("¿Ya merito llegamos?");
    }
  }