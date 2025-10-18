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

  