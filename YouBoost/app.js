//selecting the video element
var video = document.querySelectorAll('.video-stream.html5-main-video')[0];


/* using Web Audio API to control the gain of the audio */

var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = audioContext.createGain();
var source = audioContext.createMediaElementSource(video);
source.connect(gainNode);
gainNode.connect(audioContext.destination);
gainNode.gain.value = 1.0; //initial gain (normal)

// text to show current gain value
var currentGainText = document.createElement('strong');
currentGainText.textContent="1.0"; //default

// increase gain
function inc(){
    gainNode.gain.value += 0.2;
    currentGainText.textContent = Math.round(gainNode.gain.value*100)/100;
}

//decrease gain
function dec(){
	gainNode.gain.value-=0.2;
    currentGainText.textContent = Math.round(gainNode.gain.value*100)/100;
}

// + button to increase gain
var incBtn = document.createElement('button');
incBtn.textContent = '+';
incBtn.addEventListener('click', inc);


// i button to decrease gain
var decBtn = document.createElement('button');
decBtn.textContent = '-';
decBtn.addEventListener('click', dec);

// adding buttons and text into the volume area of youtube video player
var volArea = document.querySelectorAll('.ytp-volume-area')[0]
volArea.appendChild(decBtn);
volArea.appendChild(currentGainText);
volArea.appendChild(incBtn);
