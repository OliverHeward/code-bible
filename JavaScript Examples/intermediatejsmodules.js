MODULE.EXPORTS

/* We can get started with modules by defining a module in one file and makng the module available for use in another file.
below is an example of how to define a module and how to export it using the statement 'module.exports' 

in menu.js we write */

let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;

/* Lets consider what this code means.

- let Menu = {}; creates the object that represents the module 'Menu'. 
	The statement contains an uppercase variable named 'Menu' which is set equal to an object.

- Menu.specialty is defined as a property of the Menu Module.
	We add data to the Menu object by setting properties on that object and giving the properties a value

- "Roasted Beet Burger with Mint Sauce"; is the value stored in the "menu.specialty" property.

- module.exports = Menu; exports the Menu object as a module. Module is a variable that represents the module,
	and exports exposes the module as an object.

The pattern we use to export modules is thus;
	- Define an object to represent the module
	- Add data or behavior to the module
	- Export the module.
*/
//Exercise
let Airplane = {};
Airplane.myAirplane = "StarJet";

module.exports = Airplane;


----- 

REQUIRE()

/* To make use of the exported module and the behavior we define within it, we import the module.
 A common way to do this is with the require() function.

For instance, say we want the module to control the menu's data and behavior, and we want a separate file to handle placing an order.
We would create a separate file order.js and import the Menu module from menu.js to order.js using require():

In order.js we would write: */

const Menu = require('./menu.js');

function placeOrder() {
	console.log('My order is: ' + Menu.specialty);
}

placeOrder();

/* We now have the entire behavior of Menu available in order.js. Here, we notice:

 - In order.js we import the module by creating a variable with const called Menu and setting it equal to the value of the require() function. 
	We can set this variable to any variable name we like, such as menuItems.
 - require() is a JavaScript function that enables a module to load by passing in the module's filepath as a parameter.
 -'./menu.js' is the argument we pass to the require() function.
 - The placeOrder() function then uses the Menu module in its function definition. 
 	By calling Menu.specialty, we access the property specialty defined in the Menu module.
 - We can then invoke the function using placeOrder()

Taking a closer look, the pattern to import a module is:

 - Import the module
 -Use the module and its properties within a program. */


// EXERCISE 
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();



-------
MODULE.EXPORTS 2

/* We can also wrap any collection of data and functions in an object,
	and export the object using module.exports. In menu.js we could write */

let Menu = {};

module.exports = {
	specialty: "Roasted Beet Burger with Mint Sauce",
	getSpecialty: function() {
		return this.specialty;
	}
};

/* In the above code, notice; 

	- module.exports exposes the current module as an object
	- specialty and getSpecialty are properties on the object.

Then in order.js we write: */

const Menu = require('./menu.js');

console.log(Menu.getSpecialty());
// Here we can still access the behavior in the Menu module.


// EXERCISE - note these are on two seperate js files.
let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

//JS file 2
const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());


----------

EXPORT DEFAULT 
/* As of ES6, JS has implemented a new more readable and flexible syntax for exporting modules. 
	These are usually broken down into one or two techniques, default export and named exports.

We'll begin with the first syntax, default export. The default export syntax works similarly to the module.exports syntax,
	allowing us to export one module per file.

see below */

let Menu = {};

export default Menu;

/* 
 - export default uses the JavaScript export statement to export JavaScript objects, functions,
 	 and primitive data types.

 - Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules.

When using ES6 syntax, we use export default in place of module.exports. */

// Exercise

let Airplane = {
};

Airplane.availableAirplanes = [
  {
    name: 'AeroJet',
  	fuelCapacity: 800,
},
  {name: 'SkyJet',
  	fuelCapacity: 500,
  }
 ];

export default Airplane;


-------------

IMPORT 

/* ES6 module syntax also introduces the import keyword for importing objects.
	in our order.js example, we import an object like this; */

import Menu from './menu';

/*
	- The import keybowrd begins the statement
	- The keyword Menu here specifies the name of the variable to store the default export in
	- from specifies where to load the module from 
	- './menu' is the name of the module to load.
		When dealing with local files, it specifically refers to the name of the file without the extension of the file
*/

// EXERCISE

