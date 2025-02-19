let emitePitido = prompt("¿La computadora emite un pitido al iniciarse? (sí/no)").toLowerCase();

let discoDuroGira = prompt("¿El disco duro gira? (sí/no)").toLowerCase();

if (emitePitido === "sí") {
    if (discoDuroGira === "sí") {
        alert("La computadora está averiada.");
    } else {
        alert("Verificar contactos de la unidad.");
    }
} else {
    if (discoDuroGira === "sí") {
        alert("Compruebe las conexiones de altavoces.");
    } else {
        alert("Traiga la computadora para repararla en la central.");
    }
}