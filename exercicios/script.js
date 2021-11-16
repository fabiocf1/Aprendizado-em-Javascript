function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")   
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
        msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12 ) {
        //BOM DIA!
        img.src = "dia.png"
        document.body.style.background = "#ffe755"
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = "#b68570"
    }  else {
          //BOA NOITE
         img.src = "noite.png" 
         document.body.style.background = "#526a74"
      }
}  