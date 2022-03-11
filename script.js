var operators = {
    '+': function(a, b) {
        return a + b;
    },
    '-': function(a, b) {
        return a - b;
    },
    '*': function(a, b) {
        return a * b;
    },
    '/': function(a, b) {
        return a / b;
    }    
};

function operate(operator, num1, num2){
    return operators[operator](num1, num2);
}

let numbersArray = [];

const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers').children;
const functions = document.querySelector('.functions').children;


Array.from(numbers).forEach(e=>{
    e.addEventListener('click',  ()=>{
        if(e.innerText != 'Clear'){
            numbersArray.push(e.innerText);
            display.textContent = e.innerText;
        }
    });
})


// console.log(numbers);
// console.log(functions)

