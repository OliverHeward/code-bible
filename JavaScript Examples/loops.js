LOOOOOOPS

/* REPEATING TASKS MANUALLY
	repeating tasks can be a ball ache, if you had a variable of vacationSpots,
	and wanted to tap into the function you can do so like this. */

const vacationSpots = ['Australia', 'Miami', 'Bangledesh'];
console.log(vacationSpots[0]); // prints Australia
console.log(vacationSpots[1]); // prints Miami
console.log(vacationSpots[2]); // prints Bangledesh

/* THE FOR LOOP
	Instead of writing out the same code over and over, loops allow use to tell computers to repeat
	a given block of code on its own. One way to give computers these instructions is with a
	for loop.

	The typical 'for' loop includes an ireator variable that usually appears in all three expressions,
	The ireator variable i initialized checked against the stopping condition, and assigned a new value
	on each loop iteration. Iterator variables can have any name, but its best practice to use a descriptive
	variable name.

	A 'for' loop contains three expressions separated by ';'  inside the parentheses

	- An initialization starts the loop and can be also be used to declare the iterator variable
	- A stopping condition is the condition that the iterator variable is evaluated against 
		-- if the condition evaluates to 'true' the code block will run, and if it evaluates to 
		'false' the code will stop
	- An iteration statement is used to update the iterator variable on each loop.

The 'for' loop syntax looks like this */
for (let counter = 0; 
	counter < 4; counter++) {
	console.log(counter)
}
// the example above prints the output of
	0
	1
	2
	3
	
/* Breaking down the example above;
	- The initialization is 'let counter = 0' so the loop will start count at 0
	- The stopping condition is 'counter < 4', meaning the loop will run as long as the 
		iterator variable, 'counter' is less than 4
	- The iteration statement is 'counter++'. This means after each loop, the value of
		'counter' will increase by 1. For the first iteration 'counter' will equal 0,
		for the second iteration 'counter' will equal 1, and so on.
	- The code block is inside the curly braces, console.log(counter) will execute until the condition
		evaluates to false. Te condition will be false when 'counter' is greater than or equal to 4
		the point that the condition becomes false is sometimes called the stop condition.

This 'for' loop makes it possible to write 0, 1, 2 and 3 programmatically. */
for (let counter = 5; counter < 11; counter++) {
  console.log(counter); // prints 5, 6, 7, 8, 9, 10
}

/* LOOPING IN REVERSE 
	What if you wanted the 'for' loop to lo 3, 2, 1 and then 0?
	With simple modifications to the expressions, we can make our loops run backwards

	to run a backward 'for' loop, we must:
	- Set the iterator variable to the hihest desired value in the initialization expression
	- Set the stopping condition for when the iterator variable is less than the desired amount
	- The iterator should decrease in intervals after each iteration    */
for (let counter = 3; counter >= 0; counter--){
  console.log(counter) // prints 3, 2, 1, 0. 
}; 

/* LOOPING THROUGH ARRAYS
	'for' loops are very handy for iterating over data structures.
	For example, we can use a 'for' loop to perform the same operation on each element on an array.
	Arrays hold lists of data, like customer names or product information.
	Imagine we owned a store and watned to increase the price of every product in our catalog.
	That could be a lot of repeating code, but by using a 'for' lop to iterate through the array, 
	we could accomplish this task easily.

	To loop through each element in an array, a 'for' loop should use the array's .length property in its condition
check the exmaple below to see how 'for' loops iterate on arrays. */

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];

for (let i = 0; i < animals.length; i++){
	console.log(animals[i]) // Output: Grizzly Bear, Sloth, Sea Lion.
}; 
/* In the loop above, we've named our iterator variable i. This is a variable naming convention
	you'll see in a loot of loops. 
	Using i to iterate through arrays it can become short-hand for the word index
	The stoppign condition checks that i is less than animals.length.
	So if we tried to access an element at the index of animals.length we will have gone to far! */

