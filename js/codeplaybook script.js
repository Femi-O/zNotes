//Get the button
var mybutton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Define the control frame and its control button that opens it.
var controlButton = document.getElementById("cntrl-btn-angular");
var controls = document.getElementById("control-frame-angular")

// Make controls appear/disappear on click
controlButton.onclick = function() {

  if (controls.style.display === "none") {
    controls.style.display = "block";
  }
  else if (controls.style.display === "block") {
    controls.style.display = "none";
  }
  else {
    controls.style.display = "none";
  }

}

var masterButton = document.getElementById('master-button');
// // Click all dropdowns on load. This is to be commented out when all notes are done!
window.onload = function(){
  masterButton.click();
}

// // Function "scroll-to-and-click". Then I'll be passing navButton and button for each instance into the function.


// function scrollClick (navButton,button){
//   scrollTo (button)
//   if (aria-expanded === false){
//     button.ckick()
//   }

// }
// navButton.onclick = scrollClick() ;


// var navGeneralButton = document.getElementById('navGeneralNotes-Button');
// var generalButton = document.getElementById("generalNotes-button")
// // onclick navGeneralButton run a fn to 
// navGeneralButton.onclick = function(){

// }
// // 1. scroll to the generalButton
// // 2. if its closed, click generalButton