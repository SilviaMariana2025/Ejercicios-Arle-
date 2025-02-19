let operador = prompt("Ingrese su operador (Claro, Tigo, Movistar):").toLowerCase();

let minutosInternacionales = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));

let cargoFijo;
let valorMinutoInternacional;
let valorPaqueteDatos;

if (operador === "tigo") {
    cargoFijo = 45000;
    valorMinutoInternacional = 200;
    valorPaqueteDatos = 12000;
} else if (operador === "claro") {
    cargoFijo = 30000;
    valorMinutoInternacional = 100;
    valorPaqueteDatos = 18000;
} else if (operador === "movistar") {
    cargoFijo = 40000;
    valorMinutoInternacional = 250;
    valorPaqueteDatos = 8000;
} else {
    alert("Operador no válido. Por favor, ingrese Claro, Tigo o Movistar.");
}

if (cargoFijo !== undefined) {
    let costoMinutosInternacionales = minutosInternacionales * valorMinutoInternacional;
    let costoTotal = cargoFijo + costoMinutosInternacionales;

    alert("El costo total de su servicio es: $" + costoTotal);
}