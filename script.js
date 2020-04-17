 
 
 // Get the modal
 var modal = document.getElementById("myModal");
    
 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

 // Get the modal 2
 var modal1 = document.getElementById("myModal1");
    
 // Get the button that opens the modal
 var btn1 = document.getElementById("myBtn1");
 
 // Get the <span> element that closes the modal
 var span1 = document.getElementsByClassName("close")[1];
 
 // When the user clicks the button, open the modal 
 btn1.onclick = function() {
   modal1.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span1.onclick = function() {
   modal1.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal1) {
     modal1.style.display = "none";
   }
 }
//Grab the input value
 let input_area = document.querySelector("#userinput");
 console.log(input_area);

 let button_zastosuj = document.querySelector("#userbutton");

 let dynamic_heading = document.querySelector("#heading");

 //display input value as HTML
 updateText = function(){
     let textNode = input_area.value;
     dynamic_heading.innerHTML=textNode; 
     return textNode; //wywoływanie metody odwołującej się do obiektu HTML
     }

 button_zastosuj.addEventListener("click", updateText);

 // gsap animation
 let animate = function(updateText) {
    
    let textSplit = SplitText.create(updateText, { type: "chars,words" });
    return gsap.from(textSplit.chars, { duration:0.1, visibility:"hidden", stagger: 0.1 } );
  };

let button_animation = document.querySelector("#userbutton");
button_animation.addEventListener("click", animate);

