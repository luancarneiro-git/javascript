function calcular(){
    let velo = document.querySelector('input#vel')
    let veloci = (vel.value)
    let resu = document.querySelector('#res')
    resu.innerHTML = `Sua velocidade é de <strong>${veloci}Km/H</strong>`
    if(veloci > 60){
        resu.innerHTML += '<p>e você está a cima da velocidade permitida, <strong>MULTADO!</strong></p>'
    } else {
        resu.innerHTML += '<p>e você está dentro da velocidade permitida</p>'
    }
                resu.innerHTML += `<p>dirija com segurança!</p>`
}