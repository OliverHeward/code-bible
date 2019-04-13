INTRODUCTION TO CLASSES -- 

/* JavaScript is an object-oriented programming (OOP) language we can use to model real-world items.
Classes are a tool that developres use to quickly produce similar objects.

Take for example, an object represent a dog named 'halley'.
This dog's 'name' (a key) is "Halley" (a value) and has an 'age' (another key) of 3 (another value).
We create the halley object below like so */

let halley = {
	_name: 'Halley',
	_behavoir: 0,

	get name() {
		return this._name;
	},

	get behavior() {
		return this.behavior;
	},

	incrementBehavior() {
		this._behavoir++;
	}
};


/* Now imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare.
Instead of using the syntax above for everydog that joins the daycare, we can create a 'dog' class that serves as a template for creating new 'dog' objects.
For each new dog, you can provide a value for their name.

As you can see, classes are a great way to reduce duplicate code and debugging time.

After we lay the foundation for classes in the first few exercises, we will soon introduce inheritance and static methods -
two features that will make your code efficient and meaningful. */

// EXERCISE

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
};

const halley = new Dog('Halley');
console.log(halley.name); // prints halley 

console.log(halley.behavior); // prints 0 

halley.incrementBehavior(); // adds 1 too behavior 

console.log(halley.name); // prints halley

console.log(halley.behavior); // prints 1


CONSTRUCTOR -- 
/* In the last exercise, we created a class called 'dog', and used it to produce a 'dog' object.
Although you may see similatiries between class and object syntax, 
there is one important method that sets them apart.
Its called the 'constructor' method. Javascript calls the constructor() method ever time it creates a new instace of a class. */

class Dog {
	constructor(name) {
		this.name = name;
		this.behavior = 0;
	}
};
/* 
	- Dog is the name of our class. By convention, we capitalize and CamelCase class names.
	- JavaScript will invoke the constructor() method every time we create a new instace of our 'Dog' class.
	- This constructor() method accepts on argument 'name'.
	- Inside of the constructor() method, we use the 'this' keyword. 
		In context of a class, 'this' referes to an instance of that class.
		In the 'dog' class, we use 'this' to set the value of the Dog instances 'name' property to the 'name' argument.
	- Under 'this.name', we create a property called behavior, which will keep track of the number of times a dog misbehaves.
		The bheavior property is always initialized to zero. */

// EXERCISE

class Surgeon {
	constructor(name, department) {
		this.name = name;
		this.department = department;
	}
};

INSTANCE --
/* An instance is an object that contains the property names and methods of a class,
but with unique property value. Lets look at our 'dog' class example. */

class Dog {
	constructor(name) {
		this.name = name;
		this.behavior = 0;
	}
}

const halley = new Dog('Halley'); // Creates a new dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'

/* Below our 'Dog' class, we use the 'new' keyword to create an instance of our dog class.
Lets consider the line of code step-by-step

	- We create a new variable named 'halley' that will store an instace of our 'dog' class.
	- We use the 'new' keyword to generate a new instace of the 'dog' class.
		The 'new' keyword calls the 'constructor()', runs the coe inside of it, and then returns the new instance.
	- We pass the 'Halley' string to the 'dog' constructor, which sets the 'name' property to "Halley"
	- Finally, we log the value saved to the name key in our 'halley' object, which logs 'Halley' to the console. */

// Exercise - creating instance's to add new surgeons to data

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
};

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

// console.log(surgeonCurry);

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// console.log(surgeonDurant);


METHODS -- 
/* At this point, we have a 'Dog' class that spins up objects with 'name' and 'behavior' properties.
	Below, we will add getters and a method to bring our class to life.

	Class method and getter syntax is the same as it is for objects 
	EXCEPT YOU CAN NOT INCLUDE COMMANS BETWEEN METHODS. */

class Dog {
	constructor(name) {
		this._name = name;
		this._behavior = 0;
	}

	get name() {
		return this._name;
	}

	get behavior() {
		return this._behavior;
	}

	incrementBehavior() {
		this._behavior++;
	}
}

/* In the example above, we add getter methods for 'name' and 'behavior'.
	Notice, we also prepended our property names with underscoes (_name_ and _behavior),
	which indicate these properties should not be accessed directly. 
	Under the getters, we add a method named .incrementBehavior().
	When you call .incrementBehavior() on a dog instace, it adds 1 to the _behavior property.
	Between each of our methods, we did not include commas. */

// EXERCISE -- adding getters and a method to a class. 

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


METHOD CALLS --- 
// Finally, lets use our new methods to access and manipulate data from 'Dog' instances.

class Dog {
	constructor(name) {
		this._name = name;
		this._behavior = 0;
	}

	get name() {
		return this._name;
	}

	get behavior() {
		return this._behavior;
	}

	incrementBehavior() {
		this._behavior++;
	}
}

const halley = new Dog('Halley');


/* In the example above, we create the dog class, then create an instance,
and save it to a variable named Halley.

The syntax for calling methods and getters on an instace is the same as calling them on an object,
append the instance with a period, then the property or method name. 
For methods, you must also include opening and closing parentheses.

Lets take a meoment to create two dog instaces and call our .incrementBehavior() method on one of them */

