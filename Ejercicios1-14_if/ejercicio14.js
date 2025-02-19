let tamaño = prompt("ingrese el tamaño del sandwich ( pequeño/grande):").toLocaleLowerCase();
let costoSandwich;

if(tamaño == "pequeño"){
    costoSandwich = 6000;
}else if (tamaño == "grande"){
    costoSandwich = 12000;
} else {
    alert("Tamaño no valido. Por favor ingrese 'pequeño' o 'grande'.");
}

let costoAdicional = 0 ;
let ingredientes = prompt("ingrese los ingredientes adcionales(tocineta, jalapeño, pavo, queso) separados por comas:").toLocaleLowerCase().split(",");

if (ingrediente === "tocineta") {
    costoAdicional += 3000;
} else if (ingrediente === "pavo") {
    costoAdicional += 3000;
} else if (ingrediente === "queso") {
    costoAdicional += 2500;
} else if (ingrediente === "jalapeño") {

} else {
    alert("Ingrediente no válido: " + ingrediente);
}
// calculando el costo total del pedido:
if (costoSandwich !== undefined) {
    var costoTotal = costoSandwich + costoAdicional;

    alert("El costo total de su pedido es: $" + costoTotal);
}