import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element)
{
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity(); 

----------------

NAMED EXPORTS 

/* ES6 introduced a second common approach to export modules. In addtion to defualt export, named exports allow us to export data through the use of variables

Lets see how this works. In menu.js we would be sure to give each piece of data a distinct variable name; */ 


let specialty = '';
function isVegetarian() {
};
function isLowSodium() {	
};

export { specialty, isVegetarian};

/* 
	- Notice that, when we use the named exports,
		we are not setting the properties on an object. Each export is stored in its own variable
	- Specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions.
		Recall that in JS every function is in fact a function object.
	- export { specialty, isVegetarian}; exports objects by their variable names. Notice the keyword export is the prefix
	- specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified.
*/

// EXERCISE

let availableAirplanes = [
  {
    name: 'AeroJet',
  	fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 },
  {name: 'SkyJet',
  	fuelCapacity: 500,
   	availableStaff: ['pilots', 'flightAttendants'],
  }
 ];

let flightRequirements = {
  requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export {availableAirplanes, flightRequirements, meetsStaffRequirements};

---------------

NAMED IMPORTS 
/* To import objects store in a variable, we use the import keyword and include the variables in a set of {}.

in the order.js file, for example, we would write: */

import { specialty, isVegetarian } from './menu';

console.log(specialty);

/* 
	- Here, 'specialty' and 'isVegetarian' are imported
	- If we did not want to import either of these variables, we could omit them form the 'import' statement
	- We can then use these objects as in within our code. For example, we would use 'specialty' instead of 'menu.specialty'

	*/

// EXERCISE

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

-----------------

EXPORT NAMED EXPORTS 

/* Named exports are also distinct in that they can be exported as soon as they are declared, 
	by placing the keyword 'export' in front of variable declarations. */

export let specialty = '';
export function isVegetarian() {
};
function isLowSodium() {
};

/* 
	- The 'export' keyword allows us to export objects upon declaration,
		as shown in export let specialty and export function isVegetarian() {}
	- We no longer need an export statement at the bottom of our file, since this behavior is handled above 
*/

//EXERCISE 

export let availableAirplanes = [
{name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
    } else {
    return false;
  }
};

-----------------
IMPORT NAMED IMPORTS 

/* To import variables that are declared, we simply use the original syntax that describes the variable name.
	In other words, exporting upon declaration does not have an impact on how we import the variables. */

import { specialty, isVegetarian } from 'menu';
-----------------------------------------------
//EXERCISE


import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element){
       console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}
displaySpeedRangeStatus();

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']) );
  });
}

displayStaffStatus();

-------------------------------------

EXPORT AS 

/* Named exports also conveniently offer a way to change the name of variables when we export or import them.
	We can do this with the 'as' keyword.

	Let's see how this works. In our menu.js example */

let specialty = '';
let isVegetarian = function () {
};
let isLowSodium = function() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

/* In the above example, take a look at the 'export' statement at the bottom of the file.

	- The 'as' keyword allows us to give a variale name as alias as demonstrated in
		'specialty as chefsSpecial' and 'isVegetarian as isVeg'.
	- Since we did not give 'isLowSodium' an alias, it will maintain its original name.
*/
	// EXERCISE -- using alias exports

	let availableAirplanes = [
{name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}
];

let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
    } else {
    return false;
  }
};

export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };

--------------------------------

IMPORT AS 
// To import named export aliases with the 'as' keyword, we add the aliased variable in our import statement

import { chefsSpecial, isVeg } from './menu';

/* in orders.js

	- we import 'chefsSpecial' and 'isVeg' from the 'Menu' object.
	- Here, note that we have an option to alias an object that was not previously aliased when exported.
		for example, the isLowSodium object that we exported could be aliased with the as keyword when imported:
		import {isLowSodium as saltFree} from 'Menu';

Another way of using aliases is to import the entire module as an alias; */

import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();

/* 
	- This allows us to import an entire module from menu.ks as an alias 'Carte'
	- In this example, whatever name we exported would be available to us as properties of that module.
		for example, if we exported the aliases chefSpecial and isVeg, these would be available to us.
		If we did not give an alias to isLowSodium, we would call it as defined on the carte module. */


// EXERCISE --- CHANGED VARIABLES TO ALIASES

import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element){
       console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
}
displaySpeedRangeStatus();

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + meetsStaffReqs(element['availableStaff'], flightReqs['requiredStaff']) );
  });
}

displayStaffStatus();

--------------------

COMBINING EXPORT STATEMENTS 

/* We  can also use named exports and defaults exports together. In menu.js */

let specailty = '';
function isVegetarian() {
};
function isLowSodium() {
};
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg};
export default isGlutenFree;

/* In this we use the keyword export to export the named exports at the bottom of the file. 
	Meanwhile, we export the 'isGlutenFree' variable using the export defualt syntax.

This would also work if we exported most of the variables as declared and exported others with the export default syntax. */

export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
};
export let isLowSodium = function() {
};
let isGlutenFree = function() {
};

export default isGlutenFree;

/* Here we use the export key word to export variables upon declaration, 
	and again export the isGlutenFree variale using the export default syntax.

While its better to avoid combining two methods of exporting, it is useful on occassion.
	For example, if you suspect developers may only be interested in importing a specific function and won't need to import the entire default export.
*/

---------------------------

COMBINING IMPORT STATEMENTS 
/* We can import the collection of objects and functions with the same data

we can use an import keyword to import both types of variables as such */

import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';

// EXERCISE 

import { availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();



