let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko's instance's behavior
let bradford = new Dog('Bradford'); // Create dog named Bradford

console.log(nikko.behavior); // logs 1 to the console

console.log(bradford.behavior); // logs 0 to the console.


/* In the example above, we create two new 'Dog' instaces, nikko and bradford.
Because we increment the behavior of our nikko instace, but not bradford,
accessing nikko.behavior returns 1 and accessing bradford.behavior returns 0. */

// EXERCISE -- using console log to log the name, then call taken vacation days then log

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name); // prints Curry 

surgeonCurry.takeVacationDays(3); // Takes away 3 days 
console.log(surgeonCurry.remainingVacationDays); // prints remaining days 20 - 3 = 17.


INHERITANCE 1 --- 
/* Imagine our doggy daycare is so successful that we decide to expand the business and open a kitty daycare.
Before the daycare opens, we need to create a 'Cat' class so we can quickly generate 'Cat' instances.
We know that the properties in our 'Cat' class (name, behavior) are similar to the properties in our dog class, though,
there will be some differences because of course cats are not dogs.

Take a look below at the cat class */

class Cat {
	constructor(name, usesLitter) {
		this._name = name;
		this._usesLitter = usesLitter;
		this._behavior = 0;
	}

	get name() {
		return this._name;
	}

	get usesLitter() {
		return this._usesLitter;
	}

	get behavior() {
		return this._behavior;
	}

	incrementBehavior() {
		return this._behavior++;
	}
}

/* In the example avove, we create a 'cat' class. It shares a couple of properties (_name and _behavior) and a method
(.incrementBehavior()) with the 'dog' class from earlier exercises. 
The cat class also contains one additional property (_usesLitter), that holds a boolean value to indicate whether a cat can use their litter box.

When multiple classes share properties or methods, they become candidates for inheritance - a tool developers use to decrease the amount of code they need to write.

With inheritance, you can create a parent class (also known as a superclass) with properties and meothds that multiple child classes (also known as subclasses) share.
The child classes inherit the properties and methods from their parent class.

Lets abstract the shared properties and methods from our 'cat' and 'dog' classes into a parent called Animal! */


class Animal {
	constructor(name) {
		this._name = name;
		this._behavior = 0;
	}

	get name() {
		return this._name;
	}

	get behavior() {
		return this._behavior;
	}

	incrementBehavior() {
		this._behavior++;
	}
}

/* In the example above, the 'Animal' class contains the properties and methods that the 'Cat' and 'Dog' classes share
(name , behavior, .incrementBehavior() ). */

INHERITANCE 2 ---
/* in the last exercise, we create a parent class named 'Animal' for two child classes named 'Cat' and 'Dog'

The animal class below contains the shared properties and meethods of cat and dog. */

class Animal {
	constructor(name) {
		this._name = name;
		this._behavior = 0;
	}

	get name() {
		return this._name;
	}

	get behavior() {
		return this._behavior;
	}

	incrementBehavior() {
		return this._behavior++;
	}
}

// The code below shows the cat class that will inherit information from the animal class.

class Cat {
	constructor(name, usesLitter) {
		this._name = name;
		this._usesLitter = usesLitter;
		this._behavior = 0;
	}

	get name() {
		return this._name;
	}

	get behavior() {
		return this._behavior;
	}

	get usesLitter() {
		return this._usesLitter;
	}

	incrementBehavior() {
		return this._behavior++;
	}
}


// EXERCISE -- BUILD OWN PARENT AND CHILDREN INHERITANCE SYSTEM

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    return this._remainingVacationDays -= daysOff;
  }
}

class Doctor {
  constructor(name, remainingVacationDays, insurance) {
    this._name = name;
    this._remainingVacationDays = 20;
    this._insurance = insurance;
  }
  
  takeVacationDays() {
    return this._takeVacationDays;
  }
}


class Nurse {
  constructor(name, remainingVacationDays, certifications) {
    this._name = name;
    this._remainingVacationDays = 20;
    this._certifications = certifications;
  }
  
  takeVacationDays() {
    return this._takeVacationDays;
  }
}


INHERITANCE 3 ----
/*  We've abstracted the shared properties and methods of our 'Cat' and 'Dog' classes into a parent class called Animal (below) */

class Animal {
	constructor(name) {
		this._name = name;
		this._behavior = 0;
	}

	get name() {
		return this._name;
	}

	get behavior() {
		return this._behavior;
	}

	incrementBehavior() {
		this._behavior++;
	}
}

/* Now that we have these shared properties and methods in the parent Animal class,
we can extend them to a subclass, Cat. */

class Cat extends Animal {
	constructor(name, usesLitter) {
		super(name);
		this._usesLitter = usesLitter;
	}
}

