/* WHALE TALK 
	Take a phrase like 'turpetine and turtles' and translate it into its "whale talk" equivalent;
	'UUEEIEEAUUEE'

	Theres a few simple rules for translating text to whale language;

	- There are no consonants. Only vowels exluding 'y'
	- The u's and e's are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean

To accomplish this translation we can use our knowledge of loops. */

let input = 'Dolphins and Sharks are basically family';
input = input.toLowerCase();

console.log("LENGTH OF STRING", input.length);

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
	// console.log( `inputIndex is ${inputIndex}`);
  
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    //console.log( `vowelIndex is ${vowelIndex}`);
		if (input[inputIndex] === vowels[vowelIndex]) {
    resultArray.push(input[inputIndex])
  } 
}
if (input[inputIndex] === 'e') {
  resultArray.push(input[inputIndex])
}

if (input[inputIndex] === 'u') {
  resultArray.push(input[inputIndex])}
}
console.log(resultArray.join('').toUpperCase());