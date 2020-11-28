
// esta funcion imprime los meses del año y recibe como parametro de entrada un AÑO
// con Numero imprime los numeros del mes si es VERDADERO true
function imprimeMESES(anio, conNumeros, saltar) {
        
    var arrMeses = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC","PANCHO"];   //LARGO 13.
    //               0      1     2    3    4      5      6    7     8     9     10    11     12

    for(var num = 0; num <= arrMeses.length - 1 ; num++ )  
    {

        if(num + 1 != saltar){



            if(conNumeros){
                console.log(arrMeses[num], num+1, anio);
            }
            else
            {
                console.log(arrMeses[num], anio);
            }



        }
        
    }

}



function diaActual()
{
    var f = new Date();
    
    console.log(f.getDate());
    
    return f.getDate();
}

function mesActual()
{
    var f = new Date();
    
    console.log(f.getMonth()+1);

    return f.getMonth()+1;
    
}

function anioActual()
{
    var f = new Date();
    
    console.log(f.getFullYear());

    return f.getFullYear();
    
}

function horaActual()
{
    var f = new Date();
    
    console.log(f.getHours() + ":" + f.getMinutes() + ":" +f.getSeconds());

    return f.getHours() + ":" + f.getMinutes() + ":" +f.getSeconds();
    
}



function dimelaFechayHoraActual(){
    
    var mes = mesActual();
    var dia = diaActual();
    var anio = anioActual();
    var hora = horaActual();

    console.log(dia, mes, anio, hora);

    return dia +"-" + mes + "-" + anio+ " " + hora;

}

