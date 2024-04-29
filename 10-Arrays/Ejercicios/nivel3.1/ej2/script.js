function isUniform(arr) {
    // Si el arreglo está vacío, no hay elementos para comparar, entonces retornamos true
    if (arr.length === 0) {
        return true;
    }

    // Guardamos el primer elemento del arreglo para compararlo con los demás
    let firstElement = arr[0];

    // Iteramos sobre el arreglo desde el segundo elemento
    for (let i = 1; i < arr.length; i++) {
        // Si encontramos un elemento diferente al primero, retornamos false
        if (arr[i] !== firstElement) {
            return false;
        }
    }

    // Si todos los elementos son iguales, retornamos true
    return true;
}

// Pruebas de la función isUniform
console.log(isUniform([1, 1, 1, 1])); // true
console.log(isUniform([1, 2, 1, 1])); // false
console.log(isUniform(["a", "b", "p"])); // false
console.log(isUniform(["b", "b", "b"])); // true
