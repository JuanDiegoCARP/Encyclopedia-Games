
/*funcion para mostrar el contenido del boton informacion y cierra el formulario en caso de que este abierto*/
function ver_info() {
     let contenido_info = document.getElementById("contenido_info")
    contenido_info.style.display = 'block';
    
    cerrar_form();  

    
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

/** funcion para borrar los mensajes de error */
function borrar_error(event){
    const inputActual=event.target
    const hermanoActual=inputActual.nextSibling

    if(hermanoActual.nodeName =='SPAN'){
        hermanoActual.remove();
    }
}

/*funcion para el boton enviar del formulario*/


const regExpNombre = /^[a-zA-Z ]{0,20}$/;
const regExpEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/


function comprobar(event) {
    event.preventDefault();
    const nombre=document.getElementById("nombre");
    const email=document.getElementById("email");
    const numero=document.getElementById("numero");
    let flagError=false;

    if(nombre.value == ""|| nombre.value.length>20||!regExpNombre.test(nombre.value)){
        console.log("error nombre")
        const spanError=document.createElement('span');
        spanError.innerHTML="Ingrese un nombre valido";
        nombre.insertAdjacentElement('afterend', spanError);

        flagError=true;
    }
    if(numero.value==""|| numero.value.length > 10 || numero.value.length< 6 || numero.value<0){
        console.log("error numero")
        const spanError=document.createElement('span');
        spanError.innerHTML="Ingrese un numero valido";
        numero.insertAdjacentElement('afterend', spanError);

        flagError=true;
    }
    if(email.value==""|| !regExpEmail.test(email.value)){
        console.log("error email")
        const spanError=document.createElement('span');
        spanError.innerHTML="Ingrese un email valido";
        email.insertAdjacentElement('afterend', spanError);

        flagError=true;
    }


   if(!flagError){
    const para = document.createElement("p")
    para.innerHTML="Gracias "+nombre.value+" por comunicarte con nosotros, en breve nos pondremos en contacto";
    document.getElementById("parrafos_form").appendChild(para);
    }


nombre.value=""
email.value=""
numero.value=""
   return false;
}




// Variables
    window.onload = function () {
        // Variables
        const IMAGENES = [
            'consolasjuegos.png',
            'PS5.jpg',
            'xbox.jpg'
            ];
        const TIEMPO = 2500;
        let posicionActual = 0;
        let $botonRetroceder = document.querySelector('#retroceder');
        let $botonAvanzar = document.querySelector('#avanzar');
        let $imagen = document.querySelector('#imagen');
        let $botonPlay = document.querySelector('#play');
        let $botonStop = document.querySelector('#stop');
        let intervalo;

        // Funciones
        renderizarImagen();

        /**
         * Funcion que cambia la foto en la siguiente posicion
         */
        function pasarFoto() {
            if(posicionActual >= IMAGENES.length - 1) {
                posicionActual = 0;
            } else {
                posicionActual++;
            }
            renderizarImagen();
        }

        /**
         * Funcion que cambia la foto en la anterior posicion
         */
        function retrocederFoto() {
            if(posicionActual <= 0) {
                posicionActual = IMAGENES.length - 1;
            } else {
                posicionActual--;
            }
            renderizarImagen();
        }

        /**
         * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
         */
        function renderizarImagen () {
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        }

        /**
         * Activa el autoplay de la imagen
         */
        function playIntervalo() {
            intervalo = setInterval(pasarFoto, TIEMPO);
            // Desactivamos los botones de control
            $botonPlay.setAttribute('disabled', true);
            $botonStop.removeAttribute('disabled');

        }

        /**
         * Para el autoplay de la imagen
         */

        // Eventos
        $botonAvanzar.addEventListener('click', pasarFoto);
        $botonRetroceder.addEventListener('click', retrocederFoto);
        // Iniciar
        playIntervalo();
        renderizarImagen();
    }



