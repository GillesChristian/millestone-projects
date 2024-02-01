const qoute = document.querySelector(".qoute-text");
const author = document.querySelector(".author");
const generateButton = document.querySelector(".generator");

const url = 'http://localhost:3000/quotes';

const generateQuote = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        try {
            const randomIndex = Math.floor(Math.random() * data.length) + 1;
            const selectedQuote = data[randomIndex];

            qoute.textContent = selectedQuote.quote;
            author.textContent = selectedQuote.author;
        } catch (error) {
            console.error('Error:', error);
        }
    })
};

// Initial quote generation
generateQuote();

// Event listener for the generate button
generateButton.addEventListener('click', generateQuote);
