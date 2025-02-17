let buttons = document.getElementsByClassName("btn")
let display = document.getElementById("display")
let equals = document.getElementById("equals")
let clear = document.getElementById("clear")

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", (e) => {
        display.value += e.target.innerText
    })
}


equals.addEventListener ("click", () => {
    let value = eval(display.value)
    display.value = value
})


clear.addEventListener("click", () => {
    display.value = "0"
})