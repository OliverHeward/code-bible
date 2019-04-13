==== ASYNC AWAIT ====;

/* Introduction 

Often in web developement, we need to handle asynchronous actions -
actions we can wait on while moving onto other tasks.
We make requests to networks, databases, or any number of similar operations.
JavaScript is non-blocking: Instead of stopping the executre of code while it waits, 
JavaScript uses an event-loop which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions

Originally, JavaScript used callback functions to handle asynchronous actions.
The problem with callbacks is that they encourage complexly nested code which quickly becomes difficult to read, debug, and scale.
With ES6 JavaScript intergrated native promises whih allow us to write significantly more readable code.J
JavaScript is coninually improving, and ES8 provides a new syntax for handling our asynchronous action,
async...await.
The 'async.await' syntax allows us to write asynchronous code that reads similary to tradition asynchronous, imperative programs.

The 'async...await' syntax is syntacti sugar - it doesnt introdue new fucntionality into the language, 
but rather introduces a new syntax for using promises and generators. 
Both of these were already built in to the language.
Despite this, async...await powerfully improves the readability and scalability of our code. */

==== The async Keyword ====;

/* The 'async' keyword is used to write functions that handle asynchronous actions. 
We wrap our asynchronous logic inside a function prepended with the 'async' keyword. Then, we invoke that function. */

async function myFunc() {
	// function body here
};

myFunc() 

/* We'll be using async function declarations throughout this lesson, but we can also create async function expressions: */

const myFunc = async () => {
	//function body here
};

myFunc();

/* async functions always return a promise. This means we can use tradition promise syntax,
like .then() and .catch() with our async functions.
An async function will return in one of three ways;

	- If there's nothing returned fro mthe function, it will return a promise with a resolved value of undefined.

	- If there's a non-promise value returned from the function, it will return a promise resolved to that value

	- If a promise is returned from the function, it will simply return that promise */


async function fivePromise() {
	return 5;
}

fivePromise()
	.then(resolvedValue => {
		console.log(resolvedValue);
	}) // prints 5


/* Above, even thouh we returned 5 inside the function body, 
what's actually returned when we invoked fivePromise() is a promise with a resolved value of 5. *
*/
// EXERCISE 

async function withAsync(num){
  if (num === 0){
      return 'zero';
    } else {
      return 'not zero';
    }
}


==== THE AWAIT OPERATOR ----;

/* asnyc doesnt do much by itself; 
async functions are almost always used with the addtion keyword away inside the function body.

The await keyword can only be used inside an aysnc function. 
Await is an operator: it returns the resolve value of a promise,
since promise sresolve in an indeterminate amount of time, away halts or pauses, the exectuion of our async function until a given promise is resolved.

In most situations, we're dealing with promises that were returned from functions.
Generally these functions are through a library, and, in this lesson, we'll be providing them.
We can away the resolution of the promise it returns inside an asyn function.
In the example below, myPromise() is a function that returns a promise which will resolve to the string "I am resolved now!".
*/

async function asyncFuncExample() {
	let resolvedValue = await myPromise();
	console.log(resolvedValue);
}

asyncFuncExample(); //Prints: I am resolved now.


/* Within our async function, 'asyncFuncExample()', we use 'await' to halt our execution until 'myPromise()' is resolved,
and assign it resolved value to the varaible 'resolvedValue'. Then we log 'resolvedValue' to the console. 
We're able to handle logic for a promise in a way that reads like synchronous code.
*/

// EXERCISE 
// App.js
const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}


// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner()

//LIBRARY.JS
/*
this is the brainstormDinner function. It's a little silly. 
It returns a promise that uses a series of setTimeout() functions to simulate a time-consuming asynchronous action.
It's a good example of "callback hell" or "the pyramid of doom," 
two ways people describe how confusing a bunch of nested callback functions can become.
*/

const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
  console.log(`I have to decide what's for dinner...`)
  setTimeout(() => {
    console.log('Should I make salad...?')
    setTimeout(() => {
      console.log('Should I make ramen...?')
      setTimeout(() => {
        console.log('Should I make eggs...?')
        setTimeout(() => {
          console.log('Should I make chicken...?')
          resolve('beans')
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
})
}

module.exports = brainstormDinner

==== WRITING ASYNC FUNCTIONS =====;

/* We've seen that the 'await' function halts the execution of an 'async' function until a promise is no longer pending.
Dont forget the 'await' keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run-
it just won't have the desired results.

We're going to explore this using the following function, which returns a promise that resolves to 'yay , I resolved!' after a 1 second delay */

let myPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Yay, I resolved!')
		}, 1000);
	});
}

