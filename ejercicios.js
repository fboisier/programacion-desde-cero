var arrMeses = ["ENERO", "FEBRERO","MARZO","ABRIL"];

var mes = 2; 
var nombreMes; 

if(mes == 1){
    nombreMes = "ENERO";
} else if (mes == 2){
    nombreMes = "FEBRERO";
} else if (mes == 3) {
    nombreMes = "MARZO";
} else if (mes == 11) {
    nombreMes = "NOVIEMBRE";
} else {
    nombreMes = "NO LO SE";
}


console.log(nombreMes);












// 1 se crea la variable a trabajar. 
// 2 la concicion que se debe cumplir
// 3 como se va a aumentar o disminuir la variable a trabajar
for(var num = 0; num <= 10 ; num++ )
{
    console.log(num);
    console.log(num * 10);
}












var arrMeses = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC","PANCHO"];   //LARGO 13.
        //        0      1     2    3    4      5      6    7     8     9     10    11     12

var anio = "2019";

for(var num = 0; num <= arrMeses.length - 1 ; num++ )  
{
    console.log(arrMeses[num], num+1, anio);
}



















var arrMeses = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC","PANCHO"];   //LARGO 13.
//        0      1     2    3    4      5      6    7     8     9     10    11     12

var anio = "2019";

var num = 0;
while(num <= arrMeses.length - 1){

    console.log(arrMeses[num], num+1, anio);

    num++ ;
}


















function imprimeMESES() {
        
    var arrMeses = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC","PANCHO"];   //LARGO 13.
    //        0      1     2    3    4      5      6    7     8     9     10    11     12

    var anio = "2019";

    for(var num = 0; num <= arrMeses.length - 1 ; num++ )  
    {
    console.log(arrMeses[num], num+1, anio);
    }

}

imprimeMESES();

console.log("MESES OTRA VEZ ");
console.log("JAJKANAJKA ");
console.log("KAJKAJAKAJ ");
console.log("IMPRIMIEDO UNA TABLA ");

imprimeMESES();


















imprimeMESES("2020",false,5);

console.log("MESES OTRA VEZ ");
console.log("JAJKANAJKA ");
console.log("KAJKAJAKAJ ");
console.log("IMPRIMIEDO UNA TABLA ");

imprimeMESES("2019", true,1);


dimelaFechayHoraActual();


var fechaactual = dimelaFechayHoraActual();

console.log(fechaactual);