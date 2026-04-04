function verificou(){
    let push = new Date()
    let anoAtual = push.getFullYear()
    let anoForm = document.querySelector('#txtano')
    let res = document.querySelector('div#res')

    if(anoForm.value.length == 0 || Number(anoForm.value) > anoAtual){
        alert('[ERRO] Dados inválidos, tente novamente!')
    } else {
        let formMas = document.getElementsByName('radsex')[0]
        let formFem = document.getElementsByName('radsex')[1]
        let formBoy = document.getElementsByName('radsex')[2]

        let idade = anoAtual - Number(anoForm.value)
        let gen = ""

        let img = document.querySelector('#res img')

        if(formMas.checked){
            gen = "homem"
            if(idade <= 11){
                img.src = "img/crianca-m.jpg"
            } else if(idade < 60){
                img.src = "img/homem_adulto.png"
            } else if(idade < 100){
                img.src = "img/idoso.jpg"
            } else{
                img.src = "img/dino.jpg"
            }

        } else if(formFem.checked){
            gen = "mulher"

            if(idade <= 11){
                img.src = "img/crianca.webp"
            } else if(idade < 60){
                img.src = "img/mulher_adulta.webp"
            } else if(idade < 100){
                img.src = "img/idosa.jpg"
            } else{
                img.src = "img/dino.jpg"
            }

        } else if(formBoy.checked){
            gen = "outro"
            img.src = "img/boyceta.webp"
        }

        res.innerHTML = `<p>Você é um(a) ${gen} de ${idade} anos</p>`
        res.appendChild(img)
    }
}