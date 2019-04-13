OBJECTS LESSON
/* CREATING OBJECT LITERALS
	Objects can be assigned to variables just like any JavaScript type. We use curely braces {}, to designate an object literal. */

let spaceship = {}; // spaceship is an empty object 

/* We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points 
to a location in memory that holds a value.
	A key's value can be of any data type in the language including functions or other objects.
	
	We make a key-value pair by writing the key's name, or identifier, followed by a colon and then the value.
	We seperate each key-value pair in an onject literal with a comma (,). Keys are strings,
	but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks.*/

//object literal with two key-value pairs
let spaceship = { // object
	'Fuel Type': 'Diesel', // property
	color: 'silver' // property
};
/* The spaceship object has two properties fuel type and color. 'Fuel Type' has quotation marks because it contains a space characters. */


let fasterShip = {
	'Fuel Type': 'Turbo Fuel',
	color: 'silver'
};

/* ACCESSING PROPERTIES
	There are two ways we can access an onjects property, one way is through DOT notation '.' 

	Dot notation has been used before with using properties built in methods such as */

'hello'.length; // returns 5

// With property dot notation, we write the object's name, followed by the dot operator and then the property name (key) 
let spaceship = {
	homePlanet: 'Earth',
	color: 'silver',
};

spaceship.homePlanet; // Returns 'Earth'
spaceship.color; // returns 'silver'

// If you try to access a property that does not exist on that object, undefined will be returned.

spaceship.favoriteIcecream; //returns undefined

//EXAMPLE
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

const crewCount = spaceship.numCrew; // access the value of numCrew
const planetArray = spaceship.flightPath; // access the value of flightPath

/* BRACKET NOTATION
	The second way to access a key's value is by using bracket notation, []
	This has been used before when indexing arrays like so; */
['A', 'B', 'C'][0]; // Returns 'A'
// To use bracket notation to access an objects property, we pass in the property name (key) as a string.
spaceship.['Fuel Type'];
/* We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them.
	Without bracket notation in these situations, our code would throw an error */
let spaceship = {
	'Fuel Type': 'Turbo Fuel',
	'Active Duty': true,
	homePlanet: 'Earth',
	numCrew: 5
};
spaceship['Active Duty']; // Returns True
spaceship['Fuel Type']; // Returns Turbo Fuel
spaceship['numCrew']; // Returns 5
spaceship['!!!!!!!!!!!']; // Returns undefined
// With backet notation you can also use a variable inside the brackets to select the keys of an object. This can be especailly helpful when working with functions;
let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, 'homePlanet'); // Returns Earth
/* If you tried to write the code 'returnAnyProp()' function with dot notation (objectName.propName) The computer would look for a key of 'propName'
on our object and not the value of the propName parameter. */

//EXAMPLE
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

const isActive = spaceship['Active Mission'] 
console.log(spaceship[propName]); // prints 'true'

/* PROPERTY ASSIGNMENT
	Once we've defined an object, we're not stuck with all the properties we wrote.
	Objects are mutable meaning we can update them after we create them!

	We can use either dot notation, ., or bracket notation [], and the assignement operator, = to add new key value pairs to an onject or change an existing property.
*/

spaceship['Fuel Type'] = 'vegetable oil'; 
spaceship.color = 'gold';

/* One of two things can happen with property assignment
	- If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
	- If there was no property with that name, a new property will be aded to the object.

It's important to know that although we can't reassign an object declared with const, 
we can still mutate it, meaning we can add new properties and change the properties that are there. */
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'};
// Typeerror: assignment to constant variable.
spaceship.type = 'alien';
// changes the value of the type property
spaceship.speed = 'Mach 5';
// creates a new key of 'speed' with a value of 'mach 5'

// You can delete a property from an object with the 'delete' opertor; 
const spaceship = {
	'Fuel Type': 'Turbo Fuel', 
	homePlanet: 'Earth',
	mission: 'Explore the universe'
};
delete spaceship.mission; // removes the mission property

//EXERCISE
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold' // changes color to glorious gold
spaceship['numEngines'] = 5; // inserts new property to object
spaceship.numEngines = 5; // checks property in object

delete spaceship['Secret Mission']; // deletes property

