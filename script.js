const ADD = ((number1, number2) => number1 + number2)
const SUBTRACT = ((number1, number2) => number1 - number2)
const MULTIPLY = ((number1, number2) => number1 * number2)
const DIVIDE = ((number1, number2) => number1 / number2)
const OPERATE = (function(number1, number2, operator) {
    number1 = parseInt(number1)
    number2 = parseInt(number2)
    switch (operator) {
        case '+':
            return ADD(number1, number2);
        case '-':
            return SUBTRACT(number1, number2);
        case '*':
            return MULTIPLY(number1, number2);
        case '/':
            return DIVIDE(number1, number2)
    }
})
const BUTTOMSCREEN = document.querySelector('.bottomScreen')
const TOPSCREEN = document.querySelector('.topScreen')
const DELETEBUTTON = document.querySelector('.deleteButton')
const RESETBUTTON = document.querySelector('.resetButton')
const BUTTONS = document.querySelectorAll('.button')
let firstNumber
let secondNumber
let operator 

const RESET = function() {
    RESETBUTTON.addEventListener('click', function() {
        BUTTOMSCREEN.textContent = ''
        TOPSCREEN.textContent = ''
        firstNumber = ''
        secondNumber = ''
    })
}

const DELETE = function() {
    DELETEBUTTON.addEventListener('click', function() {
        return BUTTOMSCREEN.textContent = BUTTOMSCREEN.textContent.slice(0, -1)
    })
}

BUTTONS.forEach(function(button) {
    button.addEventListener('click', function(){
        let x = button.innerText
        switch (x) {
            case '/':
                firstNumber = BUTTOMSCREEN.innerText
                TOPSCREEN.textContent = `${BUTTOMSCREEN.textContent} ${button.innerText}`
                BUTTOMSCREEN.textContent = ''
                operator = button.innerText
                return
            case '*':
                firstNumber = BUTTOMSCREEN.innerText
                TOPSCREEN.textContent = `${BUTTOMSCREEN.textContent} x`
                BUTTOMSCREEN.textContent = ''
                operator = button.innerText
                return
            case '-':
                firstNumber = BUTTOMSCREEN.innerText
                TOPSCREEN.textContent = `${BUTTOMSCREEN.textContent} ${button.innerText}`
                BUTTOMSCREEN.textContent = ''
                operator = button.innerText
                return
            case '+':
                firstNumber = BUTTOMSCREEN.innerText
                TOPSCREEN.textContent = `${BUTTOMSCREEN.textContent} ${button.innerText}`
                BUTTOMSCREEN.textContent = ''
                operator = button.innerText
                return
            case '=':
                console.log(typeof(firstNumber))
                secondNumber = BUTTOMSCREEN.innerText
                TOPSCREEN.textContent = `${firstNumber} ${operator} ${secondNumber}`
                BUTTOMSCREEN.textContent = OPERATE(firstNumber,secondNumber,operator)
                return
            default:
                BUTTOMSCREEN.textContent += button.innerText
                console.log('test')
        }
        // if (button.innerText === '/' ||
        //     button.innerText === '*' ||
        //     button.innerText === '-' ||
        //     button.innerText === '+' ) {
        //     TOPSCREEN.textContent = `${BUTTOMSCREEN.textContent} ${button.innerText}`
        //     BUTTOMSCREEN.textContent = ''
        //     return
        // }
        // BUTTOMSCREEN.textContent += button.innerText
    })
})





RESET()
DELETE()
