//Ex1
/*
function sfondo(color) {
    document.bgColor = color;
}
*/

//Ex2
/*
document.onkeydown=function(e){
    document.getElementById("lletra").innerHTML=e.key;
}

document.onkeyup=function(){
    document.getElementById("lletra").innerHTML=" "
}
*/

//Ex3
/*
let matriu = [];
document.onkeydown=function(e){
    for(var i = 0; i < 10;  i++){
        matriu[i] = document.getElementById("lletra").innerHTML=e.key;
    }
    for(var i = 0; i< 10; i++){
        document.write(matriu[i])
    }
}
*/

//Ex4

window.onload = function () {
    var contador = 0;
    document.getElementById("boton1").onclick = function () {
        contador++;
        document.getElementById("mostrar").innerHTML = contador
    }
}


//Ex5
/*
document.onkeydown=function(e){
    var b
    document.getElementById("lletra").innerHTML=e.keyCode;
    b+=e.keyCode
    if (b == 131){
        document.write("dsads")
    }
}
*/