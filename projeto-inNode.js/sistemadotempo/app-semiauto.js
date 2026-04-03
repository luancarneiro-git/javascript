let hora = new Date()
let horaAtual = hora.getHours()
let minutos = hora.getMinutes()
let segundos = hora.getSeconds()
/* variáveis das horas, minutos e segundos */

let tempo = "ensolarado"
/* variável do clima*/

let MensagemTempo1 = ""
/*variável responsável por exibir a mensagem sobre o tempo atual*/

let MensagemTempo2 = ""
/*variável responsável por exibir a mensagem de alerta sobre o tempo atual*/

let MensagemHora = ""
/*variável responsável por exibir a mensagem sobre a hora atual*/

let MensagemDia = ""
/*variável responsável por exibir a mensagem sobre o dia atual*/

let dia = new Date()
let diaSem = dia.getDay()

console.log('Olá mundo, sou seu sistema do tempo')

switch(diaSem){
    case 0:
    MensagemDia = (`de um domingo`)
    break
    case 1:
    MensagemDia = (`de uma segunda-feira`)
    break
    case 2:
    MensagemDia = (`de uma terça-feira`)
    break
    case 3:
    MensagemDia = (`de uma quarta-feira`)
    break
    case 4:
    MensagemDia = (`de uma quinta-feira`)
    break
    case 5:
    MensagemDia = (`de uma sexta-feira`)
    break
    case 6:
    MensagemDia = (`de um sábado`)
    break
    default:
    MensagemDia = (`dia inválido`)
}

if(horaAtual >= 0 && horaAtual <= 5){
    MensagemHora = (`São ${horaAtual}:${minutos}:${segundos} da madrugada `)
} else if(horaAtual >= 6 && horaAtual <= 9 ){
    MensagemHora = (`São ${horaAtual}:${minutos}:${segundos} da manhã `)
} else if(horaAtual >= 10 && horaAtual <= 11){
    MensagemHora = (`São ${horaAtual}:${minutos}:${segundos} da manhã `)
} else if(horaAtual >= 12 && horaAtual <= 17){
    MensagemHora = (`São ${horaAtual}:${minutos}:${segundos} da tarde `)
} else if(horaAtual >= 18 && horaAtual <= 23){
    MensagemHora = (`São ${horaAtual}:${minutos}:${segundos} da noite `)
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

console.log(`${MensagemHora}${MensagemDia} ${MensagemTempo1}, ${MensagemTempo2}`)