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
let operator = '';

const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers').children;
const functions = document.querySelector('.functions').children;


Array.from(numbers).forEach(e=>{
    e.addEventListener('click',  ()=>{
        if(e.innerText != 'Clear'){
            numbersArray.push(e.innerText);
            display.textContent = e.innerText;
        }else{
            numbersArray = [];
            operator = '';
            display.textContent = '0'
        }
    });
})

Array.from(functions).forEach(e=>{
    e.addEventListener('click', ()=>{
        if(e.innerText === '='){
            display.textContent = operate(operator, +numbersArray[0], +numbersArray[1]);
        }
        if(numbersArray[0] != undefined && numbersArray[1] != undefined){
            if(e.innerText === '+' || e.innerText === '-' || e.innerText === '*' || e.innerText === '/'){
                
                display.textContent = operate(operator, +numbersArray[0], +numbersArray[1])
                numbersArray[0] = operate(operator, +numbersArray[0], +numbersArray[1]);
                operator = e.innerText;
                numbersArray.pop();
                
            }
        }
        else{
            console.log(e.innerText);
            operator = e.innerText;
        }
    })
})

// console.log(numbers);
// console.log(functions)

