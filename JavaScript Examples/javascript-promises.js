===== JAVASCRIPT PROMISES ===== 

Constructing a promise object
/* To create a new 'promise' object, we use the 'new' keyword and the 'Promise' constructor method;
*/

const executorFunction = (resolve, regect) +> { };

const myFirstPromise = new Promise(executorFunction);

/* The 'Promise' constructor method takes a function parameter called the executor function which runs automatiically when the constructor is called.
The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

The exector function has two function parameters, usually referred to as the 'resolve()' and reject() functions.
The 'resolve()' and 'reject()' functions aren't defined by the programmer.
When the 'Promise' runs, JavaScript will pass its own 'resolve()' and 'reject()' functions into the executor function.

	- resolve is a function with one argument. Under the hood, if invoked, 
		resolve() will change the promise's status from pending to fulfilled,
		 and the promise's resolved value will be set to the argument passed into resolve().

	- reject is a function that takes a reason or error as an argument. 
		Under the hood, if invoked, reject() will change the promise's status from pending to rejected, 
			and the promise's rejection reason will be set to the argument passed into reject().
*/

const executorFunction = (resolve, reject) => {
	if (someCondition) {
		resolve('I resolved!');
	} else {
		reject('I rejected!');
	}
};

const myFirstPromise = new Promise(executorFunction);
// Break down of the above 
/*
	- We delare a variable 'myFirstPromise';

	- 'myFirstPromise' is constructed using 'new Promise()' which is the Promise constructor method.

	- 'executorFunction() is passed to the constructor and has two functions as parameters:
		 'resolve' and 'reject'
	
	- if 'someCondition' evaulates to 'true', we invoke 'resolve()' with the string 'I resolved!'

	- if not, we invoke 'reject()' with the string 'I rejected!'
*/

// EXERCISE
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
};

const orderSunglasses = () => { 	// function passing through myExecutor()
    return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);

==== THE NODE SETTIMEOUT() FUNCTION ====;

/* Knowing how to construct a promise is useful, but most of the time, knowing how to consume or use, promises will be key.
Rather than constructing promises, you'll be handling 'Promise' objects returned to you as the result of an aysnchronous operation.
These promises will start off pending but settle eventually.

Moving forward, we'll be simulation this by providing you with funcions that return promises which settle after some time.
To accomplish this, we'll be using setTimeout(). 
setTimeout() is a Node API that uses callback functions to schedule tasks to be performed after a delay.
setTimeout() has two parameters: a call back function and a delay in milliseconds. */

const delayedHello = () => {
	console.log('Hi! This is an asynchronous greeting!');
};

setTimeout(delayedHello, 2000);

/* Here, we invoke 'setTimeout()' with the callback function 'delayedHello()' and 2000.
In at least two seconds delayedHello() will be invoked. But whi is it "at least" two seconds and not exactly two seconds?

this delay is performed asynchronously - the rest of our program won't stop executing during the delay.
Asynchronous JavaScript uses something called the event-loop. After two seconds, delayedHello() is added to a line of code waiting to be run.
Before it can, any synchronous code from the program will run. Next, any code in front of it in the line will run.
This means it might be more than two seconds before delayedHello() is actually executed.

Lets look at how we'll be using setTimeout() to construct asynchronous promises: */

const returnPromiseFunction = () => {
	return new Promise((resolve, reject) => {
		setTimeout(( ) => {resolve('I resolved!')}, 1000);
	});
};

const prom = returnPromiseFunction();

/* in the example code, we invoked 'returnPromiseFunction()' which returned a promise.
We assigned that promise to the variable 'prom'. Similar to the asynchronous promises you may encounter in production,
prom will initially have a status of pending. */

// EXERCISE

const usingSTO = () => { // function with no parameters
  console.log('Heres another line of code')
  };

setTimeout(usingSTO, 2000); // a setTimout function with 2 arguments


==== CONSUMING PROMISES ====;

/* The initial state of an aysnchronous promise is 'pending', but we have a guarantee that it will settle.
How do we tell the computer what should happen then? Promise objects come with an aptly named .then() method.
It allows us to say, "I have a promise, when it settles, then here's what i want to happen..."

In the sense of a dishwasher promise function; 

- if rejected the dishes arent washed - so an action is done to make it go again.
- if resolved you have clean dishes - so an action to be done is to put them away.

The first handler is known as onFulfilled - a success handler
The second handler is known as onRejected - a failure handler.

.then is used as well from higher order functions 
*/

=== THE onFulfilled and onRejected FUNCTION ====;
/* to handle a "successful" promise, or a promise that resolved, we invoke '.then()' on the promise, passing in a success handler callback function: */