/* METHODS
	When the data stored on an object is a function we call that a method.
	A property is what an object has, while a method is what an onject does.

	For example, console is a global javascript object and .log is a method on that oobject
	Math is also a global javascript object and .floor() is a method on it.

	We can include methods in our object literals by creating ordinary, comma-seperated key-value pairs.
	The key serves as our method's name, while the value is an anonymous function expression. */

const alienShip = {
	invade: function () {
		console.log('Hello! we have come to dominate your planet. Instead of earth, it shall be called New Xaculon.')
	}
};
//With the new method syntax introdcued in ES6 we can omit the colon and the function keyword
const alienship = {
	invade () {
		console.log('Hello! we have come to dominate your planet. Instead of earth, it shall be called New Xaculon.')
	}
};
// Object methods are invoked by appending the objects name with the dot operator followed by the method name and parentheses 
alienShip.invade(); // prints the passage.

//EXERCISE
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};
alienShip.retreat();
alienShip.takeOff();

/* NESTED OBJECTS
	In application code, objects are often nested- an object might have another object as a property which in turn could have property that's an array of even more ojects!

	In our spaceship object, we want a crew object. This will contain all the crew memebers who do important work on the craft
	Each of those crew members are objects themselves. They have properties like name, and degree, and they each have unique methos based on their roles.
	We can also nest other objects in the spaceship such as telescope or nest details about the spaceships computers inside a praent nanoelectronics object.
*/
const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
};

/* We can chain operators to access nested properties. We'll have to pay attention to which operator makes sense to use in each layer.
	it can be helpful to pretend you are the computer and evaulate each expression from left to right so that each operation starts to fell a little more manageable.
*/
spaceship.nanoelectronics['back-up'].battery; // returns 'lithium'
/* In the preceding code;
	- First the computer evaulates 'spaceship.nanoelectronics', which results in an object containg the back-up and computer objects.
	- We accessed the back-up object by appending '[back-up']
	- The 'back-up' object has a battery property, accessed with '.battery' which returned the value stored of lithium.
*/

//EXERCISE
	let spaceship = {
  passengers: [{name: 'Space Dog'}], 
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0];

/* PASS BY REFERENCE

/* Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument,
  the computer iterprets the parameter name as pointing to the pace in memory holding that object. As a result, 
  functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable). */

const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // returns 'glorious gold'

/* our function 'paintIt()' permanently changed the color of our spaceship object.
  however, reassignment of the spaceship variable wouldn't work the same way; */

let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};

let tryReassignment = obj => {
  obj = {
    identified : false,
    'transport type' : 'flying'
  }
  console.log(obj) // prints {identified: false, transport type: flying}
};

tryReassignment(spaceship) // the attempt at reassignment does not work
spaceship // still returns {homePlanet: earth, color:red};

spaceship = {
  identified : false,
  'transport type' : 'flying'
}; // Regular reassignment still works.

/* What happened in the code example above,
  - We declared this spaceship object with let. This allowed us to reassign it to a new object,
    with identified and 'transport type' proerties with no problems

  - When we tried the same thing using a function designed to reassign the object passed into it,
    the reassignment didn't stick (even though calling console.log() on the object produced expected result).

  - When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object,
    but not the sapceship variable. This is because the obj parameter of the tryReassignment() function is a variale in its own right
    THe body of the tryReassignment() has no knowledge of the spaceship variable at all!

  - When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object
    {'identified' : false, 'transport type' : 'flying'}, while the spaceship variable was completely unchanged from its earlier value.) */

    // EXERCISE

    let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)

/* LOOPING THROUGH OBJECTS

  Loops are programming tools that repeat a block of code until a codition is met. 
  We learned how to iterate through arrays using their numerical indexing,
  but the key-value pairs in objects aren't ordered!
  JavaScript has given us aletnative solution for iterating through objects with 'for...in' syntax.

  for...in will execute a given block of code for each property in an object. */

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

/* Our 'for...in' will iterate through each element of the spaceship.crew object.
In each iteration, the variable crewMember is set to one of spaceship.crew's keys, 
enabling us to log a list of crew memeber' role and name. */

// EXERCISE

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};


