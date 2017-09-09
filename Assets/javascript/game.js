
    //Creating variable
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    //listing the letters that computer can choose from
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        //with this line, computer will select random letter
        console.log("It worked")
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        //pushing user guess
        guessesSoFar.push(userGuess);
        if (userGuess == computerGuess) {
            wins++;
            alert('Nice guess');
            //reset the times of guesses
            guessesLeft = 9;
            //this will refresh prior guess
            guessesSoFar.length = 0;
            //loss logic
        } else if (guessesLeft == 0) {
            losses++;
            alert('Try again');
            guessesLeft = 9;
            guessesSoFar.length = 0;
        } else if (userGuess !== computerGuess) {
            guessesLeft--; //guesses left
        }
        // show the counting in html  
        var html = "<h1>The Psychic Game</h1>" +
            "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Total Wins: " +
            wins +
            "</p>" +
            "<p>Total Losses: " +
            losses +
            "</p>" +
            "<p>Guesses Left: " +
            guessesLeft +
            "</p>" +
            "<p>Your Guesses so far: " +
            guessesSoFar +
            "</p>";
//built in function, on the document query for game, set the inner html to html variable.
        document.querySelector('#game').innerHTML = html;
    }
 