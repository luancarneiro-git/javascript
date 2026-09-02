function tabuada(){
    let num = document.querySelector('#number')
    let tab = document.querySelector('#tabuada')

    if(num.value.length == 0 || Number(num.value) == 0){
        alert('[ERRO] Digite um número')    
    }else {
        let n = Number(num.value)
        let c = 1

        tab.innerHTML = "" //limpando a tabuada

        while(c <= 10){
            let item = document.createElement('option') 
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}

