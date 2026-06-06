const newQuoteButton = document.getElementById("newQuote");

newQuoteButton.addEventListener("click", () => {
    fetch("http://pqd08avykibslel1wvl8txuz.178.105.39.91.sslip.io")
        .then(response => response.text())
        .then(newQuote => {
            const quote = document.getElementById("quote");
            quote.textContent = newQuote;
        });
});