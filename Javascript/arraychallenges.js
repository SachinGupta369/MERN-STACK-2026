
/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`,`"black tea"`, and `"oolong tea"`.

    Access the first element of the array and store it in a variable named `firstTea`.
 */

    let teaFlavors = ['Green Tea', 'Black tea','Oolong Tea']

    let firstTea = teaFlavors[0]

    // console.log(firstTea);

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokoyo"`, `"Paris"`, and `"New York"`.
    Access the third element in the array and store it in a variable named `favoriteCity`.
 */

let cities = ['London', 'Tokoyo','Paris','New York'];

let favoriteCity = cities[2]

// console.log(favoriteCity);

/* 
3. you have an array named `teaTypes` containing `"Herbal tea", `"wHITE TEA"` and `"masala tea"`.
  
Change the second element of the array to `"Jasmine tea"`
*/

let teaTypes = ['Herbal tea', 'White tea', 'masala tea']

teaTypes[1] = 'Jasmine Tea'

// console.log(teaTypes);


/* 
4. Declare an array named `citiesVisited` containing `"mUMBAI"`, and `"Sydney"`.

Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ['Mumbai','Sydney'];

citiesVisited.push('Berlin');
// console.log(citiesVisited);

citiesVisited[1] = 'berlin' // this is the wrong approach for adding new elements in the area. suppose if we don`t know the exact no. of elements then.
// console.log(citiesVisited);

/* 
5. You have an array name `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 

    Remove the last element of the array using the `pop` method and store it is in a variable named `lastOrder`.
*/

let teaOrders = ['chai', 'iced tea', 'matcha', 'earl grey'];

let lastOrder = teaOrders.pop(); // pop not only remove last element from the array it also convert into string
// console.log(typeof lastOrder); //string
// console.log(lastOrder); // earl grey

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 

    create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ['green tea', 'oolong tea', 'chai']

let copypopularTeas = popularTeas;
// console.log(copypopularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`.
    Create a hardcopy of this array named `hardCopyCities`.
*/

let topCities = ['Berlin','Singapore','New York']

let hardCopyCities = [...topCities]

topCities.pop();
// console.log(topCities);

// console.log(hardCopyCities);


/* 
8. You have Two arrays: `europeanCities` containing `"Paris"`, and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`.
    Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ['Paris', 'Rome'];
let asianCities = ['Tokyo', 'Bangkok'];

let worldCities = [...asianCities, ...europeanCities]

// console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong chai"`,
`"green tea"` and `"earl tea"`. 

Find the length of an array and store it in a variable named `menuLength`.
*/

let teaMenu = ['masala chai', 'oolong chai', 'green tea', 'earl tea'];

let menuLength = teaMenu.length;
// console.log(menuLength);


/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`.

Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

const cityBucketList = ['Kyoto','London','Cape Town', 'Vancouver']

const isLondonInList = cityBucketList.includes('London');
console.log(isLondonInList);
