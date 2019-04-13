INTRODUCTION TO ITERATORS

/* Imagine you had a grocery list and you wanted to know what each item on the list was. You'd have to scan through each row and check for the item.
This common task is similar to what we have to do when we want to iterate over, or loop through, an array.
One tool at our disposal is the 'for' loop. However, we also have access to built-in array methods which make looping easier.

	The built-in JavaScript array methods that help us iterate are called iteration methods, at times reffered to as iterators.
	Iterators are methods called on arrays to manipulate elements and return values.

	By following this, you will learn the syntax for these mthods, their return values, how to use the documentation to udnerstand them, and how to choose the right iterator method for a given task. */

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

		// ^^ this entire script returns; ^^
Picasso is one of my favorite artists.
Kahlo is one of my favorite artists.
Matisse is one of my favorite artists.
Utamaro is one of my favorite artists.
[ 1, 4, 9, 16, 25 ]
[ 5, 3.14, 100 ]

/* THE .forEach() METHOD
	The first iteration method to learn is the .forEach(). Aptly named, .forEach() will execute the same code for each element of an array. */

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function(groceryItem) {
	consolelog(' - ' + groceryItem);
}):

/*  The code above will log a nicely formatted list of the groceries to the console. A break down of the syntax for invoking .forEach() 

	- groceries.forEach() calls the forEach method on the groceries array.
	- .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
	- .forEach() loops through the array and executes the callback function for each element. 
		During each execution, the current element is passed as an argument to the callback function.
	- The return value for .forEach() will always be 'undefined'.

Another way to pass a callbak for .forEach() is to use arrow function syntax */

groceries.forEach(groceryItem => console.log(groceryItem)); 

// We can also define a function beforehand to be used as the callback function.

function printGrocery(element){
	console.log(element);
}

groceries.forEach(printGrocery);

/* The above example uses a function declaration but you can also use a function expression or arrow function as well
	
	All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator.
	It's good to be aware of the different ways to pass in callback functions as arguments in terators because developers have different stylistic preferences.
	Nonetheless, due to the strong adoption of ES6, we will be using arrow function syntax in the later exercise. */

	const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(fruits){
  console.log('I want to eat a ' + fruits);
})

// the above iterators over the fruits array and logs 'I want to eat a ' plus the name of each fruit.


/* THE .map() METHOD
	
	The second iterator we're going to cover is .map().
	When .map() is called on an array, it takes an arugment of a callback function and returns a new array! 
	See example below for calling the .map() method. */

const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map(number => {
	return number * 10;
});

/* .map() works in a similar manner to .forEach()-- the major difference is that .map() returns a new array.
	In the example above;

	- numbers is an array of numbers
	- bigNumbers will store the return value of calling .map() on numbers.
	- numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
	- return number * 10 is the code we wish to execute upon each element in the array.
		This will save each value from the numbers array, multiplied by 10 to a new array.

	If we were to use a console log with the numbers + bigNumbers to outputs would be as below */

	console.log(numbers); // output: [1, 2, 3, 4, 5]
	console.log(bigNumbers) // output: [10, 20, 30, 40, 50]
// notice how the elements we're not altered and that the bigNumbers is a new array.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)


/* THE .filter() METHOD
	Another useful iterator method is .filter(). Like .map(), .filter() returns a new array.
However, .filter() returns an array of elements after filtering out certain elements from the original array.
The callback function for the .filter() method should return 'true' or 'false' depending on the element that is passed to it.
The elements that cause the callback function to return 'true' are added to the new array.
Take a look a the following example; */

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(word => {
	return word.length < 6;
});

/* 	- 'words' is an array that contains a string elements.
	- 'const shortWords =' declares a new variabel that will store the returned array from invoking .filter() 
	- The callback function is an arrow function has a single parameter, 'word'. Each element in the 'words' array will be passed on to this function as an argument
	- 'word.length < 6;' is the condtion in the callback function. Any 'word' from the 'words' array that has fewer than '6' characters will be added to the 'shortWords' array.

Checking the values of the 'words' and the 'shortWords' */

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

// Not how the 'words' array was not mutated and 'shortWords' is a new array, outputting words with less than 6 letters.


const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(function(number) {
  return number < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(function(word){
  return word.length > 7;
});


/* THE .findIndex() METHOD
	Sometimes we want to find the location of an element in an array. This is where the .findIndex() method comes in! 
	Calling .findIndex() on an array will return the index of the first element that evaulates to 'true' in the callback function. */

const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex(num => {
	return num < 10;
});

/* 
	- 'jumbledNums' is an array that contains elements that are numbers
	- 'const lessThanTen =' declares a new variable that stores the returned index number from invoking '.findIndex()'.
	- The callback function is an arrow function and has a single parameter, num.
		Each element in the 'jumbledNums' array will be passed to this function as an argument.
	- num < 10; is the condition that elements are checked against. '.findIndex()' will return the index of the first element
		which evaluates to 'true' for that condition.
lessThanTen evaluates too; */
console.log(lessThanTen); // Output: 3
// to check what element has the index of 3
console.log(jumbledNums[3]); // Output: 5;

/* The element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.
	If there isnt a single element in the array that satisfies the condition in the callback,
	then '.findIndex()' will return -1. */
const jumbledNums = [123, 25, 78, 5, 9];
const greaterThan1000 = jumbledNums.findIndex(num => {
	return num > 1000;
});

console.log(greaterThan1000); // Output: -1

// Exercise

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});


/* THE .reduce() METHOD
	Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array,
	thereby reducing the array. Take a look at the example below; */

const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue
});
console.log(summedNums) // Output: 17

/* The values of 'accumulator' and 'currentValue' as we iterate through the 'numbers' array: */
iteration		accumulator 		currentValue 		return value

first 			1					2 					3
second 			3					4					7
third 			7					10					17

/* The use of .reduce() from the example above broken down; 
	- 'numbers' is an array that contains numbers.
	- 'summedNums' is a variable that stores the returned value of invoking .reduce() on numbers.
	- 'numbers.reduce()' calls the '.reduce()' method on the 'numbers' array and takes in a callback function as argument.
	- The callback function has two parameters, 'accumulator' and 'currentValue'. The value of 'accumulator' starts off as the value of the first element,
		in the array and the currentValue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.
	- As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration,
		currentValue takes on the value of the current element in the looping process.

The .reduce() method can also take an optional second parameter to set an initial value for 'accumulator' */

const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue
}, 100) // <- Second argument for .reduce() 
console.log(summedNums); // Output: 117
// an updated chart that accounts for the second argument of 100;
iteration		accumulator 		currentValue 		return value

first 			100					1 					101
second 			101					2					103
third 			103					4					107
fourth 			107					10					117

// Exercise
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator, currentValue) { 
  console.log('The Value of accumulator: ', accumulator);     console.log('The Value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10); // the 10 is the second argument
console.log(newSum);
// Full Output below
	The Value of accumulator:  10
	The Value of currentValue:  1
	The Value of accumulator:  11
	The Value of currentValue:  3
	The Value of accumulator:  14
	The Value of currentValue:  5
	The Value of accumulator:  19
	The Value of currentValue:  7 
	26 // output for newSum

// EXERCISE ITERATOR DOCUMENTATION
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter(word => {
  return word.length > 5;
});

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
  return word.length > 5;
} ));

// EXERCISE ON CHANGING .method ON EACH TO MATCH THE CORRECT SYNTAX/OUTPUT
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);





