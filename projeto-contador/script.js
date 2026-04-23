function contar(){
let inicio = document.querySelector('input#inicio')
let fim = document.querySelector('input#fim')
let passo = document.querySelector('input#passo')
let contar1 = document.querySelector('input#contar')
let contagem = document.querySelector('p#contagem')
let resultado = document.querySelector('p#contagem')

if((Number(inicio.value)) == 0 || (Number(fim.value)) == 0 || (Number(passo.value)) == 0){
    alert('[ERRO] Dados inválidos! Tente novamente')
} else{
    resultado.innerHTML = "Contando: "

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let c = Number(passo.value)

    for(i1 = i; i1 <= f; i1 += c){
        resultado.innerHTML += `\u{27A1} ${i1} `
    }
    resultado.innerHTML += `\u{1F6A9}`
}
}