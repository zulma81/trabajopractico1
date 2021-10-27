var nombre= document.getElementById("fname");
var apellido= document.getElementById("apellido");
var email= document.getElementById("email");
var telefono= document.getElementById("telefono");
var producto= document.getElementById("producto");
var mensaje= document.getElementById("message");
var error=document.getElementById('error');



error.style.color="red";



var form = document.getElementById("formulario");
form.addEventListener('submit',function(evt){
    evt.preventDefault();
    var mensajeserror1= [];
   
    if(nombre.value === null||nombre.value===""){
       mensajeserror1.push("Ingresa un Nombre ");
      }
    
   
   if(apellido.value === null||apellido.value===""){
        mensajeserror1.push("Ingresa un Apellido ");
   }
   
  

if(email.value === null||email.value===""){
   mensajeserror1.push("Ingrese un E-mail");
  }
  
if(telefono.value === null||telefono.value==="" ){
   mensajeserror1.push("Ingrese un teléfono");
 }


if(producto.value === null||producto.value===""){
   mensajeserror1.push("Ingrese el código del producto");
}


if(mensaje.value === null||mensaje.value===""){
   mensajeserror1.push("Ingrese un mensaje");
}

error.innerHTML= mensajeserror1.join(', ')
if (mensajeserror1.length == 0)
{formulario.reset()}
if (mensajeserror1.length == 0)
{alert("Su mensaje ha sido enviado")}}

  
);

