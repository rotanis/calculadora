 var seleccionar_operacion = prompt ("Seleccione el tipo de operacion: A. para calcular el volen de un cilindro, B. para para convertir onzas a toneladas o C. para factorizar un numero");

 if  (seleccionar_operacion === "A"){
 	var radio = prompt ("cual es el radio del cilindro?"); 
 	var altura = prompt ("cual es la altura del cilindro?");
 	var resultado = Math.PI*radio*radio*altura;
 	alert ("el volumen de un cilindro es... " + Math.round(resultado));
 } else if (seleccionar_operacion === "B") {
 	var onzas_a_convertir = prompt ("cual es el numero de onzas a convertir? ");
 	var resultado_toneladas = onzas_a_convertir*1/35.275*1/1000;
 	alert ("el numero de toneladas es... " + resultado_toneladas.toFixed(5)); 
 } else if (seleccionar_operacion === "C") {
 	var numero_factorizar = prompt ("cual es el numero a factorizar?");
 	var acumulador= 1;
 	var contador= 2 
 	for (contador; contador<=numero_factorizar; contador++){
 		acumulador*=contador;
 		console.log ("la factorizacion del numero es... " + acumulador);
 	}

 } else {
 	alert ("es incorrecto");|
 }