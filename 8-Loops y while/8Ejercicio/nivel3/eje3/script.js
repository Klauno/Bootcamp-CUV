for (let i = 1; i <= 5; i++) {
    let presentacion = "¡Bienvenido, " + i + "!";
  
    if (i > 1) {
      let numerosAnteriores = "";
      for (let j = 1; j < i; j++) {
        numerosAnteriores += j;
        if (j < i - 1) {
          numerosAnteriores += ", ";
        } else {
          numerosAnteriores += " ";
        }
      }
      presentacion += " Te presento a " + numerosAnteriores;
    }
  
    alert(presentacion);
  }
 