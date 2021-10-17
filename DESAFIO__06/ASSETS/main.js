

let coleccion = [];


alert("Bienvenido! hoy vamos a crear un registro Virtual de todos sus Libros");
alert("A continuacion, ingrese la informacion solicitada");


class Libro {
    constructor(autor, titulo, idioma, año, editorial, formato, paginas, nota) {
        this.autor = autor;
        this.titulo = titulo;
        this.idioma = idioma;
        this.año = año;
        this.editorial = editorial
        this.formato = formato
        this.paginas = paginas;
        this.nota = nota;
    }

    getAño() {
        return this.año
    }

    getTitulo() {
        return this.titulo
    }



}


function crearLibro() {
    coleccion.push(new Libro(
        prompt("Ingrese el nombre del autor").toUpperCase(),
        prompt("Ingrese el titulo del libro").toUpperCase(),
        prompt("Ingrese el idioma del libro").toUpperCase(),
        parseInt(prompt("Ingrese el año de publicacion del Libro")),
        prompt("Ingrese la editorial del libro").toUpperCase(),
        prompt("Es tapa dura o tapa blanda?").toUpperCase(),
        parseInt(prompt("Cuantas paginas tiene el libro?")),
        parseFloat(prompt("Que puntuacion del 1 al 10 le pondria?")),

    ))

    localStorage.setItem("Libro", JSON.stringify(Libro));

    return deseaContinuar(coleccion)


}


function deseaContinuar() {
    let continuar = prompt("Desea ingresar otro Libro? SI | NO ").toUpperCase()

    if (continuar == "SI") {
        return crearLibro()
    } else {
        alert("Muchas gracias por utilizar nuestro servicio, aprete F12 para ver sus resultados");
    }

}


crearLibro();
const porAño = [...coleccion].sort((a, b) => a.año - b.año);
const porNotaMayorMenor = [...coleccion].sort((a, b) => b.nota - a.nota);

console.log("Usted ingreso los libros en este orden")
console.table(coleccion);
console.log("Aqui estan ordenados por año de publicacion");
console.table(porAño);
console.log("Aqui estan ordenados por nota");
console.table(porNotaMayorMenor);





































