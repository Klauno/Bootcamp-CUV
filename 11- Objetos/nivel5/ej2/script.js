function contarCaracteres(palabra) {
  let contador = {}; 
 
  if (palabra.length === 0) {
    return contador; // Devolver un objeto vacío si la palabra está vacía
  }

  // Recorrer cada caracter de la palabra
  for (let i = 0; i < palabra.length; i++) {
    let caracter = palabra[i].toLowerCase(); // Convertir a minúsculas para evitar duplicados

    // Verificar si el caracter es una letra
    if (/[a-z]/.test(caracter)) {
      // Verificar si el caracter ya existe en el contador
      if (contador[caracter] === undefined) {
        contador[caracter] = 1; // Si no existe, inicializar el contador en 1
      } else {
        contador[caracter]++; // Si existe, incrementar el contador en 1
      }
    }
  }

  return contador; // Devolver el objeto con el recuento de caracteres
}


