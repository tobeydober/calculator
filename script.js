const ADD = ((number1, number2) => number1 + number2)
const SUBTRACT = ((number1, number2) => number1 - number2)
const MULTIPLY = ((number1, number2) => number1 * number2)
const DIVIDE = ((number1, number2) => number1 / number2)

const OPERATE = (function(number1, number2, operator) {
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

console.log('tello')