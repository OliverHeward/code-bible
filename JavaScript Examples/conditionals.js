/*( CONDITIONAL STATEMENTS

The ‘if’ keyword.

We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep. 

In programming, we can also perform a task based on a condition using an ‘ if ‘ statement: */

if (true) {
	console.log(‘This message will print!’);
}
// Prints “this message will print!”

/* Notice in the example above, we have an ‘ if ‘ statement. The ‘ if ‘ statement is composed of: 

- The ‘ if ‘ keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {} 
- Inside the parentheses (), a condition is provided that evaluates to ’ true ‘ or ‘ false ‘. 
- If the condition evaluates to ‘ true ‘, the code inside the curly braces {} runs, or executes.
- If the condition evaluates to false, the block won’t execute.  */


let sale = true;
if (sale) {
  console.log('Time to buy!');
}

// Prints ‘Time to buy!’.

/*
IF…. ELSE STATEMENTS 

In the previous exercise, we used an ‘ if ‘ statement that checked a condition to decide whether or not to run a block of code. In many cases, we’ll have code we want to run if our condition evaluates to false. If we want to add some default behaviour to the if statement, we can add an ‘ else ‘ statement to run a block of code when the condition evaluates to ‘ false ‘. Take a look at the include of an ‘ else ‘ statement: */

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
// Prints "But the code in this block will!"

/*
An ‘ else ‘ statement must be paired with an ‘ if ‘ statement, and together they are referred to as an ‘ if… else’ statement. In the example above, the else statement:

- Uses the ‘else’ keyword following the code block of an ‘if’ statement.
- Has a code block that is wrapped by a set of curly braces {}.
- The code inside the ‘else’ statement code block will execute when the ‘if’ statements condition evaluates to ‘false’.

if…else statements allow us to automate solutions to yes-or-no questions, also known as binary decisions. */

let sale = true;

sale = false;

if (sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}

/*
COMPARISON OPERATORS

When writing condition statements, sometimes we need to use different types of operators to compare values. These operators care called comparison operators. 

Heres a list of some handy comparison operators and their syntax:
*/
- Less than: <
- Greater than. >
- Less than or equal to: <=
- Greater than or equal to: >=
- Is equal to: ===
- Is NOT equal to: !===

// Comparison operators compare the value on the left with the value on the right. for instance: 

10 < 12 // Evaluates to true.

/*
It can be helpful to think of comparison statements as questions. When the answer is “yes”, the statement evaluates to true, and when the answer is “no”, the statement evaluates to ‘false’. The code above would be asking: is 10 less than 12? Yes! So 10 < 12 evaluates to true.

We can also use comparison operators on different data type likes strings: */

‘apples’ === ‘oranges’ // false

/*
In the example above, we’re using the identity operator (===) to check if the string ‘apples’ is the same as the string ‘oranges’. Since the two strings are not the same, the comparison statement evaluates to ‘false’

All comparison statements evaluate to either ‘true’ or ‘false’ and are made up of:

- Two values that will be compared.
- An operator that separates the values and compares them accordingly. 
Let’s practice using these comparison operators. */

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
};

/*
LOGICAL OPERATORS

Working with conditionals means that we will be using booleans, true or false values. in javascript, there are operators that with with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators.
*/
- the and operator ( && ) 
- the or operator ( || )
- the not operator, otherwise known as the banger operator ( ! )

// When we use the && operator, we are checking that two things are true: 

if (stoplight === ‘green’ && pedestrians === 0) { 
	console.log(‘Go!’);
} else {
	console.log(‘Stop’):
}
/*
When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to the and execute. Otherwise, if either condition is false, the && condition will evaluate to false and the else block will execute.

If we only care about either condition being true, we can use the | | operator: 

If we only care about either condition being true, we can use the || operator: */

if (day === ‘Saturday’ || day === ‘Sunday’) {
	console.log(‘Enjoy the weekend!’);
} else {
	console.log(‘Do some work.’);
}
/*
When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true. In the code example above, if either ‘ day === ‘Saturday’ or day === ‘sunday’ evaluates to true the ifs condition will evaluate to true and its code block will execute. If the condition in an || statement evaluates to true, the second condition won’t even be checked. Only if day === ‘Saturday’ evaluates to false will ‘ day === ‘Sunday’ be evaluated. the code in the else statement above will execute only if both comparisons evaluate to false.
 
The ! not operators reverse, or negates the value of a boolean: */

let excited = true;
console.log(!excited); // Prints false

let sleep = false;
console.log(!sleepy); // Prints true

/*
Essentially, the ! operator will either take a true value and pass back false, or it will take a false value and pass back true. 

Logical operators are often used in condition statements to add another layer of logic to our code. */

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

/*
TRUTHFULLY AND FASLY 

lets consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a condition.

Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value - you’ll only check to see if the variable has been assigned a value.
*/

let myVariable = 'I Exist!';
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}
/*
The code block in the ‘if’ statement will run because ‘myVariable’ has a truthy value; even though the value of ‘myVariable’ is not explicitly the value ‘true’, when used in a boolean or conditional context, it evaluates to ‘true’ because it has been assigned a non-falsy value.

So which values are falsy- or evaluate to ‘false’ when checked as a condition? The list of falsy values includes: */