/* Now we'll write two async functions which invoke myPromise(); */

async function noAwait() {
	let value = myPromise();
	console.log(value);
}

async function yesAwait() {
	let value = await myPromise();
	console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: 'Yay! I resolved!'

/* In the first 'async' function, noAwait(), we left off the 'await' keyword before 'myPromise()'.
In the second, 'yesAwait()', we included it. The 'noAwait()' function logs Promise { <pending> } to the console.
Without the 'await' keyword, the function execution wasn't paused.
The console.log() on the following line was executed eofre the promise had resolved.

Remember that the 'await' operator returns the resolved value of a promise.
When used properly in 'yesAwait()', the variable 'value' was assigned the resolved value of the 'myPromise()' promise,
whereas in 'noAwait()', 'value' was assigned the promise object itself.
*/

// EXERCISE 
// APP.JS
const shopForBeans = require('./library.js');

async function getBeans() { //function turned into async to allow for {value} to execute to provide result.
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans(); //await added to make it wait for value execution
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

//LIBRARY 


/*
This is the shopForBeans function. It uses a setTimeout() function to simulate a time-consuming asynchronous action. 
The function returns a promise with a resolved value of a string representing a type of bean. 
It settles on a random beanType from the beanTypes array using Math.random().
*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 4)
    let beanType = beanTypes[randomIndex];
    console.log(`2. I bought ${beanType} beans because they were on sale.`)
   resolve(beanType);
  }, 1000)
})
}
  
module.exports = shopForBeans

==== HANDLING DEPENDENT PROMISES ====;

/* The true beauty of 'asyn...await' is when we have a series of asynchronous actions whih depend on one another.
For example, we may make a network request based on a query to a database. 
In that case, we would need to wait to make the network request unti we had the reults from the database.
With native promise syntax, we use a chain of .then() functions making sure to return correctly each one. */

function nativePromiseVersion() {
	returnsFirstPromise()
		.then((firstValue) => {
			console.log(firstValue);
			return returnsSecondPromise(firstValue);
		})
		.then((secondValue) => {
			console.log(secondValue);
		});
}
/* BREAKDOWN!

	- Within our function we use two functions which return promises:
		returnsFirstPromise() and returnsSecondPromise
 
	- We invoke 'returnsFirstPromise()' and ensure that the first promise resolved by using .then()

	- In the callback of our first .then() we log the resolved value of the first promise, firstValue, and then return.
		returnsSecondPromise(firstValue)

	- We use another .then() to print the second promise's resolved value to the console.

Here's how we'd write an 'async' function to accomplish the same thing; */

async function asyncAwaitVersion() {
	let firstValue = await returnsFirstPromise();
		console.log(firstValue);
	let secondValue = await returnsSecondPromise(firstValue);
		console.log(secondValue);	
}

/* BREAK DOWN
	
	- We mark our function as 'async'
	- inside out function, we create a variable 'firstValue' assigned 'await returnsFirstPromise()'.
		This means 'firstValue' is assigned the resolved value of the awaited promise
	- Next, we log firstValue to the console.
	- Then, we create a variable 'secondValue' assigned to 'await returnsSecondPromise(firstValue)'.
		Therefore, secondValue is assigned this promise's resolved value.
	- Finally we log 'secondValue' to the console.

Though using the 'async...await' syntax can save us some typing, the length reduction isnt the main point.
Given the two version of the function the 'async...await' version closely resembles synchronous code, which help developers maintain and debug their code.
The 'async...await' syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax.
Let's create some 'async' functions with multiple 'await' statements!. */

// EXERCISE
// APP.JS

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans() { // async function
  let type = await shopForBeans(); // variable 
  let isSoft = await soakTheBeans(type); // variable with pass through to type
  let dinner = await cookTheBeans(isSoft); // variable that awaits the pass through of type then runs through isSoft.
  console.log(dinner); // logs dinner
}

makeBeans(); // creates a function declaration.

// LIBRARY.JS
/*
This is the shopForBeans function from the last exercise
*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 4)
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`)
   resolve(beanType);
  }, 1000)
})
}

let soakTheBeans = (beanType) => {
   return new Promise((resolve, reject) => {
     console.log('Time to soak the beans.')
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`)
      resolve(true)
      }, 1000)
  })
}

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.')
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!') 
        resolve('\n\nDinner is served!')
      }
    }, 1000)
  })
}

  
module.exports = {shopForBeans, soakTheBeans, cookTheBeans} 

==== HANDLING ERRORS =====;

/* When .catch() is used with a long promise chain, this is no indication of where in the chain the error was thrown.
This can make debugging challenging.

Wait 'async...await', we use 'try...catch' statements for error handling.
By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, 
but we can also catch both snchronous and asycnhronous errors. this makes for easier debugging!
*/

async function usingTryCatch() {
	try {
		let resolveValue = await asyncFunction('thing that will fail');
		let secondValue = await secondAsyncFunction(resolveValue); 
	} catch (err) {
		// catchess any errors in the try block
		console.log(err);
	}
}

usingTryCatch();

/* Remember, since 'async' functions return promises we can still use native promise's .catch() with an 'async' function */

async function usingPromiseCath() {
	let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
	console.log(rejectValue);
});

// This is sometimes used in the global scope to catch final errors in complex code.

// EXERCISE 
// APP.JS
const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  } catch(error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();

//LIBRARY.JS
//This function returns true 50% of the time.
let randomSucess = () => {
 let num = Math.random();
 if (num < .5 ){
   return true;
 } else {
   return false;
 }
};

//This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
 return new Promise((resolve, reject) => {
   console.log('Fingers crossed... Putting the Bean Souffle in the oven');
   setTimeout(()=>{
     let success = randomSucess();
     if(success){
       resolve('Bean Souffle');
     } else {
       reject('Dinner is ruined!');
     }
   }, 1000);
 })
};

