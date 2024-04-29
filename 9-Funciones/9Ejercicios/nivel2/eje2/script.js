function saludar (nombre)  {
    if  (nombre === undefined){
    return "hola anonimo";
  }else{
    return "HOLA" + nombre; "hola " + nombre;
}
}

// Ejemplo de uso:
console.log(saludar("Juan")); // Imprimirá "hola Juan"
console.log(saludar()); // Imprimirá "hola anónimo"