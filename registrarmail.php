<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtener los datos del formulario
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  
  // Validar que los campos no estén vacíos
  if (empty($nombre) || empty($correo)) {
    echo "Por favor, complete todos los campos";
    exit;
  }

  // Construir el contenido del correo electrónico
  $destinatario = 'vipdesign.venezuela@gmail.com'; 
  $asunto = 'Formulario de Registro';
  $mensaje = "Se ha recibido un nuevo mensaje de la Landing Page de Identidad Visual:\n\n";
  $mensaje .= "Nombre: $nombre\n";
  $mensaje .= "Correo: $correo\n";
  $mensaje .= "Mensaje: Contactar a cliente";

  // Crear las cabeceras del correo electrónico
  $cabeceras = "From: vipdesign.venezuela@gmail.com\r\n";
  $cabeceras .= "Reply-To: vipdesign.venezuela@gmail.com\r\n";
  $cabeceras .= "X-Mailer: PHP/" . phpversion();

  // Enviar el correo electrónico
  if (mail($destinatario, $asunto, $mensaje, $cabeceras)) {
    // Mostrar la ventana modal de aviso exitoso
    echo "<script>showModal();</script>";
  } else {
    echo "Hubo un error al enviar el correo";
  }
}
?>