/* In the example above, we create a new class named 'Cat' that extends the Animal class.
Lets pay special attention to our new keywords extends and super.

	- The 'extends' keyword makes the methods of the animal class available inside the cat class.
	- The constructor, called when you create a new 'Cat' object, 
		accepts two arguments, name and usesLitter.
	- The 'super' keywords calls the constructor of the parent class In this case, 
		super(name) passes the name argument of the cat class to the constructor of the Animal class.
		When the animal constructor runs, it sets this._name = name; for new cat instances
	- _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.

Notice, we call super on the first line of our constructor(), then set the usesLitter property on the second line.
In a constructor(), you must always call the 'super' method beore you can use the 'this' keyword.
If you do not JavaScript will throw a reference error.
To avoid reference errors, it is best practice to call 'super' on the first line of subclass constructors.

Below, we create a new Cat instance and call its name with the same syntax  as we did with the dog class: */

const bryceCat = new Cat('Bryce', false);
console.log(bryceCat._name); // Output: Bryce

/* In the example above, we create a new instance the 'Cat' class, 
named BryceCat. We pass it 'Bryce' and false for our name and usesLitter arguments.
When we call 'console.log(bryceCat._name)' our program prints Bryce. */


// EXERCISE -- Practice inheriting using super and also using instance to add new nurse to it

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);



INHERITANCE 4 ---

/* Now that we know how to create an object that inherits properties from a parent class, lets turn our attention to methods.

When we call 'extends' in a class declaration, all of the parent methods are available to the child class.

Below, we extend our 'Animal' class to 'Cat' subclass. */

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
} 


class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

const bryceCat = new Cat('Bryce', false);

/* In the example above, our 'Cat' class extends 'Animal'. As a result,
the cat has access to the animal getters and the .incrementBehavior() method.

Also in the code above, we create a 'cat' instace named 'bryceCat'. 
Because 'bryceCat' has access to the name getter, the code below logs 'Bryce' to the console */

console.log(bryceCat.name);

/* Since the 'Extends' keyword brings all of the parent's getters and methods into the child class,
bryceCat.name accesses the name getter and returns the value saved to the name property.

Now consider a more involved example and try to answer the following question: what will the code below log to the console? */

bryceCat.incrementBehavior();
// increments behavior by 1

console.log(bryceCat.behavior); // logs the saved value.

/* The correct answer is 1. But why?

- The Cat class inherits the _behavior property, behavior getter, and the .incrementBehavior() method from the Animal class.
- When we created the bryceCat instance, the Animal constructor set the _behavior property to zero.
- The first line of code calls the inherited .incrementBehavior() method, which increases the bryceCat _behavior value from zero to one.
- The second line of code calls the behavior getter and logs the value saved to _behavior (1). */

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);


INHERITANCE 5 ---

/* In addtion to the inherited features, child classes can contain their own properties, getters, setters and methods.

Below, we will add a usesLitter getter. The syntax for creating getters, setters and methods is the same as it is in any other class. */

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }

  get usesLitter() {
    return this._usesLitter;
  }
}

/* In the example above, we create a usesLitter getter in the Cat class that returns the value saved to _usesLitter.

Compare the 'Cat' class above to the one we created without inheritance */

class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get usesLitter() {
    return this._usesLitter;
  }

  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior++;
  }
}

/* We decreased the number of lines required to create the 'Cat' class by about half, Yes it did require an extra class (Animal),
 making the reduction in the size of our 'Cat' class seem moot. However, the benefits (time saved, readability, efficiency) or inheritance hrow as the numberand size of your subclasses increase.

 One benefit is that when you need to change a method or property that multiple classes share,
 you can change the parent class, instead of the subclass.

 Before we move past inheritance, take a moment to see how we would create an additional subclass called Dog.
*/

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
}

/* This dog class has access to the same properties, getters, setters, and meothds as the dog class we made without inheritance,
and is a quarter of the size.

Now that we've abstracted animal daycare features, its easy to see how you can extend Animal to support other classes, like
Rabbit - Bird - Snake. */

// EXERCISE ----

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);


STATIC METHODS ----
/* Sometimes you will want a class to have methods that aren't available in individual instances,
but that you can call directly form the class.

Take the 'Date' class, for example - you can both create 'data' instances to represent whatever date you want,
and call tatic methods, like 'Date.now()' which returns the current date, directly from the class.
The .now() method is static, so you can call it directly from the class, but not form an instance of the class.

Let's see how to use the 'static' keyword to create a static method called 'generateName' method in our 'Animal' class: */

class Animal {
	constructor(name) {
		this._name = name;
		this._behavior = 0;
	}

	static generateName() {
		const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
		const randomNumber = math.floor(Math.random()*5);
		return names[randomNumber];
	}
}

/* In the example above, we create a static method called .generateName() that returns a random name when it's called.
Because of the static keyword, we can only access .generateName() by appending it to the animal class.

We call the .generateName() method with the following syntax: */

console.log(Animal.generateName());

/* You cannot access the .generateName() method from instances of the 'Animal' class or instances of its subclasses (see below); */

const tyson = new Animal('Tyson');
tyson.generateName(); // TypeError

/* The example above will result in an error. because you cannot call static methods
(.generateName()) on an instace (tyson). */


// EXERCISE --- USING STATIC TO CREATE A RANDOM PASSWORD FROM MATHFLOOR

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);



