const myform = $("form#myform");
myform.submit(function(event){
  event.preventDefault();
  let service_id = "gmailloreto";
  let template_id = "template_7fj4mFVW";

  myform.find("button").text("Enviar");
  emailjs.sendForm(service_id,template_id,myform[0]) //Promesa que llama a la api que envía el e-mail
      .then(function(){ //si todo esta ok, envía el mail
      myform.find("button").text("Enviar");
      limpiar();
      alert("Su mensaje ha sido enviado con éxito!");
      
    }, function(err) {
      alert("Error al enviar el mensaje!\r\n Respuesta:\n " + JSON.stringify(err));
      myform.find("button").text("Enviar");
    });
  return false;
});

function limpiar(){
  document.getElementById("fName").value = "";
  document.getElementById("fMail").value = "";
  document.getElementById("fMessage").value = "";

}