//  ESTO ES UN COMENTARIO

/*
ESTO ES 
UN COMENTARIO
EN MAS DE UNA LINEA ES DE DECIR DE UN BLOQUE COMPLETO
*/

var nombreVariable = 'ESTO ES UN TEXTO';    // ESTO ES UNA VARIABLE QUE TIENE TEXTO
var numeros = 123;                          // ESTO ES UNA VARIABLE QUE TIENE UN NUMERO
var sindefinir;                             // ESTO ES UNA VARIABLE QUE NO TIENE NADA. ES Undefined
var miBoleano = true; //o false.            // Esto es una variable boleana. es decir es solo verdadero o falso. 


console.log("TEXTO"); // herramienta que nos permite ver como va nuestro codigo. como evaluar variables o escribir en pantalla. 
console.log(123);
console.log(nombreVariable);


/////////////////////  INCREMENTA Y DECREMENTA NUMERO /////////////////
var num = 20;
num -= 10;  // decremento el num en 10. 
num += 5;    // incrementando el num en 5.
num--;       // disminuimos el valor en 1. 
num++;       // aumentamos el valor en 1. 

//TIP solo los numeros se suman o incrementan. si es texto se CONCATENA. 
var nombre = "MI NOMBRE ";
nombre += "MI APELLIDO";  // ESTOY CONCATENANDO TEXTO A LO QUE YA EXISTIA EN LA VARIABLE NOMBRE. 
// esto daria en un console.log(nombre);  //  MI NOMBRE MI APELLIDO

/////////////  USO DE ARREGLOS   ////////////

var arreglo = [];  // un arreglo vacio. 
var arreglo = ["TEXTO", 123, 8484, 39393, "TEXTO"];  // un arreglo con datos. 

arreglo.push("ESTO VA AL FINAL");  // AGREGA VALOR AL FINAL DE UN ARREGLO.
arreglo.pop();  // quitando el ultimo valor del arreglo. 

//Acceder/Actualizar en un arreglo.
var arr = [10, 50, 80]; // length = LARGO DEL ARREGLO. en este caso 3.
//         0  1  2  

var nueva = arr[1]; // accedo para dar el valor  50 en su indice 1 a otra variable llamada nueva. 
console.log(arr[1]); // accedo para mostrar el valor del arreglo arr en la posicion 1. 

arr[1] = 60; //  actualizamos el arreglo arr en la posicion 1 y le ASIGNAMOS un 60. 

var largo = arr.length; //length  es el largo de un arreglo.  guardamos en una variable largo el largo del arreglo arr.

arr[arr.length - 1] // ACCEDO AL ULTIMO VALOR DE UN ARREGLO
arr[0]              // ACCEDO AL PRIMER VALOR DE UN ARREGLO

//////////   CONDICIONES 

if (1 != 1) {
    // si la condicion de if es VERDADERO se ejecuta esta bloque completo del codigo. 
} else {
    // solo se ejecuta este bloque de codigo si la condicion del if es FALSA. 
}

if (1 != 1) {
    // si la condicion de if es VERDADERO se ejecuta esta bloque completo del codigo. 
} else if (2 == 2) {
    // solo se ejecuta este bloque de codigo si la condicion del primer if es falso y verdadero el segundo. 
} else {
    // solo se ejecuta si los 2 if anteriores eran FALSOS. 
}

/* OPERADORES LOGICOS
    ==	igual               // EJEMPLO   if( 1 == 1 ) // true.
    !=	diferente           // EJEMPLO   if( 1 != 2 ) // true.
    >	mayor que           // EJEMPLO   if( 2 > 5  ) // false. 
    <	menor que           // EJEMPLO   if( 5 < 10 ) // true.
    >=	mayor o igual que   // EJEMPLO   if( 10 >= 10 ) //  true.
    <=	menor o igual que   // EJEMPLO   if( 9 <= 20 ) //  true.
*/


//// LOOPS O CICLOS

// 1 se crea la variable a trabajar. 
// 2 la concicion que se debe cumplir
// 3 como se va a aumentar o disminuir la variable a trabajar
for (var num = 0; num <= 10; num++)   // creamos e iniciamos num en 0. y mientras sea menor o igual a 10. ejecutar bloque de codigo.
{
    console.log(num);
}

// COMO RECORRER UN ARREGLO CON UN FOR
var arr = [2, 4, 6, 8, 10];
//         0 1 2 3 4
for (var i = 0; i < arr.length; i = i + 1) {
    console.log(i);             // imprime el índice       
    console.log(arr[i]);        // imprime el elemento en ese índice
}


while (condicion) {
    // lo que queremos seguir haciendo mientras la condición sea verdadera
}
// llegamos a esta línea cuando la condición del loop while es falsa





/*************************  FUNCIONES  ****************************/



function nombreMiFuncion() {
    // código de la función
}
nombreMiFuncion();  // solo acá es cuando invocamos a la funcion y esta ejecuta su codigo dentro. 

function nombreFuncionCONParametros(parametro1, parametro2, parametro3){
    /// trabajo mi codigo con los datos que me entregan del programa donde se invoca la funcion. 
}
nombreFuncionCONParametros("parametro1", 123, [1,2,3]); // pasamos a la funcion nombreFuncionCONParametros los valores para los parametros.

function contador(numInicio) {
    for (var num = numInicio; num >= 0; num--) {
        console.log(num);
    }
}
contador(6);    // LA CONSOLA MOSTRARÁ: 6, 5, 4, 3, 2, 1, 0
contador(3);    // LA CONSOLA MOSTRARÁ: 3, 2, 1, 0


function miFuncionConRetorno(parametros){
    // mi codigo
    return algo;
}
