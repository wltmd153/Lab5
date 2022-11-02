// expose.js
window.addEventListener('DOMContentLoaded', init);
var volumeFloat = 0.5;
var party;
function init() {
  console.log("Started");
  
  var change = document.getElementById("horn-select");
  var volume = document.getElementById("volume");
  var button = document.querySelector("button");
  
  change.addEventListener('input',hornChange);
  volume.addEventListener('input', volumeChange);
  button.addEventListener('click', clickOnButton);
}

function hornChange(e){
  var img = document.getElementById('expose').children[1];
  var sound = document.getElementsByClassName('hidden');
  party = false;
  if(e.target.value == "air-horn"){
    img.src = "assets/images/air-horn.svg";
    sound.src = "assets/audio/air-horn.mp3";
  }
  else if(e.target.value == "car-horn"){
    img.src = "assets/images/car-horn.svg";
    sound.src = "assets/audio/car-horn.mp3";
  }
  else if(e.target.value == "party-horn"){
    img.src = "assets/images/party-horn.svg";
    sound.src = "assets/audio/party-horn.mp3";
    party = true;
  }
}

function volumeChange(e){
  var img = document.getElementById('volume-controls').children[1];
  if(e.target.value == 0){
    volumeFloat = 0;
    img.src = "assets/icons/volume-level-0.svg";
  }
  else if(e.target.value > 67){
    img.src = "assets/icons/volume-level-3.svg";
  }
  else if(e.target.value > 33){

    img.src = "assets/icons/volume-level-2.svg";
  }
  else if(e.target.value > 1){

    img.src = "assets/icons/volume-level-1.svg";
  }
  volumeFloat = e.target.value / "100";
}

function clickOnButton(e){
  var sound = document.getElementsByClassName('hidden');
  var audio = new Audio(sound.src);
  audio.volume = volumeFloat;
  audio.play();
  if(party){
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
  }
}
