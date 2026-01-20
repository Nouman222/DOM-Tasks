let container = document.createElement("div")
document.body.appendChild(container)
container.setAttribute("class","container")
// card section 
let card = document.createElement("div")
container.appendChild(card)
card.setAttribute("class","card")
card.setAttribute("onclick","card")

let cardImage = document.createElement("img")
card.appendChild(cardImage)
cardImage.setAttribute("src","cat2.jpg")
cardImage.setAttribute("alt","Cat Picture")
cardImage.style.width="100%"
cardImage.style.height="auto"

let title = document.createElement("h3")
title.innerText="The Cate Food"
card.appendChild(title)

let btn = document.createElement("button")
btn.innerText="Buy"
card.appendChild(btn)

// function
function createCard(){
let card = document.createElement("div")
container.appendChild(card)
card.setAttribute("class","card")
let cardImage = document.createElement("img")
card.appendChild(cardImage)
cardImage.setAttribute("src","cat2.jpg")
cardImage.setAttribute("alt","Cat Picture")
cardImage.style.width="100%"
cardImage.style.height="auto"
let title = document.createElement("h3")
title.innerText="The Cate Food"
card.appendChild(title)
let btn = document.createElement("button")
btn.innerText="Buy"
card.appendChild(btn)
}
// create card 
let createProduct=document.createElement("button")
createProduct.innerText="Create Product Card"
document.body.appendChild(createProduct)
createProduct.setAttribute("class","createcard")
createProduct.setAttribute("onclick","createCard()")






