function fibonacci(posicion) {
    let num1 = 0;
    let num2 = 1;
    let resultado = 0;

    if (posicion === 0) {
        return num1;
    } else if (posicion === 1) {
        return num2;
    }

    for (let i = 2; i <= posicion; i++) {
        resultado = num1 + num2;
        num1 = num2;
        num2 = resultado;
    }

    return resultado;
}

// Pruebas de la función fibonacci
console.log("Fibonacci (2):", fibonacci(2)); // 1
console.log("Fibonacci (5):", fibonacci(5)); // 3
console.log("Fibonacci (8):", fibonacci(8)); // 21
