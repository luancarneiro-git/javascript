function acao(){
    
    /* seleção dos elementos no DOM */
    let fundo = document.querySelector('body');
    let data = document.querySelector('#data');
    let hora = document.querySelector('#hora');
    let img = document.querySelector('#img img');
    let footer = document.querySelector('footer')

    /*dando push nos dados necessários do browser*/
    let push = new Date();

    /*variáveis da hora completa*/
    let diaAtual = push.getDate();
    let mesAtual = push.getMonth() + 1;
    let anoAtual = push.getFullYear();

    /*variáveis do dia, ano e mês completo*/
    let horaAtual = push.getHours();
    let minutos = push.getMinutes();
    let segundos = push.getSeconds();

    /*condições para definir o background total do site*/
    if(horaAtual >= 0 && horaAtual <= 5){
        fundo.style.backgroundColor = "rgb(31, 27, 26)"
        img.src = "img/madrugada.webp"
        footer.style.color = "white"
    } else if(horaAtual <= 11){
        fundo.style.backgroundColor = "rgb(146, 108, 13)"
        img.src = "img/manha.jpg"
        footer.style.color = "white"
    } else if(horaAtual <= 17){
        fundo.style.backgroundColor = "rgb(89, 197, 240)"
        img.src = "img/dia_ensolarado.jpg"
    } else if(horaAtual <= 23){
        fundo.style.backgroundColor = "rgb(6, 49, 66)"
        img.src = "img/noite.jpg"
        footer.style.color = "white"
    }

    /*formatação para exibição*/
    diaAtual = String(diaAtual).padStart(2, "0")
    mesAtual = String(mesAtual).padStart(2, "0")
    horaAtual = String(horaAtual).padStart(2, "0")
    minutos = String(minutos).padStart(2, "0")
    segundos = String(segundos).padStart(2, "0")

    /*exibição*/
    data.innerHTML = `Hoje são ${diaAtual}/${mesAtual}/${anoAtual}`;
    hora.innerHTML = `${horaAtual}:${minutos}:${segundos}`;
}
acao();
setInterval(acao, 1000)