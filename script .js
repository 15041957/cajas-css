/*
alert ("buenos dias"); 
alert(1+9+41);
alert("1+9+41 ");
//aleralert("1+9+41 ");
//comentario//
// crear variable//
let saludo = "buenas";
//rellenar variable//
let  buenas= "adios";
saludo = "k tal";
//alert //
alert( saludo);
let adios = "adios";
// igualar una variable a otra //
saludo ="adios";
alert (1+2);
// sumar 
alert (1-2);
//restar
alert (8+12/2);
//dividir
alert (8*2);
//mulriplicar
*/

let edad = 16;
edad = 17;
edad++; //sumar 1
edad--;// restar 1
console.log(edad);


//muestra lo que pongamos enla console

//alert muestra una ventana emergente 
let nombreUsuario = "Rosa";
//no se puede cambiar el valor de las constantes
const SALUDO_NOMBREUSUARIO = "hola " + nombreUsuario; //"adios Roxana"

let saludo_nombreUsuario
let texto = "mis cajas";
let texto1 = "fiesta";
let habitacion = "azul";

//operadores logicos
console.log(5 > 4); //mayor que
console.log(5 < 8);// menor que 
console.log(5 >= 6);//mayor o igual
console.log(5 <= 7);// menor o igual 
console.log(5 == 5);// igual que 
console.log(5 != 7);// no es igual 
console.log(texto1);
console.log(habitacion);
console.log(texto);

//condicionales "if" siempre
// recojo el elemento // que hago 

if (edad >= 18); {

}

//interactuar con htm DOM
//recojo el elemento // que hago 
document.getElementById("texto").innerHTML = ("hola");

document.getElementsByClassName("parrafo")
document.body.style.color = "red";

// funciones, van almacenar 
function saludar() {
    alert("bienbenido");
}
//llamada
function modoNoche() {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";

}

function modoDia() {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";

    //
}
//seleciono para  primer elemento 
// selectores 
document.body.querySelector("texto").innerHTML = "metiendo el codigo en p";
document.querySelector("p").innerHTML = ""
//selecciono  todos los elementos 
//document.queryselectoAll

function saludoUsuario() {
    let inputUsuario = document.querySelector("#nombre-usuario").value
    let generofemenino = document.getElementById("femenino")
    let generomasculino = document.getElementById("masculino")

    if (generofemenino.checked) {
        alert("Bienvenida "+ inputUsuario);
    } else if (generomasculino.checked) {
        alert("Bienvenido " + inputUsuario);
    }else{
        alert("como estas"+inputUsuario);
    }
}





    let texto2 = document.body.querySelector("texto");
    texto2.innerHTML = "guardado en mi variable";
// para guardar los archivos y tener que poner de nuevo la busqueda 

















