const screen = document.getElementById('screen')
const numButtons = document.getElementsByClassName('btnNum')
const opButtons = document.getElementsByClassName('btnOp')
const equalsButton = document.getElementById('btnEquals')
equalsButton.addEventListener('click', () => equals())
const clearButton = document.getElementById('btnClear')
clearButton.addEventListener('click', () => clear())

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

function equals() {
    let opList = screen.textContent.split(' ')
    let a = Number(opList[0])
    let b = Number(opList[2])
    let result = operate(a, opList[1], b)
    screen.textContent = result
}

function clear() {
    screen.textContent = ''
}

function appendNum(input) {
    if (input == '*' || input == '+' || input == '-' || input == '+') {
        screen.textContent += ` ${input} `
    } else screen.textContent += input
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