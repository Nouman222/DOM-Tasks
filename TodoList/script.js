const list = document.getElementById("todolist");
const input = document.getElementById("inputfield");

function addItem() {
    if (input.value === "") return;

    const listItem = document.createElement("li");
    listItem.className = "listItem";
    listItem.innerText = input.value;

    listItem.onclick = () => listItem.remove();

    list.appendChild(listItem);
    input.value = "";
}