module.exports = cookBeanSouffle;

==== HANDLING INDEPENDENT PROMISES ====;

/* rememer that 'await' halts the execution of our 'async' function.
This allows us to conveniently write synchronous-style  code to handle dependent promises.
But what if our 'async' function contains multiple promises which are not dependent on the results of one another to execute?
*/

async function waiting() {
	const firstValue = await firstAsyncThing();
	const secondValue = await secondAsnycThing();
		console.log(firstValue, secondValue);
}

async function concurrent {
	const firstPromise = firstAsyncThing();
	const secondPromise = secondAsyncThing();
		console.log(await firstPromise, await secondPromise);
}

/* in the waiting() function, we pause our function until the first promsie resolves,
then we construct the second promise.
Once that resolves, we print both resolved values to the console.

In our 'concurrent()' function, both promises are constructed without using 'await'.
We then 'await' each of their resolutions to print them to the console.

With our concurrent() function both promises' asynchronous operations can be run simultaneously.
If possible, we want to get started on each asynchronous operation as soon as possible!
Within our 'async' functions we should still take advantage of concurrancy,
the ability to perform asynchronous actions at the same time.

Note: If we have multiple truly independant promises that we would like to execute fully in paraellel,
we must use individual .then() functions and avoid halting our exection with 'await'.
*/

// EXERCISE 
// APP.JS
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinner() {
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();
    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
  };
serveDinner();

// LIBRARY.JS
let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 1000)
 })
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 1000)
 })
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 1000)
 })
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 1000)
 })
}

module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken}

==== AWAIT PROMISE.ALL() =====;

/* Another way to take advantage of concurrency when we have multiuple promises which can be executed simultaneously is to 'await' a 'Promise.all()'.

We can pass an array of promises as the arugment to 'Promise.all(),
and it will return a single promise.
This promise will resolve when all of the promises in the arugment array have resolved.
This promises's resolve value will be an array containing the resolved values of each promise from the arugment array.
*/

async function asyncPromAll() {
	const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
		for (let i = 0; i<resultArray.length; i++){
			console.log(resultArray[i]);
		}
};

/* in our above exmaple, we await the resoltuion of a 'Promise.all()'.
This 'Promise.all() was invoked with an argument array containing four promises (returned from required-in functions).
Next, we loop through our 'resultArray', and log each item to the console.
The first element in 'resultArray' is the resolved value of the 'asyncTask1()' promise,
the second is the value of the 'asyncTask2()' promise, and so on.

Promise.all() allows us to take advantage of asynchronicity --- each of the four asynchronous tasks can process concurrently.
Promise.all() also has the benefit of failing gast, meaning it won't wait for the rest of the asynchronous actions to complete once any one has rejected.
As soon as the first promise i nthe array rejects, the promise returned from 'Promise.all()' will reject with that reason. As it was when working with native promises,
'Promise.all()' is a good choice if multiple asynchronous tasks are all required but none must wait for an other vefore executing. */



// EXERICSE
// APP.JS
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`) // you can nav through array with this
}

serveDinnerAgain()

// library.js 

let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 1000)
 })
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 1000)
 })
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 1000)
 })
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 1000)
 })
}

module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken}











