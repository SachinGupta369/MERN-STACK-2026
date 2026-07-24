// Checking if a number is greater than another number

let num1 =5;
let num2 = 8;

if(num1 > num2 ){
    console.log(`Num1 is greater than another number`)
}else{
   // console.log(`Num1 is not greater than another number`);
}

if(num1 < num2 ){
    // console.log(`Num1 is greater than another number`)
}else{
   console.log(`Num1 is not greater than another number`);
}

// Checking if a string is equal to another string 

let string1 = "Chai";
let string2 = 'chai';

if (string1 == string2) {
    console.log(`string 1 is equal to another string`);
    
}else {
   //  console.log(`string 1 is not equal to string 2`);
    
}

/* Javascript is case sensitive */

let string3 = "Chai";
let string4 = 'Chai';

if (string3 == string4) {
/*     console.log(`string 1 is equal to another string`);
 */    
}else {
    console.log(`string 1 is not equal to string 2`);
    
}

/*  Checking if a variable is a number or not: */

let numVar = "342";
let numVar1 = 5434;

if(typeof numVar === 'number'){
    console.log(`num is a number ${numVar}`);
}else{
/*     console.log(`num is not a number `);
 */    
}

/* Check boolean value is true or false */

let loggedIn = true;

if (loggedIn) {
/*     console.log(`value is true`);
 */    
}else {
    console.log(`value is false`);
    
}

// checking if array is empty or not

let arrayIsEmpty = [''];
let arrayIsEmpty1 = [[]]

if (arrayIsEmpty.length === 0) {
    console.log(`${arrayIsEmpty}array is empty `);
}else{
    console.log(`${arrayIsEmpty}array is not empty `);

}