let coleccion = [];

alert("Bienvenido! hoy vamos a crear un registro Virtual de todos sus Libros");
alert("A continuacion, ingrese la informacion solicitada");


class libro {
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
}


function crearLibro() {
    coleccion.push(new libro(
        prompt("Ingrese el nombre del autor").toUpperCase(),
        prompt("Ingrese el titulo del libro").toUpperCase(),
        prompt("Ingrese el idioma del libro").toUpperCase(),
        parseInt(prompt("Ingrese el año de publicacion del Libro")),
        prompt("Ingrese la editoril del libro").toUpperCase(),
        prompt("Es tapa dura o tapa blanda?").toUpperCase(),
        parseInt(prompt("Cuantas paginas tiene el libro?")),
        parseFloat(prompt("Que puntuacion del 1 al 10 le pondria?"))

    ))

    return deseaContinuar()

    
}


function deseaContinuar(){
    let continuar = prompt("Desea ingresar otro Libro? SI | NO ").toUpperCase()

    if(continuar == "SI"){
        return crearLibro()
    }else {
        console.table(coleccion);
        alert("Muchas gracias por utilizar nuestro servicio, aprete F12 para ver sus resultados");
    }

}


crearLibro();





















