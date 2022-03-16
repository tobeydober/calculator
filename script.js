const BUTTOMSCREEN = document.querySelector('.bottomScreen')
const TOPSCREEN = document.querySelector('.topScreen')
const DELETEBUTTON = document.querySelector('.deleteButton')
const RESETBUTTON = document.querySelector('.resetButton')
const BUTTONS = document.querySelectorAll('.button')
let firstNumber
let secondNumber
let operator 
let counter = false //this makes sure equal button can't  be press multiples times in a row

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
const RESET = () => {
    RESETBUTTON.addEventListener('click', function() {
        BUTTOMSCREEN.textContent = ''
        TOPSCREEN.textContent = ''
        firstNumber = ''
        secondNumber = ''
        operator = ''
    })
}

//deletes last element in string
const DELETE = function() {
    DELETEBUTTON.addEventListener('click', function() {
        return BUTTOMSCREEN.textContent = BUTTOMSCREEN.textContent.slice(0, -1)
    })
}

//helps clean OPERATERBUTTONS function
const OPERATERHELPER = (operatorButton) => {
    firstNumber = BUTTOMSCREEN.innerText
    TOPSCREEN.textContent = `${BUTTOMSCREEN.textContent} ${operatorButton.innerText}`
    BUTTOMSCREEN.textContent = ''
    operator = operatorButton.innerText
    counter = true
}

//pushes number in screen up and records the operator pressed
//takes in actual div of button for its textcontent
const OPERATERBUTTONS = function(operatorButton) {
    console.log(BUTTOMSCREEN.innerHTML)
    if (!BUTTOMSCREEN.textContent) {
        return
    }
    if (operator) { //this makes it work if the user presses a operator button instead of equal after
        secondNumber = BUTTOMSCREEN.innerText
        TOPSCREEN.textContent = `${firstNumber} ${operator} ${secondNumber}`
        BUTTOMSCREEN.textContent = OPERATE(firstNumber,secondNumber,operator)
        OPERATERHELPER(operatorButton)
        return
    }
    OPERATERHELPER(operatorButton)
    return
}

const MAINBUTTONS = function() {
    BUTTONS.forEach(function(button) {
        button.addEventListener('click', function(){
            let x = button.innerText
            switch (x) {
                case '/':
                    OPERATERBUTTONS(button)
                    return
                case '*':
                    OPERATERBUTTONS(button)
                    return
                case '-':
                    OPERATERBUTTONS(button)
                    return
                case '+':
                    OPERATERBUTTONS(button)
                    return
                case '=':
                    if (!firstNumber && !secondNumber) {
                        return
                    }
                    if (counter === false) {
                        return
                    }
                    secondNumber = BUTTOMSCREEN.innerText
                    TOPSCREEN.textContent = `${firstNumber} ${operator} ${secondNumber}`
                    BUTTOMSCREEN.textContent = OPERATE(firstNumber,secondNumber,operator)
                    firstNumber = BUTTOMSCREEN.textContent
                    secondNumber, operator = ''
                    counter = false
                    return
                case '+/-':
                    BUTTOMSCREEN.textContent = parseInt(BUTTOMSCREEN.textContent) * (-1)
                    return
                default:
                    BUTTOMSCREEN.textContent += button.innerText
            }
        })
    })
}



RESET()
DELETE()
MAINBUTTONS()