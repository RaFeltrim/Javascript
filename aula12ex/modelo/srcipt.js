function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getAnimations('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 18){
        //Bom dia!
        img.src = 'manhã.png'
    }else if (hora <= 12 && hora <18){
        //Boa tarde!
        img.src = 'tarde.png'
    }else {
        //Boa Noite!
        img.src = 'noite.png'
    }
}
