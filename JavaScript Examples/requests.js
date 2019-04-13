==== INTRODUCTION TO REQUESTS ====;

/* Have you ever wondered what happens after you click a "Submit" button on a web page? For instance, 
if you are submitting information, 
where does the information go? How is the information processed? 
The answer to the previous questions revolves around HTTP requests.

There are many types of HTTP requests. The four most commonly used types of HTTP requests are 
GET, POST, PUT, and DELETE. In this lesson, we'll cover GET and POST requests.

With a GET request, we're retrieving, or getting, information from some source (usually a website). 
For a POST request, we're posting information to a source that will process the information and send it back.

In this lesson, we will explain how to make GET and POST requests by using JavaScript's XHR object. 
We'll also incorporate query strings into our requests.

We'll use the Datamuse API for GET requests and the Rebrandly URL Shortener API for POST requests. 
To complete the exercise on POST, make sure you create a Rebrandly API Key by following the instructions in the article below:

Codecademy Articles: Rebrandly URL Shortener API . */

==== HTTP REQUESTS ====;

/* One of JavaScript's greatest assests is its non-blocking properties,
or that it is an asynchronous language.

Websites, like newspaper wesites take advatnage of these non-blocking properties to provide a better user experience.
Genereally a sit's code is written so that users don't have to wait for a giant image to load beofre being allow to read the actual artical
	rather, that text is rendered first and then the image can load in the background.

JavaScript uses an event loop to handle asynchronous function calls.
	When a program is run, function calls are made and added to a stack.
	The functions that make requests that need to wait for servers to respeond then get sent a seperate queue.
	Once the stack has cleared, then the functions queue are executed.

Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events.
	We'll be exploring one system of technologies called Asynchronous JavaScript and XML or AJAX.
*/

console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500); // changing to 0 makes it still run last
console.log('Second message!');

==== XHR GET REQUESTS 1 ====; 

/* asynchronous JavaScript and XML (AJAX), enables requests to be made after the intial page load.
Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats.

SEE BOOKMARK AND IMAGE - XML introduction | MDN

Similarly, the XMLHttpRequest (XHR) API, named for XML, can ne used to make many kinds of requests and support sother forms of data

Remember, we use GET to retrieve data from a source. (IMAGE/XML) ->
	The boilerplate code in the diagram to see how the make an XHR GET request.

We'll construct this template from scrath in a different exercise and walk through what each step does.
*/

=== XHR GET REQUESTS 2 ====;

/* put this to test in making a boiler point */

// exercise

const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
   return xhr.response;
  }
};

xhr.open('GET', url);
xhr.send();

===== XHR GET REQUESTS 3 ====;

/* By this point, we've got an idea how to write the boilercode for an AJAX request using an XHR object.

In this excerise, 
we will incoroperate that boilerplate code to make a GET request to the Datamuse API to search for words that ryhme! */


// EXERCISE
// main.js
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) { renderResponse(xhr.response)
  } 
 xhr.open('GET', endpoint);
 xhr.send();
}
};
// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault()
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  };
  getSuggestions();
};


submit.addEventListener('click', displaySuggestions)

// helperFunction.js

// Formats response to look presentable on webpage
const renderResponse = (res) => {
  // handles if res is falsey
  if(!res){
    console.log(res.status)
  }
  // in case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>"
    return
  }

  // creating an array to contain the HTML strings
  let wordList = []
  // looping through the response and maxxing out at 10
  for(let i = 0; i < Math.min(res.length, 10); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`)
  }
  // joins the array of HTML strings into one string
  wordList = wordList.join("")

  // manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`
  return
}

// Renders response before it is modified
const renderRawResponse = (res) => {
  // taking the first 10 words from res
  let trimmedResponse = res.slice(0, 10)
  //manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (res) => {
  // creating an empty object to store the JSON in key-value pairs
  let rawJson = {}
  for(let key in response){
    rawJson[key] = response[key]
  }
  // converting JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
  // manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`
}

==== XHR GET REQUESTS 4 ====;

/* In the previous exercise, we made a GET request to the Datamuse API to find words that rhyme.
In this exercise, we will create a request to set a topic and find adjectives that describe the input word using query strings.

A query string contains additional infromation to be sent with a request. 
The Datamuse API allows us to retriee more specific data with query strings attached to the rquest URL.

- see bookmark - wiki: query string

A query string is seperated from the URL using a ? character.
After ?, you can then create a parameter which is a key balue pair joined by a =.

'https://api.datamuse.com/words?key=value'

If you want to add an additional parameter you will have to use the & character to separate your parameters. like so;

'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'
*/
// EXERCISE 
// main.js
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

//helperFuction.js

// Formats response to look presentable on webpage
const renderResponse = (res) => {
  // handles if res is falsey
  if(!res){
    console.log(res.status)
  }
  // in case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>"
    return
  }

  // creating an array to contain the HTML strings
  let wordList = []
  // looping through the response and maxxing out at 10
  for(let i = 0; i < Math.min(res.length, 10); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`)
  }
  // joins the array of HTML strings into one string
  wordList = wordList.join("")

  // manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`
  return
}

// Renders response before it is modified
const renderRawResponse = (res) => {
  // taking the first 10 words from res
  let trimmedResponse = res.slice(0, 10)
  //manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (res) => {
  // creating an empty object to store the JSON in key-value pairs
  let rawJson = {}
  for(let key in response){
    rawJson[key] = response[key]
  }
  // converting JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
  // manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`
}



==== XHR POST REQUESTS 1 ====;

// Exercise 

const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';

const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
  xhr.open('POST', url);
  xhr.send(data);
}

==== XHR POST REQUESTS 3 ====;

// Exericse
//main.js
// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  		renderResponse(xhr.response);
		}
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
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


//helperFunction 
// manipulate responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>"
  } else {
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`
  }
}

// manipulate responseField to render an unformatted response
const renderRawResponse = (res) => {
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>"
  } else {
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n")
    structuredRes = `<pre>${structuredRes}</pre>`

    responseField.innerHTML = `${structuredRes}`
  }
}

