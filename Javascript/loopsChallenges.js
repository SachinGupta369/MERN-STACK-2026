/* 
1. write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0;
let i = 1;

while (i<=5) {
    sum += i;
    i++;
}
// console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`. 
*/

let countDown = [];
let number = 5

while (number >= 0) {
    countDown.push(number);
    number--
}

// console.log(countDown);


/* 
3. write a `do while` loop that prompts a user to enter  their favorite tea type until they enter `"stop"`. 
    Store each tea type in an array named `teaCollection`.
*/

let teaCollection = [];
let teas ;
// do {
//     teas = prompt(`Enter types of tea for exit type "stop"`);
//     if(teas !== 'stop')
//     teaCollection.push(teas)
// } while (teas !== 'stop');

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let total =0 ; // if i don`t initilize with number it will undefine & undefine + 1 is NAN
let nums = 1

do {
    total += nums
    nums++
} while (nums <=3);

// console.log(total);

/* 
5. Write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let arr = [2,4,6];
let multi ;
let multipliedNumbers = [];

for (multi = 0; multi < arr.length; multi++) {
    const element = arr[multi]*2;
    multipliedNumbers.push(element)
}

console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
 */

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for(i = 0; i <cities.length; i++){
    const stores = cities[i];
    cityList.push(stores)

}

console.log(cityList);
