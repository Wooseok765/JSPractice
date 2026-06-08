const quotes = [
    {
        quote: "The only way to do great work is to love what you do",
        author: "Steve Jobs"
    },
    {
        quote: "Life is what happens when you’re busy making other plans",
        author: "John Lennon"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop",
        author: "Confucius"
    },
    {
        quote: "In the middle of difficulty lies opportunity",
        author: "Albert Einstein"
    },
    {
        quote: "Do what you can, with what you have, where you are",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts",
        author: "Winston Churchill"
    },
    {
        quote: "The journey of a thousand miles begins with a single step",
        author: "Lao Tzu"
    },
    {
        quote: "Believe you can and you’re halfway there",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Happiness depends upon ourselves",
        author: "Aristotle"
    },
    {
        quote: "Dream big and dare to fail",
        author: "Norman Vaughan"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = `-- ${todaysQuote.author}--`;