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




// Grab DOM element references
// var holderDiv = document.getElementsByClassName("holderDiv");
// var letter = document.getElementsByClassName("letter");
// var winner = document.getElementsByClassName("winCount");
// var loser = document.getElementsByClassName("loser");
// var remainingGuesses = document.getElementsByClassName("remainingGuesses");
// var guessedLettersDiv = document.getElementsByClassName("guessedLettersDiv");
// var wrongLetter = document.getElementsByClassName("wrongLetter");

// 

// function playGame(){

//     for(var i = 0; i < randomCar.length; i++){
//         if(randomCar[i] === " "){
//             lettersInWord.push(" ");
//         }else{
//             lettersInWord.push("_")
//         }
//     }
//     letter.textContent = lettersInWord.join(" ");
//     console.log(letter.textContent);


//     for(var i=0; i<randomCar.length; i++){
//         if(userGuess === randomCar.charAt(i)){
//             letter.textContent = randomCar.charAt(i);
//         }else{
//             wrongLettersArr.push(userGuess);
//         }
//         wrongLetter.textContent = userGuess;
//     }
//     console.log(wrongLetter.textContent);
// }






























// var start = false;
// var winCount = 0;
// var guess;
// var letter;
// var guessedLettersDiv;
// var wrongLetterBox;
// var wrongLetter;
// var numberOfGuesses = 10;
// var winCount = document.getElementById("winCount");
// var remainingGuesses = document.getElementById("remainingGuesses");
// var randomCarIndex = Math.floor(Math.random() * cars.length);
// var randomCar = cars[randomCarIndex];

// document.onkeyup = function(event){
//     guess = event.key.toLowerCase();
//     if(start == false){
//         generateWord();
//         start = true;
//     }

//     function guessTheWord(){
//         guessedLetters = document.getElementById("guessedLettersDiv");
//         console.log(randomCar);
        
//         for(var i = 0; i < randomCar.length; i++){
//             var targetLetter = document.getElementsByClassName("letterBox"/* + i*/);
            
//             if(guess === randomCar.charAt(i)){
//                 targetLetter.innerHTML = randomCar.charAt(i);
//                 console.log(randomCar.charAt(i));
//              }//else{
//             //     wrongLetterBox = document.createElement("div");
//             //     wrongLetterBox.setAttribute("class", "wrongLetterBox");
//             //     wrongLetter = document.createElement("span");
//             //     wrongLetter.setAttribute("class", "wrongLetter");
//             //     wrongLetterBox.append(wrongLetter);
//             //     guessedLettersDiv.append(wrongLetterBox);
//             //     guessedLetters.textContent = randomCar.charAt(i);
//             // }
//         }

//     }
//     guessTheWord();
// }

// //Generate random word elements
// function generateWord(){
//     var holderDiv = document.getElementById("holderDiv");
    
//     for(var i = 0; i < randomCar.length; i++){
//         var letterBox = document.createElement("div");
//         letter = document.createElement("span");
//         letterBox.setAttribute("class", "letterBox");
//         letter.setAttribute("class", "letter" + i);
//         letterBox.append(letter);
//         holderDiv.append(letterBox);
        
//     }

// };

//Guess the word







// When the game starts. The page picks a random word. 
//When the word is picked, we need to fill the page with elements to indicate how many letters there are.
// So if it's a 3 letter word, we need to create 3 "_" elements and append them to the page