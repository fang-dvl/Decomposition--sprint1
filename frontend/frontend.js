const newQuoteButton = document.getElementById("newQuote");

newQuoteButton.addEventListener("click", () => {
    fetch("http://localhost:3000/")
        .then(response => response.text())
        .then(newQuote => {
            const quote = document.getElementById("quote");
            quote.textContent = newQuote;
        });
});