- 0
- empty strings like “” or ‘’
- ‘null’ which represent when there is no value at all 
- ‘undefined’ which represent when a declared variable lacks a value
- NaN, or Not a Number 

// Heres an example with numbers:

let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

// Prints 'No apples left!'

// The condition evaluates to false because the value of the numberApples is 0. Since 0 is falsy value, the code block in the ‘else’ statement will run.

let wordCount = 2;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

/*
TRUTHY AND FALSY ASSIGNMENT

Truthy and false evaluations open a world of short-hand possibilities! 

Say you have a website and want to take a user’s username to make a personalised greeting. Sometimes, the user does not have an account, making the ‘username’ variable falsy. The code below checks if ‘username’ is defined and assigns a default string if it is not:
*/

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

// If you combine your knowledge of logical operators you can use a short-hand for the code above. In a boolean condition Javascript assigns the truthy value to a variable if you use the || operator in your assignment:

let defaultName = username || ‘Stranger’;

// Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of ‘username’ if is truthy, and it will be assigned the value of ‘Stranger” if username is falsy. This concept is also referred to as short-circuit evaluation.

let tool = '';

tool = 'marker';

// Use short circuit evaluation to assign writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

/*
TERNARY OPERATOR

In the spirit of using short-hand syntax, we can use a ternary operator to simplify an ‘if…else’ statement.

Take a look at the ‘if..else’ statement example: */

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

/*
We can use a ternary operator to perform the same functionality:—

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

In the example above:

- The condition, isNightTime, is provide before the ?.
- Two expressions follow the ? and are separated by a colon :.
- If the condition evaluates to ‘true’, the first expression executes. 
- If the condition evaluates to false, the second expression executes. 

Like ‘if…else’ statements, ternary operators can be used for conditions which evaluate to ‘true’ or ‘false’
*/

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!”);


ELSE IF STATEMENTS

We can add more conditions to our if…else with an else if statement. The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition. Lets take a look at the syntax;

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom, so the first condition that evaluates to true form the top to bottom is the block that gets executed.

In the example above, since ‘stopLight === ‘red’ evaluates to ‘true’, the code inside the first ‘else if’ statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


THE SWITCH KEYBOARD

‘else if’ statements are a great tool if we need to check multiple conditions. In programming, we often find ourselves needing to check multiple values and handling each of them differently. For example: 

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

In the code above, we have a series of conditions checking for a value that matches a ‘groceryItem’ variable. Our code works fine, but imagine we need to check 100 different values! Having to write than many ‘else if’ statements sounds like a pain.

A ‘switch’ statement provides an alternative syntax that is easier to read and write. A ‘switch’ statement looks like this: 

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'

* The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.
* Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case's console.log() would run.
* The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
* The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without the break keyword at the end of each case, the program would execute the code for all matching cases and the default code as well. This behavior is different from if/else conditional statements which execute only one block of code.
* At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!'); break;
  case 'second place':
    console.log('You get the silver medal!'); break;
  case 'third place':
    console.log('You get the bronze medal!'); break;
  default: 
    console.log('No medal awarded.'); break;
}

MAGIC EIGHT BALL

Control flow is a powerful tool in Javascript, it can be used to tell someones fortune.
In this project we will build the Magic Eight Ball using control flow in javascript.

The user will be able to input a question, then our program will output a random fortune.

const userName = 'Jane';

userName ? console.log('Hello, Jane!') : console.log('Hello!');

const userQuestion = 'Will I become a werewolf tonight?'
console.log(`The user asked: ${userQuestion}`);

let randomNumber = 
      Math.floor(Math.random() * 8);

let eightBall = ''

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so'; break;
  case 2: 
    eightBall = 'Reply hazy try again';
    break;
  case 3:
   console.log(eightBall); str = 'Cannot predict now'; break;
  case 4:
    eightBall = 'Do not count on it'; break;
  case 5: 
    eightBall = 'My sources say no'; break;
  case 6:
    eightBall = 'Outlook not so good'; break;
  case 7:
    eightBall = 'Signs point to yes'; break;
}
console.log(`The eight ball answered: ${eightBall}`);


RACE DAY!

You’ve been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registrant would look like this

9:30am - Adult and registered early
11:00am adult and registered late
12:30pm - all youth

Heres how our registrant works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration. 

Race number:
 - Early adults receive a race number at or above 1000.
- all others receive a number below 1000.

Start time:
- Adult registrants run at 9:30am or 11:00am
    - early adults run at 9:30am
    - late adults run at 11:00am
- Youth registrants run at 12:30pm (regardless of registration) 

let raceNumber = Math.floor(Math.random() * 1000);

let early = false;
let age = 18;

if(early && age > 18){
  raceNumber += 1000;
}

if(early && age > 18){
  console.log(`Race will begin at 9:30am, your race number is: ${raceNumber}.`);
}
else if(!early && age > 18){
  console.log(`Race will begin at 11:00am, your race number is: ${raceNumber}.`);
}
else if(age < 18){
  console.log(`Race will begin at 12:30pm, your race number is: ${raceNumber}.`);
}
else{
  console.log('Please see the registration desk')
}


