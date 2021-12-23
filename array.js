let friends = ""

const textBox = document.getElementById("text-box")
const field = document.getElementById("field")
const but = document.getElementById("but")

but.addEventListener("click",addFriends)

function addFriends(){
    friends = textBox.value
    field.innerHTML += `<li> ${friends} </li>`
    textBox.value = ""
}