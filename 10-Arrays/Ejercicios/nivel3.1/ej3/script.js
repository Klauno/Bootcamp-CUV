function biggest_smallest(arr) {
    // Inicializamos las variables para el número más grande y el más pequeño
    let biggest = arr[0];
    let smallest = arr[0];

    // Iteramos sobre el arreglo para encontrar el número más grande y el más pequeño
    arr.forEach(function(num) {
        if (num > biggest) {
            biggest = num;
        }
        if (num < smallest) {
            smallest = num;
        }
    });

    // Retornamos un arreglo con los números mínimo y máximo
    return [smallest, biggest];
}

// Prueba de la función biggest_smallest
console.log(biggest_smallest([111, 27, 31, 44, 101, 213, 33, 58])); // Salida: 27, 213
