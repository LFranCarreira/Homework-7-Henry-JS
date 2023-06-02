'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array=[1];
  for(let i=2;i<=num;i++){
    if(num % i === 0){
      array.push(i);
      num/=i;
      i-=1;
    }
  }
  return array
}
console.log(factorear(180))//.toEqual([1,2,2,3,3,5]);

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap=true;
  while(swap){
    swap=false
    for(let j=0;j<array.length;j++){
      if(array[j]>array[j+1]){
        let currentValue=array[j];
        array[j]=array[j+1];
        array[j+1]=currentValue
        swap=true
      }
    }
  }
  return array
}
console.log(bubbleSort([5, 1, 4, 2, 8]))//.toEqual([1, 2, 4, 5, 8]);

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let currentValue=0;
  for(let i=1;i<array.length;i++){
    //Nuestro primer valor
    currentValue=array[i];
    let j=i-1
    while(array[j]>currentValue && j>=0){
      array[j+1]=array[j]
      j--;
    }
    array[j+1]=currentValue
  }
  return array
}

console.log(insertionSort([5, 1, 4, 2, 8]))//.toEqual([1, 2, 4, 5, 8]);

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0;i<array.length;i++){
    let minimo=i;
    for(let j=i+1;j<array.length;j++){
      if(array[j]<array[minimo]){minimo=j}
    }
    let currentValue=array[i];
    array[i]=array[minimo];
    array[minimo]=currentValue;
  }
  return array
}

console.log(selectionSort([5, 1, 4, 2, 8]))//.toEqual([1, 2, 4, 5, 8]);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
