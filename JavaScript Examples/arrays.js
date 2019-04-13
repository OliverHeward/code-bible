/* CREATE AN ARRAY
	One way we can create an array is to use an array literal. An array literal creates an array by wrapping
	items in square brackets [] Remember from the previous exercise, arrays can store any data type;
	we can have an array that holds all the same data types or an array that holds different data types. */

['element example', 10, true]

/* Taking a closer look at the syntax in the array
	- The array is represented by the square brackets [] and the content inside
	- Each content item inside an array is called an element
	- There are three different elements inside the array
	- Each element inside the array is a different data type

We can also save an array to a variable. This was done in the previous exercise */

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

// Practing to make own array

const hobbies = ['Coding', 'Gaming', 'Sleeping'];
console.log(hobbies);

/* ACCESSING ELEMENTS
	
	Each element in an array has a numbered position known as its index. We can access individual items using their index,
	which is similar to referencing an item in a list based on it's position.

	Arrays in JavaScript are zero-indexed, meaning the position starts counting from 0
		not from 1. */

	let cities = ['New York', 'Beijing', 'Nairobi'];
	/* array name is City, The Index of 0 is New York,
		1 is Beijing and 2 being Nairobi

	We can also access individual characters in a string using a bracket notation
		and the index. For instance, you can write. */

const hello = 'Hello World';
console.log(hello[6]);
// the console will display W, since its the character that is at index 6

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0]
console.log(listItem) // Fortune favors the brave
console.log(famousSayings[2]) // Where there is love there is life
console.log(famousSayings[3]) // undefined

/* UPDATE ELEMENTS
	Once you have access to an element in an array, you can update its value. */
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

/* In this example, the seasons array contained the names of the four seasons.

	How ever we decided that we preffer to say Autumn instead of Fall,
	The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of seasons,
	to be autumn instead of whats already there */

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'; // changes tomatoes to avocados
console.log(groceryList); // prints 'bread', 'avocados'

/* ARRAYS WITH LET AND CONST
	You can decalre variables with both let and const keywords. Variables declared with let can be reassigned
	Varriables with const keyword cannot be reassigned.
	However, elements in an array declared with const remain mutable. Meaing that we can change,
	the contents of a const array. */

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils);

/* THE .length PROPERTY 
	one of an array's built-in properties is length and it returns the number of items in the array.
	We access the .length property just like we do with strings */

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); // returns 3

/* THE .push() METHOD
	One method, .push() allows us to add items to the end of an array. */
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('walk the dog', 'make dinner');
console.log(chores); // prints chores and adds the .push items to the end of array

/* THE .pop() METHOD
	Another array method, .pop() removes the last item of an array. */
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores);

/* MORE ARRAY MEOTHDS
	There are many more arrya methods than just .push() and .pop()
	Some array methods that are available to JavaScript developers include */

.join()
.slice()
.splice()
.shift()
.unshift()
.concat()

// example use

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); // orange juice
groceryList.unshift('popcorn'); // adds popcorn in place
groceryList.slice(1, 4); // slices the SL from Banan to brown rice

const pastaIndex = 
groceryList.indexOf('pasta');

console.log(pastaIndex); // logs the const pastaIndex of 4

console.log(groceryList.slice(1, 4)); // slices the shopping list from banana to brown rice

console.log(groceryList); // logs the list


/* ARRAYS AND FUNCTIONS */
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

/*  - The flowers array has 3 elements
	- The function addFlower() has a parameter of arr uses .push() to add a 'lily' element
		into arr
	- We call addFlower() with an argument of flowers which will execute the code inside addflower
	- We check the value of flowers and it now includes the 'lily' element! The array was mutated! */
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED'; // changes the 3rd array (mutated) too MUTATED
}

changeArr(concept); // calls the function 

console.log(concept); // prints MUTATED instead of mutated

function removeElement(newArr){
  newArr.pop() // removes the last element of the Array
}

removeElement(concept); // calls the function 

console.log(concept); // prints the Array without 'MUTATED' at the end

/* NESTED ARRAYS;
	Arrays can store other arrays. When an array ontains another array it is known as a nested array */
const nestedArr = [[1], [2, 3]];
// To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element
const nestedArr = [[1] , [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
/* Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3].
	Then if we wanted to access the elements within the nested array we can chain,
	or add on, more bracket notation with index values */
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]);
/* In the second console.log() statement, we have two bracket notations chained to nestedArr.
	We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array
	we use nestedArr[1][0] and we get the value of 2 */
const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

console.log(numberClusters);

/* Secret Message
	Using array methods, you can transform an array of strings into a secret message. */
	
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop(); // removes item at the end (javascript)
secretMessage.push('to', 'Program'); // adds to end
secretMessage[7] = 'right'; // replaces easily
secretMessage.splice(6, 11, 'know'); // removes 6 - 11 and adds know
secretMessage.slice(1, 3) // Slices the array from one point, shows index 1 - 3.
secretMessage.shift(); // Removes first index of array
secretMessage.unshift('Programming'); // adds programming to start of array
console.log(secretMessage.length) // shows length
console.log(secretMessage); // logs console
console.log(secretMessage.join()); // joins two together


.sort() // sorts the array from either a - z or 1 - 9 (sorts as a string so 124519 is less than 3 for example)
.reverse() // reverse the array from z - a or 9 - 1


