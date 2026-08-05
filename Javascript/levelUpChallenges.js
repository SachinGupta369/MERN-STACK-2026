/* 
1. Write a `for` loop that loops through the array `["Green tea", "black tea", "chai", "Oolong chai"]` and stop the loop when it find "chai".
*/

let tea = ["Green tea", "black tea", "chai", "Oolong chai"];
let el = [];

for (i = 0; i<tea.length;i++){
    if(tea[i] == 'chai'){
        break;
    }
    el.push(tea[i])
}
// console.log(el);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.

Store the other cities in a new array named `"visitedCities"`
*/

let toVisit = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < toVisit.length; i++){
    if (toVisit[i] == 'paris' || toVisit[i] == 'Paris'){
        continue;
    }
    visitedCities.push(toVisit[i]);
}
// console.log(visitedCities);


/* 
3. Use a `for-of` loop to iterate through the array `[1,2,3,4,5]` and stop when the number `4` is found. 
Store the numbers before `4` in an array named `smallNumbers`. 
*/

let numbers = [1,2,3,4,5];
let smallNumbers = [];

for (const els of numbers) {
    if(els == 4){
        break;
    }
    smallNumbers.push(els)
}
// console.log(smallNumbers);


/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`.

Store the other teas in an array named `preferredTeas`.
*/

let herbalTea = ["chai", "green tea", "herbal tea", "black tea"]
let preferredTeas = []

for (const tea of herbalTea) {
    if(tea == 'herbal Tea' || tea == 'herbal tea'){
        continue
    }
    preferredTeas.push(tea)
}
// console.log(preferredTeas);


/* 
5. Use a `for-in` loop to loop through an object containing city populations.

Stop the loop when the population of `"Berlin"` is found and store all previous cities population in a new object named `cityPopulations`.

let citiesPopulation = {
"London":8900000,
"New York":8400000,
"Paris":2200000,
"Berlin":3500000
};

*/

let citiesPopulation = {
"London":8900000,
"New York":8400000,
"Berlin":3500000,
"Paris":2200000,
};

let cityPopulation = {};

for (const cities in citiesPopulation) {
    if(cities == 'Berlin'){
        break
    }
    cityPopulation[cities] = citiesPopulation[cities]
}

// console.log(cityPopulation);


/* 
6. Use a `for-in` loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in an new object named `largeCities`.

let worldCities = {
    "Syndey":5000000,
    "Tokyo": 9000000,
    "Berlin":3500000,
    "Paris":2200000
};
*/

let worldCities = {
    "Syndey":5000000,
    "Tokyo": 9000000,
    "Berlin":3500000,
    "Paris":2200000
};

let smallPopulation = {};

for(city in worldCities){
    if(worldCities[city] < '3000000'){
        continue
    }
    smallPopulation[city] = worldCities[city]
}

// console.log(smallPopulation);



/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.

Stop the loop when `"Chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let myTeas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = []

myTeas.forEach(eles => {
    if(eles == 'chai'){
        return
    }
    availableTeas.push(eles)
});

// console.log(availableTeas);


/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.

Skip `"Syndey"` and store the other cities in a new array named `traveledCities`.
*/

let myCity = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = []

myCity.forEach(els =>{
    if(els.toLowerCase() == 'sydney'){
        return
    }
    traveledCities.push(els)    
});

// console.log(traveledCities);


/* 
9. Write a `for` loop that iterate through the array `[2,5,7,9]`.

Skip the value `7` and multiply the rest by 2. Store the result in a new array named `doubledNumbers`.
*/



/* 
10. Use a `for-of` loop to iterate through the array `["chai", "Green tea", "black tea", "jasmine tea", "Herbal tea"]`. 

And stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named `shortTeas`.
*/