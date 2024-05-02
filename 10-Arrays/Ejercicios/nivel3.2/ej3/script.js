let palabras = ['Et', 'Voluptua', 'Sed', 'At', 'Diam', 'Lorem'];
const palabrasCortas = palabras.filter(palabra => palabra.length <= 3);

alert(palabrasCortas); // [ 'Et', 'Sed', 'At' ]
