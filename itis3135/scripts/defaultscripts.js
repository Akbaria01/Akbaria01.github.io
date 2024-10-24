function displayCurrentTime() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    document.getElementById('current-time').innerText = `Today is ${formattedDate}`;
}
setInterval(displayCurrentTime, 1000);

document.getElementById('user-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const mood = document.getElementById('mood').value;
    document.getElementById('greeting').innerText = `The Awkward Alpacas welcomes you, ${username}! We're glad you are doing ${mood}!`;

    let favoriteNumber = Math.abs(parseFloat(document.getElementById('favorite-number').value));
    favoriteNumber = Math.round(favoriteNumber);

    const polygonNames = ["", "monogon", "digon", "triangon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    const polygonName = favoriteNumber < polygonNames.length ? polygonNames[favoriteNumber] : `A polygon with ${favoriteNumber} sides`;
    alert(`The polygon with ${favoriteNumber} sides is called a ${polygonName}.`);
});

function provideAnInsult() {
    alert("You're as awkward as an alpaca in a tuxedo!");
}

function generateRandomFact() {
    alert("Did you know alpacas can hum?!");
}

function showFavoriteColor() {
    alert("Your favorite color is as unique as an alpaca's personality!");
}

function generateAlpacaQuote() {
    alert("Be yourself; everyone else is already taken. - Oscar Wilde (but with an alpaca twist!)");
}

function calculateAlpacaTax() {
    alert("Alpaca tax is 0% because they're just too cute!");
}


document.getElementById('insult-button').addEventListener('click', provideAnInsult);
document.getElementById('random-fact-button').addEventListener('click', generateRandomFact);
document.getElementById('favorite-color-button').addEventListener('click', showFavoriteColor);
document.getElementById('alpaca-quote-button').addEventListener('click', generateAlpacaQuote);
document.getElementById('alpaca-tax-button').addEventListener('click', calculateAlpacaTax);


displayCurrentTime();
