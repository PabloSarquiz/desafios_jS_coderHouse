class Auto {
    constructor(marca, modelo, año, color, combustible){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.combustible = combustible
        
    }

    enciende(combustible){
        if (this.combustible ==="SI"){
            alert("Estamos listos para salir")
        }else {
            alert("Hay que cargar combustible")
        }
    }
        
    }
    



let autoNuevo = prompt("Hola! tienes ganas de crear un auto virtual? SI | NO").toUpperCase();

if (autoNuevo === "SI"){

    alert("Excelente decision! Por favor ingrese a continuacion la informacion solicitada");
    crearAuto();
}else {
    alert("No hay problema, puedes regresar cuando quieras!")
};

let encender = prompt("Queres encender el auto? SI | NO").toUpperCase();

if (encender === "SI"){
    enciende();
}else {
    alert("Listo, nos quedamos")
}


function crearAuto(){
    new Auto (
    this.marca = prompt("Ingrese la marca del auto").toUpperCase(),
    this.modelo = prompt("ingrese el modelo del auto").toUpperCase(),
    this.año = prompt("Ingrese el año del auto").toUpperCase(),
    this.color = prompt("Ingrese el color del auto").toUpperCase(),
    this.combustible = prompt("El auto tiene combustible? SI | NO?").toUpperCase()
    )
    
}





















