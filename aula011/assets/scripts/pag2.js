let botao = document.querySelector('input#ver')
botao.addEventListener('click', calcular)

function calcular(){
    let vel = document.querySelector('input#vel')
    let valor = Number(vel.value)
    let res = document.querySelector('#res')
    res.innerHTML = `<p>E sua velocidade é de <strong>${valor} Km/H</strong></p>`
    if(valor > 60){
        res.innerHTML += `<p>e você está a cima da velocidade permitida, <strong>MULTADO!</strong></p>`
    } else {
        res.innerHTML += `<p>e você está dentro da velocidade permitida</p>`
    }
        res.innerHTML += `<p>dirija com segurança!</p>`
}