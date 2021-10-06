

const alturaCentimetros = () => parseInt(prompt("Ingrese su altura en centimetros"));
const alturaMetros = (num) => num / 100;
const alturaCuadrado = (alt) => alt * alt;
const peso = () => parseInt(prompt("Ingrese su peso en Kg"));
const pedirNombre = () => prompt("Ingrese su nombre");
const calcularIndice = (nom, kg, alt2) => alert(`${nom}, su IMC es de ${kg / alt2}`);


function imc(nombre){
    calcularIndice(pedirNombre(), peso(), alturaCuadrado(alturaMetros(alturaCentimetros())));
}

imc();

