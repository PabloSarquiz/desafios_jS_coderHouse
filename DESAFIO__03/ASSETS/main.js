




do {
multiplicando = parseInt(prompt("Que numero te gustaria multiplicar?:"));
} while (multiplicando === Number) {

for (i = 1; i <= 10; i++) {

    alert(`${multiplicando}*${i} = ` + (multiplicando * i));
    console.log(`${multiplicando}*${i} = ` + (multiplicando * i));

}
}


let competidor=prompt("Ingrese su nombre")
let edad=parseInt(prompt("Ingrese su edad"));

while(competidor!=""){
       
    
    switch(true){
        case (edad>=16 && edad<=30):
            alert(competidor+" "+"tiene"+" "+edad+" "+"e ingreso a la categoria jovenes");
            break;
        case (edad>=31 && edad<=50):
            alert(competidor+" "+"tiene"+" "+edad+" "+"e ingreso a la categoria adultos");
            break;
        case (edad>=51 && edad<=65):
            alert(competidor+" "+"tiene"+" "+edad+" "+"e ingreso a la categoria mayores");
            break;
        default:
            alert(competidor+" "+" no puede ingresar a la carrera");
            break            
    }
    
    
    
}
