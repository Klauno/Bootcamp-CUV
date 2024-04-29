
// Crear el número secreto
let numeroSecreto = 42;
    
// Pedir al usuario que adivine el número secreto
let  numeroUsuario = parseInt(prompt("Adivina el número secreto:"));
    
// Convertir el input a un número
numeroUsuario= Number(numeroUsuario);
    
// Comparar el número ingresado con el número secreto
if ( numeroUsuario === numeroSecreto) {
    alert("¡Felicidades! ¡Adivinaste el número secreto!");
} else if ( numeroUsuario < numeroSecreto) {
    alert("El número secreto es mayor.");
} else {
     alert("El número secreto es menor.");
}
        