// Global Variables
// ---------------------------------
// Arrays
var cars = ["acura", "alfa romeo", "aston martin", "audi", "bently", "bmw", "bugatti", "buick", "chevy", "chrysler", "citroen", "dodge", "ferrari", "fiat", "ford", "gmc", "honda", "hyundai", "infiniti", "jaguar", "jeep", "kia" ,"koenigsegg", "lamborghini", "land rover", "lexus" , "maserati", "mazda", "mclaren", "mercedes" , "mini", "mitsubishi", "nissan", "pagani", "peugeot", "porsche", "renault", "rolls royce", "saab", "subaru", "suzuki", "tesla", "toyota", "volkswagon", "volvo"];
var lettersInWord = []
var selectedCar = "";
var numOfBlanks = 0;
var blanksAndSuccesses = [];
var wrongLettersArr = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;



function startGame(){
     selectedCar = cars[Math.floor(Math.random() * cars.length)];
     lettersInWord = selectedCar.split("");
     numOfBlanks = lettersInWord.length;

    //  Reset
    guessesLeft = 10;
    wrongLettersArr = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with right number of blanks
    for(var i=0; i<numOfBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    // Change HTML to reflect game round conditions
    document.getElementById("word").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("losses").innerHTML = lossCount;

    // Testing and debugging
    console.log(selectedCar);
    console.log(lettersInWord);
    console.log(numOfBlanks);
    console.log(blanksAndSuccesses);
}




function checkLetters(letter){
    // Check if letter exists in code at all
    var isLetterInWord = false;
    for(var i=0; i<numOfBlanks; i++){
        if(selectedCar[i] === letter){
            isLetterInWord = true;
        }
    }

    // Check where in the word the letter exists, then populate blanksAndSuccesses array
    if(isLetterInWord){
        for(var i=0; i<numOfBlanks; i++){
            if(selectedCar[i] === letter){
                blanksAndSuccesses[i] = letter;
            }
        }
    }else{
        wrongLettersArr.push(letter);
        guessesLeft--;
    }
    console.log(blanksAndSuccesses);
}




function completeRound(){
    console.log(`Win Count: ${winCount} | Loss Count: ${lossCount} | Guesses left: ${guessesLeft}`);

    // Update HTML on most recent count stats
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    document.getElementById("word").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongLetter").innerHTML = wrongLettersArr.join(" ");

    // Check if user won
    if(lettersInWord.toString() == blanksAndSuccesses.toString()){
        winCount++;

        // Update counter in HTML
        document.getElementById("wins").innerHTML = winCount;
        
        // alert("You won!");
        startGame();
    }else if(guessesLeft === 0){
        lossCount++;

        // Update counter in HTML
        document.getElementById("losses").innerHTML = lossCount;
        
        // alert("You lost");
        startGame();
    }
}


// Starts game for the first time
startGame();


// Register keyClicks
document.onkeyup = function(event){
    var userGuess = event.key;
    checkLetters(userGuess);
    completeRound();
    console.log(userGuess);
}