/* NESTED LOOPS
	When we have a loop running inside another loop, we call this a nested loop. One use for a nested loop
	is to compare the elements in two arrays. For each round of the outer 'for' loop, the inner 'for' loop
	will run completely.
	Below is an example for a nested 'for' loop */
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
	for (let j = 0; j < yourArray.length; j++) {
		if (myArray[i] === yourArray[j] {
			console.log('Both loops have number: ' + yourArray[j])
		})
	}
};
/* Think about whats happening in the nested loop in the example. For each element in the outer loop array,
myArray, the inner loop will run its entirety comparing the current element form the outer array,
myArray[i], to each element in the inner array, yourArray[j]. When it finds a match, it prints a string to the console. */


  // checking for mutual friends
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

/* THE WHILE LOOP
	a different type of loop is the 'while' loop. See below, to start the 'for' is converted into a while loop. */

// A 'for' loop that prints 1, 2 and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
	console.log(counterOne);
}
// A 'while' loop that prints 1, 2 and 3
let counterTwo = 1;
while (counterTwo < 4) {
	console.log(counterTwo);
	counterTwo++;
}
/* A Breakdown of whats happening here ^^^^^
	- The 'counterTwo' variable is declared before the loop. We can access it inside our 'while' loop since 
		its in the global scope
	- We start out loop with the keyword 'while' followed by our stopping condition, or test condition. 
		this will be evaulated before each round of the loop. While the condition evaulates to 'true'
		the block will continue to run. Once it evaulates to false the loop will stop.
	- Next, we have our loop's code block which prints counterTwo to the console and increments counterTwo.
What would happen if we didn't increment counterTwo(++) inside our block? If this wasn't included, counterTwo would always 
have its initial value, 0. That would mean the testing condition counterTwo < 4 would always evaulate to true
and our loop would never stop running. This is called an infinite loop and its something we always want to avoid. Infinite loops can
take up all of your computer's processing power potentially freezing your computer.

Using the 'while' loop! The syntax of a 'for' loop is ideal when we know how many times the loop should run,
but we don't always know this in advance. Think of eating like a 'while' loop: When you start taking bites,
you don't know the exact number you'll need to become full. Rather you'll eat 'while' you're hungry. 
In situations when we want a loop to execute an undetermined number of times, while loops are the best choice. */

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = 'spade';
while (currentCard === 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

/* DO... WHILE STATEMENTS
	In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run,
	this is where the 'do...while' statement comes in.

	A 'do...while' statement says to do a task once and then keep doing it until a specified condition is no longer met.
	The syntax for a 'do...while' statement looks like this; */
let countString = '';
let i = 0;

do {
	countString = countString + i; i++;
} while (i < 5);

console.log(countString);
/* In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it.
	First, the code block after the do keyword is executed once. Then the condition is evaulated.
	If the condition evaulates to 'true', the block will execute again. The looping stops when the condition evaluates to 'false'.

	Note that the 'while' and 'do...while' loop are different! Unlike the 'while' loop, 'do...while' will run at least once whether or not the condition evaluates to true */
const firstMessage = 'I will print!'
const secondMessage = 'I will not print!'
// A do while with a stopping condition that evaulates to false
do {
	console.log(firstMessage)
} while (true === false);
// A while loop with a stopping condition that evaulates to false
while (true === false){
	console.log(secondMessage)
};

/* BREAK LOOP
	the 'break' keyword can be used to allow programs to 'break' out of the loop from within the loops block.
	check syntax below; */
for (let i = 0; 1 < 99; i++) {
	if (i > 2) {
		break;
	}
		console.log('Banana.');
}
console.log('Orange you lad i broke out the loop!');
/* the output for this is;
	Banana
	Banana
	Banana
	Orange you glad i broke out the loop!

'break' statemetns can be especially helful when w'ere looping through large data
structures! With breaks, we can add test conditions besides the stopping condition, and exit the 
loop when they're met. */

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");












