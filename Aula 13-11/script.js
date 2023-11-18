
let container = document.getElementById("container")

let fragment = document.createDocumentFragment()

let card = document.createElement('div')
card.setAttribute('class', 'card')

let div_img = document.createElement('div')
div_img.setAttribute('class', 'div-img')
div_img.style.backgroundImage = "url('receita.jpg')"

card.append(div_img)

let div_chef = document.createElement('div')
div_chef.setAttribute('class', 'chef-avatar')
div_chef.style.backgroundImage = "url('helezarizzo')"

card.append(div_chef)

let btn_receita = document.createElement('button')
btn_receita.setAttribute('class', 'btn-receita')
btn_receita.textContent = "VER RECEITA"

card.append(btn_receita)

let lb_chef = document.createElement('label')
lb_chef.setAttribute('class', 'lb-chef')
lb_chef.textContent = "Nome do Chef"

card.append(lb_chef)

let lb_avaliacao = document.createElement('label')
lb_avaliacao.setAttribute('class', 'lb-avaliacao')
lb_avaliacao.textContent = "❤ 1.511"

card.append(lb_avaliacao)

fragment.append(card)







container.append(fragment)











// Exemplo com innerHTML (não usar)
// let texto = "Índice :"
// for (let i = 0; i < 50; i++) {
//     let card = 
//     `
//     <div class="card">
//         <div class="top">
//         ${texto+i}
//         </div>
//         <div class="botton">

//         </div>
//     </div>
//     `
//     container.innerHTML += card
// } 

