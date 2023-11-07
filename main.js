const url = 'https://api.quotable.io/random';
const quote = document.getElementById('quote');
const author = document.getElementById('author');

// const newquote = document

const getQuote = async () => {
    const response = await fetch(url)
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(url);

const tweet = () => {
    window.open("https://twitter.com/intent/tweet?text=" +quote.innerHTML + "---- by" + author.innerHTML, "Tweet Window", "width=600", "height=300");
}
