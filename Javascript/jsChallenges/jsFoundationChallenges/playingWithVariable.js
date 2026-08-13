
/* Perform the following mathematical operations
on the provided variables a and b


Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder */

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add(num1,num2) {
    let result = num1+num2;
    return result
}

console.log( add(18,24));

// Subtract small value from larger one
function subtract(num1,num2) {
    let result = num2-num1;
    return result
}

console.log(subtract(a,b));

function multiply(num1,num2) {
    return num1*num2 ;
}

console.log(multiply(a,b));

// Divide larger value by small
function divide(num1,num2) {
    return num2/num1;
}
console.log(divide(2,4));

// Increase value of a by 1
function increment(a) {
   let result = ++a
   return result
}
console.log(increment(18));

// Decrease value of b by 1
function decrement(b) {
    return --b
}

console.log(decrement(18));

// Divide larger value by small to find the reminder
function reminder(a,b) {
    return b%a;
}

console.log(reminder(8,2));

