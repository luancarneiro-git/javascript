window.alert('Olá bem vindo, na próxima tela, digite seu nome')

let nome = window.prompt('Digite seu nome')
let int = document.querySelector("#interação")
while(nome === null){
    window.alert("[ERRO] DADOS OBRIGATÓRIOS INCORRETOS")
    let nome = window.prompt('Digite seu nome')
}
int.innerHTML = `Olá ${nome} tudo bem? seja bem vindo, sou o segundo software incial do meu criador`

