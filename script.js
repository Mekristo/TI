// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal 2
let modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
let btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
//Grab the input value
let input_area = document.querySelector("#userinput");


let button_zastosuj = document.querySelector("#userbutton");

let dynamic_heading = document.querySelector("#heading");

//display input value as animated text
animateText = function () {
  event.preventDefault();
  dynamic_heading.textContent = "";
  let textNode = input_area.value.split("");
  
  console.log(textNode);
  for (let i = 0; i < textNode.length; i++) {
    dynamic_heading.innerHTML += `<span class="letterSpan">${textNode[i]}</span>`
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = dynamic_heading.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++

    if (char === textNode.length) {
      complete();
      return
    }
  }

  if(window.speechSynthesis.getVoices().length == 0) {
    window.speechSynthesis.addEventListener('voiceschanged', function() {
      textToSpeech();
    });
  }
  else {
    // languages list available
    textToSpeech()
  }
  
  function textToSpeech() {
    // get all voices that browser offers
    var available_voices = window.speechSynthesis.getVoices();
  
    // this will hold an voice
    var polish_voice = '';
  
    // find voice by language locale "en-US"
    // if not then select the first voice
    for(var i=0; i<available_voices.length; i++) {
      if(available_voices[i].lang === 'pl-PL') {
        polish_voice = available_voices[i];
        break;
      }
    }
    if(polish_voice === '')
      polish_voice = available_voices[0];
  
    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 0.9;
    utter.pitch = 0.5;
    utter.text = input_area.value;
    utter.voice = polish_voice;

    // speak
    window.speechSynthesis.speak(utter);
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }
};


button_zastosuj.addEventListener("click", animateText);






