//Script para subir
window.addEventListener("scroll",Subida);
function Subida(){
    let subir=document.getElementById("subir");
    posy=window.pageYOffset;
    if(posy>300){
    subir.style.display="block";
    }
    else{
    subir.style.display="none"
    }
}

//Script para subir botón whatsapp
window.addEventListener("scroll",subirWhatsapp);
function subirWhatsapp(){
    let whatsapp=document.getElementById("whatsapp");
    posy=window.pageYOffset;
    if(posy>300){
    whatsapp.style.display="block";
    }
    else{
    whatsapp.style.display="none"
    }
}

// Para modal en Github Pages 
// Script para ventana modal 

// Obtener valores pornsu id
var modal = document.getElementById("success-modal");
var btn = document.getElementById("submit-btn");
var span = document.getElementsByClassName("close")[0];

function showModal() {
  // Mostrar la ventana modal
  modal.style.display = "block";
  // Limpiar el formulario después de 3 segundos
  setTimeout(clearForm, 3000);
}

// función para ocultar la ventana modal
function hideModal() {
  modal.style.display = "none";
}

// Función de mostrar la ventana modal 
btn.onclick = function() {
  showModal();
}

// Funciones para ocultar ventana modal
// Evento click boton cerrar
span.onclick = function() {
  hideModal();
}
// Evento click fuera de la ventana modal
  window.onclick = function(event) {
  if (event.target == modal) {
    hideModal();
  }
}
// Limpiar formulario
function clearForm() {
  var nombre = document.getElementById("nombre");
  var correo = document.getElementById("correo");
  nombre.value = "";
  correo.value = "";
}






/* // ventana modal de registro 

// Obtener la ventana modal por su id
var modal = document.getElementById("success-modal");

// Obtener el elemento span que cierra la ventana modal
var span = document.getElementsByClassName("close")[0];

// Crear una función para mostrar la ventana modal
function showModal() {
  modal.style.display = "block";
}

// Crear una función para ocultar la ventana modal
function hideModal() {
  modal.style.display = "none";
}

// Asignar la función de ocultar la ventana modal al evento click del elemento span
span.onclick = function() {
  hideModal();
}

// Asignar la función de ocultar la ventana modal al evento click fuera de la ventana modal
window.onclick = function(event) {
  if (event.target == modal) {
    hideModal();
  }
} */



