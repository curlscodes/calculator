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

console.log(numButtons)

numButtons.forEach((element) => {
    element.childNodes.forEach((buttons) => {
        buttons.addEventListener('click', () => appendNum(button.textContent))
    })
});


function appendNum(number) {
    screen.textContent += number
} 