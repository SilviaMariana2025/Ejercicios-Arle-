let opcion =prompt("Seleccione la opción de pago:\n1. 15 días\n2. 30 días\n3. 3 meses");
let costo;


if (opcion === "1") {
    costo = 18000;
} else if (opcion === "2") {
    costo = 35000;
} else if (opcion === "3") {
    costo = 86000;
} else {
    console.log("Opción no válida. Por favor, seleccione 1, 2 o 3.");
}

if (costo !== undefined) {
    console.log(`El costo de la mensualidad es: $${costo}`);
}