console.log("test");

function something() {
  // something
}

const person = {
  name: "Rob",
  greeting: function () {
    console.log("Hey");
  },
};

person.greeting();

const iceCreams = ["vanilla", "chocolate", "blueberry"];

iceCreams.push("goodie goodie gum drops");

console.log(iceCreams);

const moreIceCreams = ["boysenberry", "hokey pokey", "rum and raisin"];

const allIceCreams = [...moreIceCreams, ...iceCreams];
console.log(allIceCreams);

allIceCreams.pop();

console.log(allIceCreams);

const poppedIceCream = allIceCreams.pop();

console.log(poppedIceCream);
console.log(allIceCreams);

allIceCreams.unshift("tiramisu");
console.log(allIceCreams);

allIceCreams.shift();
console.log(allIceCreams);

const shiftedIceCream = allIceCreams.shift();
console.log(allIceCreams);
console.log(shiftedIceCream);

const iceCreamSplit = "vanilla chocolate matcha";
const resultsIceCreamSplit = iceCreamSplit.split(" ", 2);
console.log(resultsIceCreamSplit);

const iceCreamJoin = ["vanilla", "chocolate", "strawberry"];
const resultsIceCreamJoin = iceCreamJoin.join("+++");
console.log(resultsIceCreamJoin);

// const iceCreamSlice = ["vanilla", "chocolate", "strawberry", "coconut", "bum flavour"];
const iceCreamSlice = "vanilla"; // can use for string too!
const resultsIceCreamSlice = iceCreamSlice.slice(2, 5);
console.log(resultsIceCreamSlice); //slices from and includes index reference
// second part of argument defined end point (which is not included in the output)

const iceCreamIncludes = ["coffee", "chocolate", "toffee"];
const resultsIceCreamIncludes = iceCreamIncludes.includes("z");
console.log(resultsIceCreamIncludes); // checks if includes argument = true

if (iceCreamIncludes.includes("coffee")) {
  console.log("This array has a 'coffee' in it");
}

const arrayOfThings = ["books", "pens", "paper", "pencils", "words"];
// const userInput = prompt("Enter a thing").toLowerCase();

// console.log(`Does the array contain ${userInput}? ...
// ${arrayOfThings.includes(userInput)}`);

console.log(arrayOfThings.indexOf("words"));

const booksIndex = arrayOfThings.indexOf("books");
console.log(booksIndex);

const iceCreamsForEach = ["vanilla", "chocolate", "blueberry"];
iceCreamsForEach.forEach(function (el, index) {
  // call back funciton = when we pass function into argument
  console.log(el + " ice-cream");
});

/////////////////////////

const iceCreamsMap = ["vanilla", "chocolate", "blueberry"];

const orderedIceCreams = iceCreamsMap.map(function (icecream, index) {
  return `Flavour ${index + 1}: ${icecream}`; // use map if you want to return something
}); // return will not work with forEach()

console.log(orderedIceCreams);

const icecreamCosts = [2.95, 4, 5];
const expensiveIcecreamCosts = icecreamCosts.filter(function (
  cost,
  index,
  array
) {
  return cost > 3;
});

console.log(expensiveIcecreamCosts); // result == [4,5]

const agesArray = [1, 3, 6, 9, 11, 18, 22, 27, 34, 56, 71];

let isEveryAgeOverThirty = agesArray.every(function (age, index) {
  return age > 30;
});
console.log(isEveryAgeOverThirty);

let areSomeAgesOverThirty = agesArray.some(function (age, index) {
  return age > 30;
});
console.log(areSomeAgesOverThirty);

let areSomeAgesOverThirtyArrow = agesArray.some((age, index) => age > 30);

console.log(areSomeAgesOverThirtyArrow);

// Exercise //

let ogString = "the queeN is dEad; long lIve the kiNg!";

ogString = ogString.toLowerCase(); // convert string to lower case

const myArray = ogString.split(" "); // convert string into an array indexed by spaces in string

for (let i = 0; i < myArray.length; i++) { 
  myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);
} // loop through the array and convert the first character of each element to upper case 
// and slice from the second character to the end of each element (end point undefined as argument so it goes to end)
// and that slice is added to each element to form the new string "Xxxxxx" etc

// Bonnie Hall came up with this:

// const myMap = myArray.map(function(word){
//   return word[0].toUpperCase() + word.slice(1);
// }) // this is more inline with DRY and uses methods only instead of loops nice

const newString = myArray.join(" "); // now we concert each element in the array into a string, joining by spaces (empty characters)
// this is opposite of what we're doing with split

console.log(newString);

