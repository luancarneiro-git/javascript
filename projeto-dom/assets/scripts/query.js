/* inicio script manipulação de cores dos elementos do exemplo 1*/
let c1 = document.querySelector('#COneQuery')
c1.style.color = 'red'
c1.innerText = 'vasco da gama'

let c2 = document.querySelector('#CTwoQuery')
c2.style.color = 'green'
c2.innerText = 'vasco da gama'

let c3 = document.querySelector('#CTreeQuery')
c3.style.color = 'yellow'
c3.innerText = 'vasco da gama'
/* fim script manipulação de cores dos elementos do exemplo 1*/

/* inicio script manipulação de texto e tipo textual do exemplo 2 */
let tstrong = document.querySelector('#txtstrongQuery')
tstrong.innerHTML = '<strong>vasco da gama</strong>'

let titalic = document.querySelector('#txtitalicQuery')
titalic.innerHTML = '<em>vasco da gama'

let tcoment = document.querySelector('#txtcomentQuery')
tcoment.innerHTML = '<abbr title="GIGANTESCO VASCO DA GAMA">vasco da gama</abbr>'

let tt = document.querySelector('#txtQuery')
tt.innerText = 'vasco da gama'

let tfont = document.querySelector('#txtfontQuery')
tfont.style.fontSize = "28px"
tfont.innerText = 'vasco da gama'
/* fim script manipulação de texto e tipos textuais do exemplo 2*/