let genero = 'mujer';
let edad = 20; 

let ayuda;

if (genero.toLowerCase() === 'mujer') {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else if (genero.toLowerCase() === 'hombre') {
    ayuda = 40000; 
} else {
    console.log("Género no válido. Por favor, ingrese 'mujer' o 'hombre'.");
}


if (ayuda !== undefined) {
    console.log(`La ayuda económica es: $${ayuda}`);
}