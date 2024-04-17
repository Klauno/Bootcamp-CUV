let edad = 55;
let edadMaxima = 80;
let snack = "papas";
let diario = 1;
let snakRestantes = (edadMaxima - edad) *365 * diario;
alert(`Necesitaras ${snakRestantes} paquetes de  ${snack} para que te alcancen hasta los ${edadMaxima} años`);

let precio = 1000
let gastoTotal = snakRestantes * precio;
alert(`Vas a gastar $${gastoTotal} en ${snack} hasta los ${edadMaxima} años`)