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