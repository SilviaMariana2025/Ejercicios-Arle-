let numeroModelo = prompt("Ingrese el número de modelo de su automóvil:");

numeroModelo = parseInt(numeroModelo);

if (numeroModelo === 119 || 
    numeroModelo === 179 || 
    (numeroModelo >= 189 && numeroModelo <= 195) || 
    numeroModelo === 221 || 
    numeroModelo === 780) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("Su automóvil no está defectuoso.");
}