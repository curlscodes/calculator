const screen = document.getElementById('screen')
const numButtons = document.getElementsByClassName('btnNum')
const opButtons = document.getElementsByClassName('btnOp')

function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

function operate(a, op, b) {
    switch(op) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b)
    }
}

function appendNum(number) {
    screen.textContent += number
} 

// adds event listeners to number buttons
for(let i = 0; i < numButtons.length; i++) {
    numButtons[i].childNodes.forEach((button) => {
        button.addEventListener("click", () => appendNum(button.textContent))
    })
}

// adds event listeners to operator buttons
for(let i = 0; i < opButtons.length; i++) {
    opButtons[i].childNodes.forEach((button) => {
        button.addEventListener("click", () => appendNum(button.textContent))
    })
}