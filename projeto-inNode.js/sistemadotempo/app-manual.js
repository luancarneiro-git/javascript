let hora = 6
let tempo = "neblinado"
let MensagemTempo1 = ""
let MensagemTempo2 = ""
let MensagemHora = ""

console.log('Olá mundo, sou seu sistema do tempo')

if(hora >= 0 && hora <= 5){
    MensagemHora = (`São 0${hora}:00 da madrugada `)
} else if(hora >= 6 && hora <= 9 ){
    MensagemHora = (`São 0${hora}:00 da manhã `)
} else if(hora >= 10 && hora <= 11){
    MensagemHora = (`São ${hora}:00 da manhã `)
} else if(hora >= 12 && hora <= 17){
    MensagemHora = (`São ${hora}:00 da tarde `)
} else if(hora >= 18 && hora <= 23){
    MensagemHora = (`São ${hora}:00 da noite `)
}

switch(tempo){
    case "ensolarado":
    MensagemTempo1 = (`e o clima está ensolarado`)
    MensagemTempo2 = (`vista roupas frescas!`)
    break

    case "chuvoso":
    MensagemTempo1 = (`e o clima está chuvoso`)
    MensagemTempo2 = (`pegue seu guarda chuvas!`)
    break

    case "neblinado":
    MensagemTempo1 = (`e o clima está neblinado`)
    MensagemTempo2 = (`cafézinho na xícara, namorado pegue seu controle, namorada pegue seu livro = felicidade :)`)
    break

    default:
    MensagemTempo1 = (`clima desconhecido`)
}

console.log(`${MensagemHora} ${MensagemTempo1}, ${MensagemTempo2}`)