const prom = new Promise((resolve, reject) => {
	resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
	console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints 'Yay!'

// Break down of whats happening below
/* 
	- 'prom' is a promise which will resolve to 'Yay!'

	- We define a function, handleSuccess(), which prints the argument passed to it

	- We invoke 'prom's .then() function passing our handleSuccess() function.

	- Since prom resolves, handleSuccess() is invoked with 'prom's resolved value, 'Yay' so 'Yay' is logged to the console.


With typical promise consumption, we won't know whether a promise will resolve or reject,
so we'll need to provide logic for either case. We can pass both an onFulfilled and onRejected callback to .then(). */

let prom = new Promise((resolve, reject) => {
	let num = Math.random();
	if (num < .5){
		resolve('Yay!');
	} else {
		reject('Ohhh noooo!');
	}
});

const handleSuccess = (resolvedValue) => {
	console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
	console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);

/* 	BREAK DOWN OF WHATS HAPPENING

	- prom is a promise which will randomly either resolve with 'Yay!' or reject with 'Ohhh noooo!'

	- we pass two handler function to .then(). The first will be invoked with Yay, if the promise resolves,
	and the second will be invoked with 'Ohhhh nooooo!' if the promise rejects.
*/
//app.js
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
	console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

checkInventory(order).then(handleSuccess, handleFailure);

//library.js
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};

module.exports = { checkInventory };


// ==== USING catch() with Promises ====

/* One way to write cleaner code is to follow a principle called separation of concerns.
Seperation of concerns means organizing code into distinct sections each handling a specific task.
It enables us to quickly navigate our code and know wher to look if something isn't working.

Rember, .then() will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided.
This implementation allows us to seperate our resolve logic from our rejected logic. 
Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then(),
	with  success handler and both cases will be handled. */


prom.then((resolvedValue) => {
	console.log(resolvedValue);
})
	.then(null, (rejectionReason) => {
		console.log(rejectionReason);
	});

/* Since JavaScript doesn't mind whitespace, we follow a common convetion of putting each part of this chain on a new line to make it easier to read.
To create even more readable code, we can use a different promise function .catch()

The .catch() function takes only one arguement, onRejected. in the case of a rejected promise,
this failure handler will be invoke with the reason for rejection. Using .catch() accomplishes the same thing as using a .then() with only a failure handler.

example of catch() below */

prom
	.then((resolvedValue) => {
	console.log(resolvedValue);
});
	.catch((rejectionReason) => {
		console.log(rejectionReason);
	});

/* BREAK DOWN
	
	- prom is a promise which randomly either resolves with yay! or rejects with ohhh nooo 

	- We pass a success handler to .then() and a failure handler to .catch()

	- If the promise resolves, .then() success handler will be invoked with Yay!

	- If the promise rejects, .then() will return a promise with the same rejection reason as the original promise,
		and .catch()s failure handler will be invoked with that rejection reason.

*/
//app.js
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];


const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

checkInventory(order)
	.then(handleSuccess)
	.catch(handleFailure);

//library.js
const inventory = {
  sunglasses: 0,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    });
};

module.exports = {checkInventory};


==== CHAINING MULTIPLE PROMISES ====;

/* One common pattern we'll see with asynchronous programming is multiple operations which depend on each other.
to execute or that must be exectued in a certain order. We might make one rquest to a database and use the data returned to use,
to make another request and so on!
Let's illustrate this with another cleaning example, washing clothes.

We take our dirty clothes and put them in the washing machine. If the clothes are cleaned,
then we'll want to put them in the dryer, after the dryer runs,
if the clothes are dry, then we can fold them and put away.

This process of chanining promises together is called composition. Promises are designed with composition in mind!
Heres a simple promise chain in code; */

myFirstPromiseFunction()
	.then((firstResolveVal) => {
		return secondPromiseFunction(firstResolveVal);
	})
	.then((secondResolveVal) => {
		console.log(secondResolveVal);
	});
/* 	BREAK DOWN

	- We invoke a function firstPromiseFunction() which returns a promise

	- We invoke .then() with an anonymous function as the success handler

	- Inside the success handler we turn a new promise -
		the result of invoking a second function,
		secondPromiseFunction() with the first promises resolved value.

	- We invoked a second .then() to handle logic for the second promise setting

	- Inside that .then() we hae a success handler which will log the second promises resolve value to the console.

In order for our chain to work properly, we had to return the promise secondPromiseFunction(firstResolveVal).
	This ensured that the returned value of the first .then() was our second promise rather than the default return of a new promise with the same settled value as the initial.
*/

// Exericse
//app.js
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
 return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});

//library.js
const store = {
  sunglasses: {
    inventory: 817, 
    cost: 9.99
  },
  pants: {
    inventory: 236, 
    cost: 7.99
  },
  bags: {
    inventory: 17, 
    cost: 12.99
  }
};

const checkInventory = (order) => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   const itemsArr = order.items;  
   let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
   
   if (inStock){
     let total = 0;   
     itemsArr.forEach(item => {
       total += item[1] * store[item[0]].cost
     });
     console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
     resolve([order, total]);
   } else {
     reject(`The order could not be completed because some items are sold out.`);
   }     
}, generateRandomDelay());
 });
};

