function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_mra8ty4";
 const templateID = "template_cir2pmi";

 emailjs.send(serviceID,templateID,params).then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Mensagem Enviada com Sucesso!");
    }).catch(
        (err=>console.log(err))
    );
    
}
 