function carregar() {
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if(hora >= 0 && hora < 12 ) {
        // BOM DIA 
        img.src = "img/Manhã.png"
        msg.innerHTML = `Agora são ${hora}:${minutos} AM.`
        msg2.innerHTML = '<strong>BOM DIA!</strong>'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = "img/Tarde.png"
        msg.innerHTML = `Agora são ${hora}:${minutos} PM.`
        msg2.innerHTML = '<strong>BOA TARDE!</strong>'
        document.body.style.background = '#b9846f'
    } 
    else {
        img.src = "img/Noite.png"
        msg.innerHTML = `Agora são ${hora}:${minutos} PM.`
        msg2.innerHTML = '<strong>BOA NOITE!</strong>'
        document.body.style.background = '#515154'
    }
}
