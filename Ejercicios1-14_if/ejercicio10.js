let copias = prompt("Ingrese el número de copias que desea imprimir:");

copias = parseInt(copias);

let precioPorCopia;
let precioTotal;

if (copias >= 0 && copias <= 499) {
    precioPorCopia = 120;
} else if (copias >= 500 && copias <= 749) {
    precioPorCopia = 100;
} else if (copias >= 750 && copias <= 999) {
    precioPorCopia = 80;
} else if (copias >= 1000) {
    precioPorCopia = 50;
} else {
    alert("Número de copias no válido.");
}

if (precioPorCopia) {
    precioTotal = copias * precioPorCopia;

    alert("Precio por copia: $" + precioPorCopia + "\nPrecio total: $" + precioTotal);
}