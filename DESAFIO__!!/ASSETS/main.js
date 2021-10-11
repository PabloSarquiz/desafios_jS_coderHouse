
let seleccionjugador = 0
let maquina = 0
let usuario = prompt("Bienvenido, ingrese su nombre");

// Juego
function jugar(nombre) {
        seleccionjugador = parseInt(prompt(`Bienvenido ${nombre}, que elijes? (0)Piedra (1)Papel (2)Tijera ?`));
    
    while (seleccionjugador !=0 && seleccionjugador != 1 && seleccionjugador != 2) {
        seleccionjugador = parseInt(prompt("Por favor elija un valor correcto! (0)Piedra (1)Papel (2)Tijera ?"));
       
    }

    maquina = eleccionMaquina()

    validar(seleccionjugador, maquina);

    let jugarNuevamente = prompt("Quieres volver a jugar SI | NO?").toLowerCase()
    if (jugarNuevamente == "si") {
        return jugar(nombre)
    } else {
        alert("Nos vemos la proxima!")
    }

}

// seleccion de la maquina

let eleccionMaquina = () => Math.floor(Math.random() * 3)

//validacion del juego
function validar(a, b) {
    if (a === b) {
        alert("Yo eleji lo mismo! Empatamos!");
    } else if (a === 0) {
        if (b === 1) {
            alert("Yo elijo PAPEL! Perdiste")
        } else {
            alert("Yo elijo TIJERA! Ganaste")
        }
    } else if (a === 1) {
        if (b === 0) {
            alert("Yo elijo PIEDRA! Ganaste")

        } else {
            alert("Yo elijo TIJERA! Perdiste")
        }
    } else if (a === 2) {
        if (b === 0) {
            alert("Yo elijo PIEDRA! perdiste")
        } else {
            alert("Yo elijo PAPEL! Ganaste")
        }
    }
}

jugar(usuario);

