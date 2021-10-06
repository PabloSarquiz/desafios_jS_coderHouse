

let edades = [];
let edad = 0;
let suma = 0;
let promedio = 0;

function pedirEdades() {
    for (i = 0; i < 5; i++) {
        edad = parseInt(prompt(`Por favor ingrese edad de persona numero ${i + 1}`))
        edades.push(edad);
    }
}

function sumarEdades() {
    for(i=0; i<edades.length;i++){
    suma += edades[i]; 
    }
}

function calcularPromedio(){
    promedio = suma / edades.length
    alert(`El promedio total de las edades es ${promedio}`)
}


pedirEdades();
sumarEdades();
calcularPromedio();

console.log(edades);
console.log(suma);
console.log(promedio);


















