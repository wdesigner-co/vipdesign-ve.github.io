<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtener los datos del formulario
  $name = $_POST['nombre'];
  $email = $_POST['email'];

  // Construir el contenido del correo electrónico
  $to = 'vipdesign.venezuela@gmail.com'; 
  $subject = 'Formulario de Registro';
  $mensaje = "Se ha recibido un nuevo mensaje de la Landing Page de Identidad Visual:\n\n";
  $body = "Nombre: $name\n";
  $body .= "Correo: $email\n";
  $body .= "Mensaje: Contactar a cliente";

  // Enviar el correo electrónico
  mail($to, $subject, $mensaje, $body);

}
?>
