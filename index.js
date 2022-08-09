let colorsList = []
let correctColor

const rgbEl = document.querySelector("#rgb-el")
const restartBtn = document.querySelector("#restart-btn")
const messageEl = document.querySelector("#message-el")
const easyMode = document.querySelector("#easy-mode")
const hardMode = document.querySelector("#hard-mode")
const headerEl = document.querySelector("header")

const colorsEl = document.querySelector("#colors-el")
const colors = document.querySelectorAll(".color")

startGame();

function startGame() {
    correctColor = chosenColor()
    rgbEl.textContent = correctColor
    setupColors()
}


for (let i = 0; i < colorsList.length; i++)
colors[i].addEventListener("click", function(){
    if (colors[i].style.backgroundColor === correctColor) {
        restartBtn.textContent = "Play Again!"
        messageEl.textContent = "korik!"
        changeColors(correctColor)
    } else {
        colors[i].style.backgroundColor = "#2C3333"
        colors[i].style.opacity = "0%"
    }
})


restartBtn.addEventListener("click", function() {
    restartGame()
})

function changeColors(color) {
    for (let i = 0; i < colors.length; i++) {
        headerEl.style.backgroundColor = color
        colors[i].style.backgroundColor = color
        colors[i].style.opacity = "100%"
    }
}

function restartGame() {
    colorsList = randomizeColors(colors.length)
    correctColor = chosenColor()
    rgbEl.textContent = correctColor
    headerEl.style.backgroundColor = "#A5C9CA"
    restartBtn.textContent = "New Colors"
    messageEl.textContent = ""
    setupColors()
}

function setupColors() {
    for (let i = 0; i < colors.length; i++){
        colors[i].style.backgroundColor = colorsList[i]
    } 
}


function randomizeColors(num) {
    let colorsArr = []
    for (let i = 0; i < num; i++) {
    colorsArr.push(newColors())
    }
    return colorsList = colorsArr
}

function newColors() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    let rgb = `rgb(${r}, ${g}, ${b})`
    return rgb
}

function chosenColor() {
    let num = Math.floor(Math.random() * randomizeColors(colors.length).length)
    colorPicked = colorsList[num]
    return colorPicked
}