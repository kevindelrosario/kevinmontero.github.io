let menuVisible = false;

//funcion que muestra el menu:
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //Ocultar menu despues de haber seleccionado la opcion.
    document.getElementById("nav").classList ="";
    menuVisible = false;
}