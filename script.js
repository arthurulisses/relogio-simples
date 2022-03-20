function carregar () {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours()
    //msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom Dia! <br>
        Agora são ${hora} horas.`
        img.src ='manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa Tarde! <br>
        Agora são ${hora} horas.`
        img.src ='tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = `Boa Noite! <br>
        Agora são ${hora} horas.`
        img.src ='noite.png'
        document.body.style.background = '#22303f'
    }
}

