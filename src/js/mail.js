const myform = $("form#myform");
myform.submit(function(event){
  event.preventDefault();
  console.log("Entramos por aqui ");
  let service_id = "gmailloreto";
  let template_id = "template_7fj4mFVW";

  myform.find("button").text("enviado...");
  emailjs.sendForm(service_id,template_id,myform[0]) //Promesa que llama a la api que envía el e-mail
      .then(function(){ //si todo esta ok, envía el mail y pasa por aquí
    	alert("Su mensaje ha sido enviado con éxito!");
       myform.find("button").text("Send");
    }, function(err) {
        console.log("Error " + JSON.stringify(err));
       alert("Error al enviar el mensaje!\r\n Respuesta:\n " + JSON.stringify(err));
       myform.find("button").text("Enviar");
    });
  return false;
});