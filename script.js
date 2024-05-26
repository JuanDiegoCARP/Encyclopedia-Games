
/*funcion para mostrar el contenido del boton informacion y cierra el formulario en caso de que este abierto*/
function ver_info() {
    let contenido_info = document.getElementById("contenido_info")
    contenido_info.style.display = 'block';

    let formulario = document.getElementById("formulario")
    formulario.style.display = 'none';
}

/*funcion para cerrar el contenido del boton informacion*/

function cerrar() {
    let contenido_info = document.getElementById("contenido_info")
    contenido_info.style.display = 'none';

}

/*funcion para mostrar el contenido del boton contacto*/

function ver_form() {
    let formulario = document.getElementById("formulario")
    formulario.style.display = 'block';
    cerrar();
}

function cerrar_form(){
    let formulario = document.getElementById("formulario")
    formulario.style.display = 'none';
}

/*funcion para el boton enviar del formulario*/

const regExpNombre = /^[a-zA-Z ]{0,20}$/;
const regExpEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/

function comprobar() {
    let flagError=flase;
    const nombre=document.getElementById("nombre");
    const email=document.getElementById("email");
    const numero=document.getElementById("numero");

    if(nombre.value == ""|| nombre.value.length>20||!regExpNombre.test(nombre.value)){
        console.log("error nombre");
        flagError=true;
    }
    if(numero.value==""| !numero.value.length > 10){
        console.log("error numero")
        flagError=true;

    }
    if(email.value==""|| !regExpEmail.test(email.value)){
        console.log("Error email")
        flagError=true;
    }

   if(flagError==false){
    console.log(nombre.value, numero.value, email.value)
   }
    return false;
}