const processPayment = (responseArray) => {
  const order = responseArray[0];
  const total = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   let hasEnoughMoney = order.giftcardBalance >= total;
   // For simplicity we've omited a lot of functionality
   // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
   if (hasEnoughMoney) {
     console.log(`Payment processed with giftcard. Generating shipping label.`);
     let trackingNum = generateTrackingNumber();
     resolve([order, trackingNum]);
   } else {
     reject(`Cannot process order: giftcard balance was insufficient.`);
   }
   
}, generateRandomDelay());
 });
};


const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
}, generateRandomDelay());
 });
};


// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

module.exports = {checkInventory, processPayment, shipOrder};

==== AVOIDING COMMON MISTAKES ====;

/* Promise composition allows for much more readable code, than the nested callback syntax that preceded it.
	However, it can still be easy to make mistakes.

Mistaking 1: Nesting promises instead of chanining them */

returnsFirstPromise().then((firstResolveVal) => {
	return returnsSecondValue(firstResolveVal)
	.then((secondResolveVal) => {
	console.log(secondResolveVal);
	})
});
/* 	BREAKDOWN

	- We invoke 'returnsFirstPromise()' which returns a promise.

	- We invoke .then() with a success handler

	- Inside the success handler, we create but don't return our second promise

	- We invoke a second .then() to handle the logic for the second promise setting all inside the first then() 

	- Inside that second .then(),
		we have a success handler which will log the second promise's resolve value to the console.

Instead of hanving a clean chain of promises, we've nested the logic for one inside the logic of the other
	Imagine if we were handling five or ten promises!

Mistake 2: forgetting to return a promise. */

returnsFirstPromise()
	.then((firstResolveVal) => {
		returnsSecondValue(firstResolveVal)
	})
	.then((someVal) => {
		console.log(someVal);
	});

/* 	BREAKDOWN

	- We invoke returnsFirstPromise() which returns a promise

	- We invoke .then() with a success handler

	- inside the success handler, we create our second promise, but we forget to return it

	- We invoke a second .then(),
		Its supposed to handle the logic for the second promise, but since we didn't return,
		this .then() is invoked on a promise with the same settled alue as the original promise!

	*/

// EXERCISE

// app.js
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray);
})
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray);
})
    .then((successMessage) => {   	 
        console.log(successMessage);
});

//library.js
const store = {
  sunglasses: {
    inventory: 817, 
    cost: 9.99
  },
  pants: {
    inventory: 236, 
    cost: 7.99
  },
  bags: {
    inventory: 17, 
    cost: 12.99
  }
};

const checkInventory = (order) => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   const itemsArr = order.items;  
   let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
   
   if (inStock){
     let total = 0;   
     itemsArr.forEach(item => {
       total += item[1] * store[item[0]].cost
     });
     console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
     resolve([order, total]);
   } else {
     reject(`The order could not be completed because some items are sold out.`);
   }     
}, generateRandomDelay());
 });
};

const processPayment = (responseArray) => {
  const order = responseArray[0];
  const total = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   let hasEnoughMoney = order.giftcardBalance >= total;
   // For simplicity we've omited a lot of functionality
   // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
   if (hasEnoughMoney) {
     console.log(`Payment processed with giftcard. Generating shipping label.`);
     let trackingNum = generateTrackingNumber();
     resolve([order, trackingNum]);
   } else {
     reject(`Cannot process order: giftcard balance was insufficient.`);
   }
   
}, generateRandomDelay());
 });
};


const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
}, generateRandomDelay());
 });
};


// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

module.exports = {checkInventory, processPayment, shipOrder};

==== USING Promise.all() ====;

/* When done correctly, promise composition is a great way to handle situations where asynchronous operations depend on each other or execution order matters.
What if we're dealing with multiple promises, but we don't care about the order?
Let's think of terms of cleaning again.

For us to consider our house clean, we need our clothes to dry, our trash bins empited, and the dishwasher to run.
We need ALL of these tasks complete but not in any particular order.
Furthermore, since they're all getting done asynchronously, they should really all be happening at the same time!

To maximize effiencey we should use concurrency, multiple asynchronous operations happening together. With promises, we can do this with the function Promise.all().

Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise ill settle in on of two ways 

	- If every promise in the argument array resolves, the single promise returned from Promise.all() 
		will resolve with an array containing the resolve value from each promise in the argument array.

	- If any promise from the argument array rejects, the single promise returned from Promise.all() will
		immediately reject with the reason that promise rejected. This behavior is sometimes reffered to as failing fast!

	example code below */

let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
	.then((arrayOfValues) => {
		console.log(arrayofValues);
	})
	.catch((rejectiongReason) => {
		console.log(rejectiongReason);
	});

/* BREAK DOWN OF WHATS HAPPENING 
	
	- We declare myPromise assigned to invoking Promise.all()

	- We invoke Promise.all() with an array of three promises - the returned values from functions

	- We invoke .then() with a sucess handler which will print the array of resolved values if eah promise resolves successfully.

	- We invoke .catch() with a failure handler which will print the first rejection message if any promise rejects.

*/

// EXERCISE 
// app.js

const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.'); 
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);

//library.js
const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};

module.exports = { checkAvailability };


// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return (Math.random() > .2);
}





