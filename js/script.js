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

