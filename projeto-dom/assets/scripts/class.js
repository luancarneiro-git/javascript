/* inicio script manipulação de cores dos elementos do exemplo 1*/
let c1 = document.getElementsByClassName('COne')[0]
c1.style.color = 'red'
c1.innerText = 'vasco da gama'

let c2 = document.getElementsByClassName('CTwo')[0]
c2.style.color = 'green'
c2.innerText = 'vasco da gama'

let c3 = document.getElementsByClassName('CTree')[0]
c3.style.color = 'yellow'
c3.innerText = 'vasco da gama'
/* fim script manipulação de cores dos elementos do exemplo 1*/

/* inicio script manipulação de texto e tipo textual do exemplo 2 */
let tstrong = document.getElementsByClassName('txtstrong')[0]
tstrong.innerHTML = '<strong>vasco da gama</strong>'

let titalic = document.getElementsByClassName('txtitalic')[0]
titalic.innerHTML = '<em>vasco da gama'

let tcoment = document.getElementsByClassName('txtcoment')[0]
tcoment.innerHTML = '<abbr title="GIGANTESCO VASCO DA GAMA">vasco da gama</abbr>'

let tt = document.getElementsByClassName('txt')[0]
tt.innerText = 'vasco da gama'

let tfont = document.getElementsByClassName('txtfont')[0]
tfont.style.fontSize = "28px"
tfont.innerText = 'vasco da gama'
/* fim script manipulação de texto e tipos textuais do exemplo 2*/