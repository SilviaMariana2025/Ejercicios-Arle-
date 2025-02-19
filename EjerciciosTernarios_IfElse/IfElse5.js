// 5 EJEMPLO
  let prendidoavion = true;
  let gasolina = 120;
  if (prendidoavion){
     console .log(`Avion prendido`);
    if(gasolina== 0){
         console.log(`No se ha terminado el tanqueo del avion`);
  }else if (gasolina > 1 && gasolina <= 100){
     console.log(`Avion con gasolina`)
  }else{
     console.log(`NO puede viajar con el Avion en exceso de gasolina`);
  }
 }else{
    console.log(`Haga el favor de Prender el Avion `);
 }