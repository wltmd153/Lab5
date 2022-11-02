// explore.js
// was not able to implement smiling
// Got reference from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
const synth = window.speechSynthesis;
const inputTxt = document.querySelector('.txt');
const voiceSelect = document.querySelector('select');


let voices = [];

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
window.addEventListener('DOMContentLoaded', init);

//document.getElementById("text-to-speak").value = "Jiseung Yoo"
function init() {
   var button = document.querySelector("button");
   button.addEventListener('click', clickOnButton);
}

function clickOnButton(){
  const utterThis = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
}
function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
