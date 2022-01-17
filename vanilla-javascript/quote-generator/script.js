const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Get Quote form API
// quote api: https://type.fit/api/quotes

var apiQuotes = [];

async function getQuote() {
  loading();
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
    complete();
  } catch (error) {
    alert(error);
  }
}

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  authorText.textContent = (Boolean(quote.author)) ? quote.author : "Unknown";
  quoteText.textContent = quote.text;
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  window.open(twitterUrl, "_blank");
}

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// On load
getQuote();

twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener('click', newQuote);

