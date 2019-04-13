//caniuse.com can be used to see if ES5/ES6 syntax is useable on different browsers!

CANIUSE.COM 2;

/* there is a JS library built by developers that allows you to transpile your ES6 code back into ES5,

this is babel 

run these into terminal */

npm install babel-cli

npm install babel-preset-env

npm run build


/* The first step is to place your ES6 JS file in a directory called src. 
	From your root directory, the path to the ES6 file is ./src/main.js 

	The initial JavaScript project file structure is; */

project 
|_ src
|___ main.js 


/* Before we can add Babel to our project directory, we need to run 'npm init'.
	The 'npm init' command creates a package.json file in the root directory. 

	A package.json file contains information about the current JavaScript project - some of this info includes 

	- Metadata - this includes a project title, description, authors and more.
	- A list of node packages required for the project - if another developer wants to run your project
		npm looks inside package.json and downloads the packages in this list.
	- Key-Value pairs for commmand line scripts - you can use npm to run these shorthand scripts to perform some process.
		in a later exercise, we will add a script that runs babel and transpiles ES6 to ES5. */


npm init  // creates a json package.


INSTALL NODE PACKAGES 
/* We use the npm install command to install new node packages locally. The install command creates a folder called node_modules and copies the package files to it.
	The install ommad also installs all of the dependencies for the given package.

To install Babel, we need to npm install two packages, babel-cli and babel-preset-env.
However, npm installs over one hundred other packages that are depenedencies for babel to run properly.

We install babel with the following two commands; */

$ npm install babel-cli -D 
$ npm install babel-preset-env -D 

/* The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature,
ES6 and above (ES6+) to ES5.

The -D flag instrcuts NPM to add each package to a property called devDepenedencies in package.json.
once the project's dependencies are listed in devDependencies, Other developers can run your project without installing each package separately.
Instead, they can simply run npm install --- it instructs npm to look inside the package.json and download all of the packages listed in devDependencies.


Once you npm install packages, you can find the Babel packages and all their dependencies in the node_modules folder. The new directory structure contains the following; */

project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ package.json

// The ... in the file structure above is a placeholder for 100+ packages that npm installed.


.BABELRC
/* You can specifiy the initial JavaScript version insde of a file named .babelrc 
	in your root directory, you can run;
	touch .babel rc 
	to create this file;

	Your project directory contains the following folders and files; */

project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json

/* Inside .babelrc you need to define the preset for your source JavaScript file. The preset specifies the version of your initial JavaScript file.

Usually you want to transpile JavaScript code from versions ES6 and later (ES6+) to ES5. From this point on, we will refer to our source code as ES6+,
because ECMA introduces new syntax with each new version of JavaScript.

To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc: */

{ 
	"presets": ["env"]
}

/* When you run Babel, it looks in .babelrc to determine the version of the inital JavaScript file. In this case,
 ["env"] instructs babel to transpile any code from versions ES6 and later. */

 BABEL SOURCE LIB 
/* There is one last step before we can transpile our code. We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.

Inside of the package.json file, there is a property named "scripts" that holds an object for specifying command line shortcuts. it looks like this; */
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}, ...

/* In the code above, the 'scripts' property contains an object with one propety called 'test'.
Below the 'test' property, we will add a script that runs babel like this; */

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}

/* In the "scripts" object above, we add a property called "build". 
The property's value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. 
Let's consider each argument in the method call:

babel — The Babel command call responsible for transpiling code.
src — Instructs Babel to transpile all JavaScript code inside the src directory.
-d — Instructs Babel to write the transpiled code to a directory.
lib — Babel writes the transpiled code to a directory called lib.

In the next exercise, we'll run the babel src -d lib method to transpile our ES6+ code. */


BUILD 
/* We're ready to transpile our code! In the last exercise, we wrote the following script in package.json; */

"build": "babel src -d lib"

/* Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called 'lib';
from the command line we type; */

npm run build 

/* The command above runs the build script in package.json

Babel writes the ES5 code to a file named main.js (its always the same name as the original file),
inside of a folder called 'lib'. The resulting directory structure is; */


project
|_ lib
|___ main.js
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json

/* Notice that there is a new folder called lib.

The npm run build command will transpile all JS files inside the src folder.
This is helpful as you build larger JavaScript projects - regardless of the number of JS files, you only need to run one command
(npm run build) to transpile all of your code. */

// EXERCISE

npm init 

babel project (hit enter till done)

npm install babel-cli -D 

npm install babel-env -D 

touch .babelrc 

(navigate to babelrc in directory)

(navigate to package.json to add build) 
- "build": "bable src -d lib";

npm run build 











