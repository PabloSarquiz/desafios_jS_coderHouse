
class Libro {
    constructor(autor, titulo, año, editorial, stock, precio) {
        this.autor = autor,
            this.titulo = titulo,
            this.año = año,
            this.editorial = editorial,
            this.stock = stock
        this.precio = precio
    }
}

let libroUno = new Libro("KING", "CARRIE", 1974, "DEBOLSILLO", 4, 899);
let libroDos = new Libro("KING", "SALEMNS LOT", 1976, "DEBOLSILLO", 9, 999);
let libroTres = new Libro("KING", "CUJO", 1988, "DEBOLSILLO", 8, 899);
let libroCuatro = new Libro("KING", "IT", 1986, "DEBOLSILLO", 10, 1199);
let libroCinco = new Libro("JK ROWLING", "HARRY POTTER Y LA PIEDRA FILOSOFAL", 1999, "SALAMANDRA", 5, 899);
let libroSeis = new Libro("JK ROWLING", "HARRY POTTER Y LA CAMARA SECRETA", 1974, "SALAMANDRA", 3, 999);
let libroSiete = new Libro("KING", "EL RESPLANDOR", 1984, "DEBOLSILLO", 0, 999);

let coleccion = [libroUno, libroDos, libroTres, libroCuatro, libroCinco, libroSeis, libroSiete];


console.table(coleccion);

let biblioteca = [];

biblioteca.push(libroUno, libroDos, libroTres, libroCuatro, libroCinco, libroSeis, libroSiete);

console.table(biblioteca);

let carrito = [];



function main() {
    let opcion = mostrarProductos();

    while (opcion != 0) {
        switch (opcion) {
            case 1:
                alert(`agregaste ${biblioteca[0].titulo} al carrito`)
                agregarLibro(biblioteca[0]);
                break

            case 2:
                alert(`agregaste ${biblioteca[1].titulo} al carrito`)
                agregarLibro(biblioteca[1]);
                break

            case 3:
                alert(`agregaste ${biblioteca[2].titulo} al carrito`)
                agregarLibro(biblioteca[2]);
                break

            case 4:
                alert(`agregaste ${biblioteca[3].titulo} al carrito`)
                agregarLibro(biblioteca[3]);
                break

            case 5:
                alert(`agregaste ${biblioteca[4].titulo} al carrito`)
                agregarLibro(biblioteca[4]);
                break

            case 6:
                alert(`agregaste ${biblioteca[5].titulo} al carrito`)
                agregarLibro(biblioteca[5]);
                break

            case 7:
                alert(`agregaste ${biblioteca[6].titulo} al carrito`)
                agregarLibro(biblioteca[6]);
                break

                default:
                    alert("Ingresaste una opcion invalida");
        };

        opcion = mostrarProductos();
    };
    console.log("Estos son los productos en su carrito4")
    console.log(carrito);
};

function agregarLibro(libro) {
    carrito.push(libro)
}

function mostrarProductos() {
    let opcion = parseInt(prompt("Seleccione el libro, presiones 0 para salir\n\n 1-Carrie \n\n 2 Salem's lot \n\n 3-Cujo\n\n 4-IT \n\n 5-Harry potter I\n\n 6-Harry Potter II\n\n 7-El resplandor"));
    return opcion;
};

function limpiarCarrito(){
   return carrito = [];
}


main();





