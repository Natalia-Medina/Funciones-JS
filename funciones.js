// Funcion par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par.");
    } else {
      console.log(numero + " es un número impar.");
    }
  }

  esParOImpar(3);

//Funcion para comparar numeros
  function compararNumeros(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " es mayor que " + num2 + ".");
    } else if (num1 < num2) {
      console.log(num2 + " es mayor que " + num1 + ".");
    } else {
      console.log("Los números son iguales.");
    }
  }
  
  compararNumeros(5, 9);


  //Funcion multiplo de 5
  function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
      console.log(numero + " es múltiplo de 5.");
    } else {
      console.log(numero + " no es múltiplo de 5.");
    }
  }
  
  esMultiploDeCinco(20);
  
//Función números desde 0 hasta un número dado
  function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }
  
  imprimirNumerosHasta(6);

  //Función para imprimir una palabra un número determinado de veces
  function imprimirPalabraNVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }
  
  imprimirPalabraNVeces("Chinche", 3);

  //Función para imprimir todos los valores de un array
  function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  const miArray = [1, 2, 3, 4, 5, 6];
  imprimirArray(miArray);


  
  //Función para imprimir todos los valores de un array excepto el de la posición 5
  function imprimirArrayExceptoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }
  
  const suArray = [1, 2, 3, 4, 5, 6, 7, 8];
  imprimirArrayExceptoQuinto(suArray);


  //Función para multiplicar cada número de un array por un número dado
  function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * numero);
    }
  }
  
  // Ejemplo de uso:
  const tuArray = [1, 2, 3, 4, 5];
  multiplicarArrayPorNumero(tuArray, 5);
  