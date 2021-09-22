let usuario = prompt("Por Favor ingrese su nombre");
let edad = parseInt(prompt("Por favor ingrese su edad"));
let cumple = prompt("Ya cumplio años en 2021? SI | NO").toUpperCase();
let sexo = prompt("Con que genero usted mejor se identifica? M | F | NB").toUpperCase();
let nacimiento = (cumple == "SI") ?  2021 : 2020 ;

if (sexo == "M") {
    alert(`Bienvenido ${usuario}, usted tiene ${edad} años, de modo que usted nacio en ${nacimiento-edad} `);
} else if (sexo == "F") {
    alert(`Bienvenida ${usuario}, usted tiene ${edad} años, de modo que usted nacio en ${nacimiento-edad} `);
} else {
    alert(`Bienvenide ${usuario}, usted tiene ${edad} años, de modo que usted nacio en ${nacimiento-edad} `);
}






