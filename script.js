const msgEl = document.getElementById('msg');

// Generate random number
function generateRandomNumber () {
return Math.floor(Math.random() * 100) + 1;
}

const randomNum = generateRandomNumber();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

//Capture user speech
function onSpeak(event) {
const msg = event.results[0][0].transcript;
writeMessage(msg);
checkNumber(msg);
}


// Listen and handle speech event
recognition.addEventListener('result', onSpeak);

// See in DOM what user has spoken
function writeMessage(msg)  {
    const div = document.createElement('div');
    div.textContent = 'You said: ';
    const span = document.createElement('span');
    span.classList.add('box');
    span.textContent = msg;
msgEl.append(div, span);
}


/// Check msg against the secret number
function checkNumber(msg) {
  let num = Number(msg);

  // Update the value of num if it's a single-digit number
  if (msg === 'one' || msg === 'won') {
    num = 1;
  } else if (msg === 'two') {
    num = 2;
  } else if (msg === 'three') {
    num = 3;
  } else if (msg === 'four') {
    num = 4;
  } else if (msg === 'five') {
    num = 5;
  } else if (msg === 'six') {
    num = 6;
  } else if (msg === 'seven') {
    num = 7;
  } else if (msg === 'eight') {
    num = 8;
  } else if (msg === 'nine') {
    num = 9;
  }
  // The above could (should?) be refactored to a switch case

  const wordToNumber = {
    one: 1,
    won: 1,
    two: 2,
    to: 2,
    too: 2,
    three: 3,
    four: 4,
    for: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    ate: 8,
    nine: 9,
    ten: 10,
  };

  if (wordToNumber[msg]) {
    console.log(`adjusting ${msg} to ${wordToNumber[msg]}`);
    msg = wordToNumber[msg];
  } 
  
  // Convert to number after adjustments

  //const num = Number(msg);


  // Check if the spoken content is a valid number
  if (Number.isNaN(num)) {
    const div = document.createElement('div');
    div.textContent = 'That is not a valid number';
    msgEl.innerHTML = '';
    msgEl.append(div);
    return;


//Check if number is valid
if (Number.isNaN(num)) {
    const div = document.createElement('div');
    div.textContent = 'Tht is not a valid number';
     msgEl.innerHTML = '';
    msgEl.append(div);
    return;
}


//Check if its in range
if (num < 1 || num > 100) {
    const div = document.createElement('div');
    div.textContent = 'Number must be between 1 and 100';
     msgEl.innerHTML = '';
    msgEl.append(div);
    return;
}

// Check number and provide feedback
if (num === randomNum) {
    const h2 = document.createElement('div');
    h2.textContent =   `Congrats! You have guessed the number!
    It was ${num}`

    const button = document.createElement('button');
    button.classList.add('play-again')
    button.id = 'play-again'
    button.textContent = 'Play Again'


// Add listener and handler to button
button.addEventListener('click', () => window.location.reload())

//Clear out innerHTML of msgEl
msgEl.innerHTML = '';



    msgEl.append(h2, button);
} else if (num > randomNum) {
    const div = document.createElement('div');
    div.textContent = 'GO LOWER';
 msgEl.innerHTML = '';
    msgEl.append(div); 
 } else {
    const div = document.createElement('div');
    div.textContent = 'GO HIGHER';

    msgEl.innerHTML = '';
     msgEl.append(div); 
 }
}

// A the end of SpeechRecognition
recognition.addEventListener('end', () => recognition.start());


}


//!REPUSH AND COMMIT CLEANER CODE AND RESUBMIT AFTER VIDEO SUBMISSION

//scrollingNumbers.innerHTML = generateRandomNumber();

const scrollingNumbers = document.getElementById("scroll");
const result = Math.random().toString(10).substring(2);

//scrollingNumbers.innerHTML = result;

//CREATING ARRAY OF NUMBERS TO SCROLL

const wanderNum = [];
let len = wanderNum.length

for (let i = 0; i < 6; i++) {
  wanderNum.push(result);
}

//Display Text
scrollingNumbers.innerHTML = wanderNum.join("");

