/* 
Playing with Types
/* Task 1:

Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
 */

function stringToNumber(input) {
    
  let converted = Number(input);
   
  if(Number.isNaN(converted)) {
      return "Not a number"
      console.log('Not a number');
      
  } else {
      return "converted"
      console.log('converted');
      
  }}

// console.log(stringToNumber('sachin'));  // not a number
// console.log(stringToNumber('123')); // converted

/* Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
 */
let name;

function flipBoolean(input){
    let flip = !Boolean(input)
    return flip;
    console.log(flip);
}

flipBoolean(undefined)
flipBoolean('true')
flipBoolean('sachin')
flipBoolean(false)
flipBoolean(0)
flipBoolean(name)

/* Task 3:
Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
 */

function whatAmI(input){
   if(typeof input === 'number'){
    return `I\`m a number`
   }else if(typeof input === 'string'){
    return `I\`m a string`
   }
}

// console.log(whatAmI('name'));
// console.log(whatAmI(''));
// console.log( whatAmI(123));

/* Task 4:
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/

function isItTruthy(input){
    let result = Boolean(input)
    if(result === true){     
        return "It's truthy"
    }else{
        return "It's falsey"
    }
}
// console.log(typeof result);

console.log(isItTruthy(undefined));
console.log(isItTruthy(''));
console.log(isItTruthy(1));


