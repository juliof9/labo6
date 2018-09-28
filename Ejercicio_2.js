
function sum(arr) {
    total = 0;
    if(arr.length > 0) {
        arr.forEach(number => {
            total += number;
        });
        console.log("La suma de los numeros del arreglo es: " + total);
        console.log("El promedio de los numeros del arreglo es: " + total/arr.length);
        return;
    }
    console.log("El arreglo ingresado esta vacio.");
}