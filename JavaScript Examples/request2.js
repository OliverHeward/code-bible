==== INTRODUCTION TO REQESTS WITH ES6 ====;

/* Many web page interactions rely on asynchronous events,
so managing these events is essential to good web development.

To make asynchronous event handling easier, promises were introduced in JavaScript in ES6:

A promise is an object that handles asynchronous data. 
A promise has three states;

	- Pending: when a promise is created or waiting for data
	- Fulfilled: the asynchronous operation was handled successfully
	- Rejected: the asynchronous operation was unsuccessful

The great thing about promises is that once a promise is fulfilled or rejected,
you can chain an additional method to the original promise.

This will explain how to use fetch(). 
Which uses promises to handle requests. 
Then, we will simplify requests using 'asyc' and 'await'.

We'll use the Datamuse API for GET requests and Rebrandly URL Shortener API for POST requests.
*/

==== Fetch() GET REQUESTS 2 ====;

// EXERCISE

fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json(); }
  throw new Error('Request failed!')
  }, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});

==== FETCH() GET REQUESTS 3 ====;

//main.js
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  fetch(endpoint).then(response => {
    if (response.ok === true) {
      return response.json(); }
      throw new Error('Request failed!');
  }, (networkError) => {
    console.log(networkError.message);
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

//helperFunction.js

// Formats response to look presentable on webpage
const renderResponse = (res) => {
  // Handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }

  // Creates an empty array to contain the HTML strings
  let wordList = [];
  // Loops through the response and caps off at 10
  for(let i = 0; i < Math.min(res.length, 10); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join("");

  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return
}

// Renders response before it is modified
const renderRawResponse = (res) => {
  // Takes the first 10 words from res
  let trimmedResponse = res.slice(0, 10);
  // Manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (res) => {
  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for(let key in res){
    rawJson[key] = res[key];
  }
  // Converts JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
  // Manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`;
}


==== FETCH() GET REQUESTS 4 ====;

//main.js
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);


//helperFunction.js
// Formats response to look presentable on webpage
const renderResponse = (res) => {
  // Handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }

  // Creates an empty array to contain the HTML strings
  let wordList = [];
  // Loops through the response and caps off at 10
  for(let i = 0; i < Math.min(res.length, 10); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join("");

  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return
}

// Renders response before it is modified
const renderRawResponse = (res) => {
  // Takes the first 10 words from res
  let trimmedResponse = res.slice(0, 10);
  // Manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (res) => {
  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for(let key in response){
    rawJson[key] = response[key];
  }
  // Converts JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
  // Manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`;
}


==== ASYNC GET REQUESTS 1 ====;

/* What we've accomplished so far; 

	- used fetch() to make GET and POST requests.
	- check the status of the responses coming back
	- catch errors that might possibly arise
	- taking successful responses and rendering it on the webpage

next will be implementing ES8 syntax such as;
	- async
	- await
	- try
	- catch */

==== ASYNC GET REQUESTS 2 ====;

/* Some key points to keep in mind 

	- Using an 'async' function that will return a promise
	- 'await' can only be used in an 'async' function.
		'await' allows a program to run while waiting for a promise to resolve
	- In a 'try...catch' statement, code in the 'try' block will be run and in the vent of an expection/error,
		the code in the 'catch' statement will run. */

const getData = async () => {
  try { 
    const response = await fetch('https://api-to-call.com/endpoint');
          if (response.ok) {
           const jsonResponse = await response.json();
            return jsonResponse;
          }
    throw new Error('Request failed!');
	} catch(error) {
  console.log(error);
  }
};

==== ASYNC POST REQUESTS 1 ====;

/* Now that we've made an async GET request, lets start on getting familiar to the async post request;

As with the other GET and POST requests that we've made, an async post request requires more information. 

--- see download for async post request ----

We still have the same structure of using 'try' and 'catch' as before.
But, in the fetch() call, we now have to include an additional argument that contains more information like 'method' and 'body.

We'll be examplaining the whys and hows of the boilerplate code for async POST requests in the next lesson.
*/

// EXERCISE

//main.js
// information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
			method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


//helperFunction.js
// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {  
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
}

// Manipulates responseField to render an unformatted response
const renderRawResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){  
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Adds line breaks for JSON
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
    structuredRes = `<pre>${structuredRes}</pre>`;
    responseField.innerHTML = `${structuredRes}`;
  }
}


