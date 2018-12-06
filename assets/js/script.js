var cars = ["acura", "alfa romeo", "aston martin", "audi", "bently", "bmw", "bugatti", "buick", "chevy", "chrysler", "citroen", "dodge", "ferrari", "fiat", "ford", "gmc", "honda", "hyundai", "infiniti", "jaguar", "jeep", "kia" ,"koenigsegg", "lamborghini", "land rover", "lexus" , "maserati", "mazda", "mclaren", "mercedes" , "mini", "mitsubishi", "nissan", "pagani", "peugeot", "porsche", "renault", "rolls royce", "saab", "subaru", "suzuki", "tesla", "toyota", "volkswagon", "volvo"];

// var letters = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o' , 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var start = false;
var winCount = 0;
var guess;
var letter;
var guessedLettersDiv;
var wrongLetterBox;
var wrongLetter;
var numberOfGuesses = 10;
var wins = document.getElementById("wins");
var remainingGuesses = document.getElementById("remainingGuesses");
var randomCarIndex = Math.floor(Math.random() * cars.length);
var randomCar = cars[randomCarIndex];

document.onkeyup = function(event){
    guess = event.key.toLowerCase();
    if(start == false){
        generateWord();
        start = true;
    }

    function guessTheWord(){
        guessedLetters = document.getElementById("guessedLettersDiv");
        console.log(randomCar);
        for(var i = 0; i < randomCar.length; i++){
            var targetLetter = document.getElementsByClassName("letterBox" + i);
            if(guess === randomCar.charAt(i)){
                targetLetter.innerText = randomCar.charAt(i);
                console.log(randomCar.charAt(i));
             }//else{
            //     wrongLetterBox = document.createElement("div");
            //     wrongLetterBox.setAttribute("class", "wrongLetterBox");
            //     wrongLetter = document.createElement("span");
            //     wrongLetter.setAttribute("class", "wrongLetter");
            //     wrongLetterBox.append(wrongLetter);
            //     guessedLettersDiv.append(wrongLetterBox);
            //     guessedLetters.textContent = randomCar.charAt(i);
            // }
        }

    }
    guessTheWord();
}

//Generate random word elements
function generateWord(){
    var holderDiv = document.getElementById("holderDiv");
    
    for(var i = 0; i < randomCar.length; i++){
        var letterBox = document.createElement("div");
        letter = document.createElement("span");
        letterBox.setAttribute("class", "letterBox");
        letter.setAttribute("class", "letter" + i);
        letterBox.append(letter);
        holderDiv.append(letterBox);
        
    }

};

//Guess the word







// When the game starts. The page picks a random word. 
//When the word is picked, we need to fill the page with elements to indicate how many letters there are.
// So if it's a 3 letter word, we need to create 3 "_" elements and append them to the page.