let  tipo_lavadora = 1;
let cantidad = 4;
let horas = 5;
let costoporhora;
let total;

if(tipo_lavadora === 1){
    costoporhora = 4000;
}else if(tipo_lavadora === 2){
    costoporhora = 3000;
}else{
    console.log(`Tipo de Lavadora invalido `);
}
    
total= cantidad * horas * costoporhora;
 if(cantidad > 3){
    total*= 0.97;
 }
console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipo_lavadora} por ${horas} horas: $${total}`)