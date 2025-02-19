let nombre = "Ana Lopez";
let horas =  8;
let salario;

if (horas <= 10){
    salario = horas * 30000;
}else{
    salario = horas * 33000;
}
console.log(`Señor/a ${nombre}, el numero de horas es ${horas} y su salario equivale a $${salario}`)