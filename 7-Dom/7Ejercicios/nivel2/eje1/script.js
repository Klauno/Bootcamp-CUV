if ( 2 < 6 ) {
    alert("El primer número es menor que el segundo.")
}

if ( "blanco" === "negro" ) {
alert("esto no se ejecuta");
}

let sentencia = prompt("¿Cómo estás?").toLowerCase;
if (sentencia === "triste") {
alert("No estés triste, la inflación parece estar bajando.");
}

let numeroSecreto = 4;
let numeroUsuario = parseInt(prompt("¿Cual es el número secreto?"));
if (numeroSecreto =! numeroUsuario )
{
    alert("Número incorrecto.")
} else {
    alert("adivinaste!");
}

let contrasenaIngresada = prompt("Ingrese contraseña: ");
let contrasena = "max123";
if( contrasena == contrasenaIngresada)
{
    window.location = "http://www.google.com";
} else {
    alert("Contraseña errónea");
}
