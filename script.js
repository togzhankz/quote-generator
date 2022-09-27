

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Loading Spinner
function loading() { // We will see only the loader, nothing else
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// Remove Spinner
function complete() { //
	quoteContainer.hidden = false;
	loader.hidden = true;
}

// Show New Quote
function newQuote() {
	loading();
	// Pick a random quote from array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	// Check if Author field is blank and replace it with 'Unknown'
	if (!quote.author) {
		authorText.textContent = 'Unknown';
	} else {
		authorText.textContent = quote.author;
	}
	// Check Quote length to determine styling
	if (quote.text.length > 120) {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}
	// Set Quote, Hide Loader
	quoteText.textContent = quote.text;
	complete();
}

// Get Quotes From API
async function getQuotes() {
	loading();
	const apiUrl = 'https://type.fit/api/quotes';
	try {
		const response = await fetch(apiUrl); // Fetch request. The Responce variable will not be populated until it has some data fetched from our API
		apiQuotes = await response.json();// We are getting json from respose and we are turning that response into JSON object . And we pass that into our global variable. 
		newQuote();
	} catch (error) { // Handles Error
		// Catch Error Here     
	}
}

// Tweet Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`; //? mark means we have queru running
	window.open(twitterUrl, '_blank'); //it allows to open twitter using URL
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote); // we click  and it runs new Quote
twitterBtn.addEventListener('click', tweetQuote); /// we click and it tweets the quote

// On Load
getQuotes();

loading ()


