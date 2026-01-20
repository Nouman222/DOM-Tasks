function CreateChild(){
let createChild = document.createElement("p")
createChild.innerText="p is added to div"
// document.body.appendChild(createChild)
let div1=document.getElementById("toggle")
div1.appendChild(createChild)
}

