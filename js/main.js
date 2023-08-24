let btn;
window.onload = ()=>{
    
    btn = document.getElementById("btn_formulario");
    btn.addEventListener("click",enviar);

}

function enviar(event){
    //name-form02-0, email-form02-0, phone-form02-0 textarea-form02-0
    
    frm = document.getElementById("formulario");

    if(frm.checkValidity()){

        let campo1 = document.getElementById("name-form02-0");
        campo1.value = "";

        let campo2 = document.getElementById("email-form02-0");
        campo2.value = "";

        let campo3 = document.getElementById("phone-form02-0");
        campo3.value = "";

        let campo4 = document.getElementById("textarea-form02-0");
        campo4.value = "";
        
        alert("Gracias por registrarte, espera proximamente el boletín");
        event.preventDefault();
        
    }
   
}