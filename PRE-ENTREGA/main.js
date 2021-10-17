
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


let biblioteca = [];

biblioteca.push(libroUno, libroDos, libroTres, libroCuatro, libroCinco, libroSeis, libroSiete);

let carrito = [];



function main() {
    alert("Bienvenido a nuestra tienda virtual! A continuacion sellecione el numero del libro que desea comprar")
    let opcion = mostrarProductos();

    while (opcion != 0) {
        switch (opcion) {
            case 1:
                if (biblioteca[0].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[0].titulo} al carrito`);
                    biblioteca[0].stock--
                    agregarLibro(biblioteca[0]);

                }
                break

            case 2:
                if (biblioteca[1].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[1].titulo} al carrito`);
                    biblioteca[1].stock--
                    agregarLibro(biblioteca[1]);

                }
                break

            case 3:
                if (biblioteca[2].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[2].titulo} al carrito`);
                    biblioteca[2].stock--
                    agregarLibro(biblioteca[2]);

                }
                break
            case 4:
                if (biblioteca[3].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[3].titulo} al carrito`);
                    biblioteca[3].stock--
                    agregarLibro(biblioteca[3]);

                }
                break

            case 5:
                if (biblioteca[4].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[4].titulo} al carrito`);
                    biblioteca[4].stock--
                    agregarLibro(biblioteca[4]);

                }
                break

            case 6:
                if (biblioteca[5].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[5].titulo} al carrito`);
                    biblioteca[5].stock--
                    agregarLibro(biblioteca[5]);

                }
                break
            case 7:
                if (biblioteca[6].stock <= 0) {
                    alert("Lo sentimos, ya no hay stock")
                    mostrarProductos();
                } else {
                    alert(`agregaste ${biblioteca[6].titulo} al carrito`);
                    biblioteca[6].stock--
                    agregarLibro(biblioteca[6]);

                }
                break

            default:
                alert("Ingresaste una opcion invalida");
        };

        opcion = mostrarProductos();
    };

    alert("Muchas gracias por su interes en nuestros libros, a continuacion aprete f12 para ver sus productos seleccionados")
    console.log("Estos son los productos en su carrito!")
    console.log(carrito);
};

function agregarLibro(libro) {
    carrito.push(libro)
}

function mostrarProductos() {
    let opcion = parseInt(prompt("Seleccione el libro, presiones 0 para salir\n\n 1-Carrie \n\n 2 Salem's lot \n\n 3-Cujo\n\n 4-IT \n\n 5-Harry potter I\n\n 6-Harry Potter II\n\n 7-El resplandor"));
    return opcion;
};

function limpiarCarrito() {
    return carrito = [];
}


main();







