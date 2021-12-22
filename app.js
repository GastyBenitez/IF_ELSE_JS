// Ejercicio 1
//const texto = prompt("Ingrese un texto");
//if(texto.includes("a") || texto.includes("A")){
    //alert("tu texto contiene la letra A");
//}else{
    //alert("Tu texto NO contiene la letra A");
//}






// Ejercicio 2
//const texto = prompt("Ingrese un texto");
//alert(texto.toLowerCase());
//alert(texto.toUpperCase());

//Ejercicio 3
//const texto = prompt("Ingrese un texto");
//alert("Tu texto comienza con la letra " " "texto[0]);

// Ejercicio 4
//const texto = prompt("Ingrese un texto");
//alert(texto.length);

//Ejercicio 5
//const numero = parseInt(prompt("Ingrese un número"));
//alert(numero.toString().length);


//Ejercicio 6
//const texto = prompt("Ingrese un texto");
//alert("Tu texto termina con " + " " + texto.slice(-1));


//Ejercicio 7
//const texto = prompt("Ingrese un oración");
//alert(texto.split(" ").join("*"));


//Ejercicio 8
//const letra = prompt("Ingrese una letra");
//const texto = prompt("Ingrese un texto");
//if(texto.includes(letra) || texto.includes(letra.toUpperCase()) || texto.includes(letra.toLowerCase()))
//{

    //alert("tu texto contiene la letra " + " " + letra);
//}else{
    //alert("Tu texto NO contiene la letra " + " " + letra);
//}
    

//Ejercicio 9
//const texto = prompt("Ingrese un texto");
//alert(texto.slice(1));


//Ejercicio 10
//const nombre = prompt("Ingrese un nombre");
//alert((nombre[0].toUpperCase()).concat(nombre.slice(1)));

//CONDICIONALES 

//Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error. 

//Ejercicio 1

////const medidaInicialMetros = parseFloat(prompt("Por favor ingrese una medida en METROS"));

// console.log(typeof(medidaInicialMetros))

////if (isNaN(medidaInicialMetros)) {
    // console.log(typeof(medidaInicialMetros))
   // alert('Por favor ingrese un numero no una letra');
    
////}else{
    
   // const medidaEnPies = medidaInicialMetros * 3.28;
    //const medidaEnCentimetros = medidaInicialMetros * 100;
   // const medidaEnPulgadas = medidaInicialMetros * 39.3701;

////    alert("la medida en pies es: " + medidaEnPies);
////    alert("la medida en pies es: " + medidaEnCentimetros);
////    alert("la medida en pies es: " + medidaEnPulgadas);
////}


////




// Ejercicio 2 
// Contexto: Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, 
// sino decir que es mayor.


// const edadIngresar = parseFloat(prompt("Por favor ingresa tu edad"));

// if (edadIngresar < 18){
//     alert("Sos menor de edad");
// } else {
//     alert("Sos mayor de edad");
// }


//Ejercicio 3//
//Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si 
//quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 
//con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. 
//En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

// Primero leer del propm los sabores

//const saboresHelado = prompt("Ingrese sus gustos");
//const cobertura = prompt("¿Desea agregar una cobertura de chocolate?");

//const cobertura = window.confirm("¿Desea agregar una cobertura de chocolate?");

//if (cobertura) {
    //alert("Su helado sabor " + saboresHelado + " " + "con cobertura de chocolate cuesta $180");
//}else {
//    alert("Su helado sabor " + saboresHelado + " " + "cuesta $150");
//}


// Ejercicio 4

//Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.


//const numeroUno = prompt('Ingrese un numero');
//const numeroDos = prompt('Ingresa otro numero');

//const suma = parseInt(numeroUno) + parseInt(numeroDos);
//console.log(suma);

//if (suma % 2 === 0 ) {
//    alert("El resultado de la suma es PAR");
//} else {
//    alert("El resultado de la suma es IMPAR");//
//}


// Ejercicio 5

//Solicitar al usuario un número e indicar si es positivo, negativo o cero.

//const numero = parseFloat(prompt("Ingrese un numero"));

//if (numero === 0) {
//    alert("El numero ingresado es 0");
//}else if(numero > 0){
//    alert("El numero ingresado es POSITIVO");
//}else  {
//    alert("El numero ingresado es NEGATIVO");//
//}

// Ejercicio 6

//Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.

const monto = parseFloat(prompt("Ingrese un monto"));


