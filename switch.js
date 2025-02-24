let opcion = 14
switch (opcion) {
    case 1:
        let nombre = "Ana López", horas = 15; 
        let salario = horas <= 10 ? horas * 30000 : horas * 33000;
        console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`); 
        break;
    case 2: 
            let numero = 7;
            console.log(numero % 2 === 0 ? "El número es par" : "El número es impar"); 
    break; 
    case 3:
        let tipoLavadora = 1, cantidad = 4, horas1 = 5;
        let costo = (tipoLavadora === 1 ? 4000 : 3000) * cantidad * horas1; if (cantidad > 3) costo *= 0.97; 
        console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas1} horas: $${costo}.`); 
    break; 
    case 4: 
        let numero1 = 10; 
        console.log(numero1 % 2 === 0 ? "El número es par" : "El número es impar"); 
    break; 
    case 5:
        let notas = [7, 8, 6, 9, 10]; 
        let porcentaje = (notas.reduce((a, b) => a + b, 0) / 50) * 100;
        let calificacion = porcentaje > 80 ? "Excelente" : porcentaje >= 60 ? "Buena" : "Mala"; 
        console.log(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);
    break; 
    case 6:  
        let nums = [12, 25, 18]; 
       console.log(`El número mayor es ${Math.max(...nums)}.`);
    break; 
    case 7: 
        let genero = "femenino", edad = 35;
        let ayuda = genero === "masculino" ? 40000 : edad > 50 ? 120000 : edad >= 30 ? 100000 : 0; 
        console.log(`El valor de ayuda mensual es: $${ayuda}.`); 
    break; 
    case 8: 
        let dias = 30; 
        let costo1 = dias === 15 ? 18000 : dias === 30 ? 35000 : 86000; 
        console.log(`El costo de la mensualidad es $${costo1}.`); 
    break;
    case 9: 
        let angulos = [60, 60, 60]; 
        console.log(angulos.reduce((a, b) => a + b) === 180 ? "Es un triángulo válido" : "No es un triángulo válido"); 
    break;
    case 10: 
        let copias = 800; 
        let precio = copias >= 1000 ? 50 : copias >= 750 ? 80 : copias >= 500 ? 100 : 120; 
        console.log(`Precio por copia: $${precio}, Total: $${copias * precio}`);
    break; 
    case 11: 
        let pitido = true, unidadGira = false; 
        let mensaje = pitido && unidadGira ? "Póngase en contacto con el técnico apoyo." : pitido && !unidadGira ? "Verificar contactos de la unidad." : !pitido && !unidadGira ? "Traiga la computadora para repararla en la central." : "Compruebe las conexiones de altavoces.";
         console.log(mensaje); 
    break; 
    case 12: 
        let modelo = 189; 
        let defectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780]; 
        console.log(defectuosos.includes(modelo) ? "El automóvil está defectuoso, llevar a garantía." : "Su automóvil no está defectuoso."); 
    break; 
    case 13:  
        let operador = "Tigo", minutos = 20;
        let tarifas = { Tigo: [45000, 200, 12000], Claro: [30000, 100, 18000], Movistar: [40000, 250, 8000] }; 
         let [cargoFijo, costoMinuto, paqueteDatos] = tarifas[operador]; 
        console.log(`Total a pagar: $${cargoFijo + (minutos * costoMinuto) + paqueteDatos}`);
    break; 
    case 14: 
        let tamaño = "grande", ingredientes = ["tocineta", "queso"]; 
        let costoBase = tamaño === "pequeño" ? 6000 : 12000; 
        let costoAdicional = ingredientes.reduce((acc, ing) => acc + (ing === "jalapeño" ? 0 : ing === "tocineta" || ing === "pavo" ? 3000 : 2500), 0); 
        console.log(`Total a pagar: $${costoBase + costoAdicional}`); 
        console.log("Opción no válida.")
    break;

    default:
        console.log("esta opcion no existe")
        break;
}