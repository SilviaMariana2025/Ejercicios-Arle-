let fisica = 0;
let quimica = 0;
let biologia = 0;
let matematicas = 4;
let informatica = 6;

let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
let porcentajeFinal = (sumaCalificaciones / 50) * 100;

let calificacionCualitativa = "";

if (porcentajeFinal >= 0 && porcentajeFinal <= 59.9) {
  calificacionCualitativa = "Mala";
} else if (porcentajeFinal >= 60 && porcentajeFinal <= 80) {
  calificacionCualitativa = "Buena";
} else if (porcentajeFinal > 80) {
  calificacionCualitativa = "Excelente";
}

console.log("Porcentaje final: " + porcentajeFinal.toFixed(2) + "%");
console.log("Calificación cualitativa: " + calificacionCualitativa);