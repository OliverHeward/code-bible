/* FUNCTIONS AS DATA
	JavaScirpt fuctions behave like any other data type in language; we can assign functions to variables,
	and we can reassign them to new variables.

	In the example below, we have an annoyingly long function name that hurts the readability of any code in which it's used.
	lets pretend this function does important work and needs to be called repeatadly! */

const announceThatIamDoingImportantWork = () => {
	console.log("I'm doing very important work!");
};

/* What if we wanted to rename this function without sacrificing the source code? 
	We can re-assign the function to a variable with a suitably short name: */

const busy = announceThatIamDoingImportantWork;
 busy(); // this function call barely takes any space!

 /* The 'busy' variable that holds a reference to our original function. If we could look up the address in memory of
 	'busy' and the address in memory of annouceThatIAmDoingImportantWork they would point to the same place. Our new busy() 
 	function can be invoked with parentheses as if that was the name we originally gave our function.

 	Notice how we assign announceThatIAmDoingImportantWork without parentheses as the value to the 'busy' variable.
 	We want to assign the value of the function itself, not the value it returns when invoked.

 	In JavaScript, functions are first class objects, this means that like other objects you've encountered, JavaScript functions can have properties and methods.

 	Since functions are a type of object, they have properties such as .length and .name and methods such as .toString().

 	Functions are special because we can invoke them, but we can still treat them like any other type of data. */

 const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// a shorter-named variable, as the one above will take a long time to execute.
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes
	is2p2();
		console.log(is2p2.name);

/* FUNCTIONS AS PARAMETERS
	Since functions can behave like any other type of data in JavaScript, It might not suprise you to learn
	that we can also pass functions (into other functions) as parameters. A higher-order function is a function that 
	either accepts functions as parameters, returns a function or both! 
	We call the functions that get passed in as parameters and invoked callback functions because they get called during the exectuion of the higher-order function.

	When we pass a function in as an argument to another function, we don't invoke it. Invoking a function would evaulte to the return value of that function call.
	With callbacks, we pass in the function itself by typing the function name without the parentheses (that would evaulate to the result of calling the function) */

const timeFuncRunTime = funcParameter => {
	let t1 = Date.now();
		funcParameter();
	let t2 = Date.now();
		return t2 - t1;
}

const addOneToOne = () => 1 + 1;

tumeFuncRuntime(addOneToOne);

/* We wrote a higher-oder function, timeFuncRuntime(). It takes in a function as an arugment, saves a starting time, invokes the called back function,
records the time after the function was called, and returns the time the function took to run by substracting the starting time from the ending time.

	This higer-order function could be used with any callback function which makes it a potentially powerful piece of code.
	
	We then invoked 'timeFuncRuntime()' first with the addOneToOne() function - note how we passed in 'addOneToOne' and did not invoke it. */

timeFuncRuntime(() => {
	for (let i = 10; i>0; i--){
		console.log(i)
	}
});

// In this example, we invoked 'timeFuncRuntime()' with an anonymous function that counts backwards from 10. Anonymous functions can be arguments too!

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Code wrriten below is from exercise to make a Higher Order Function with Parameters.

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);