var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

function image1(){
  document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
}
function image2() {
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
}

function refreshPage(){
    window.location.reload();
}


document.querySelector(".playButton").onclick = function() {
  image1();
  image2();
  if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins! 🏆"
  }

  if(randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 2 Wins! 🏆"
  }

  if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 It's a Draw! 🏆"
  };
};


document.querySelector(".button2").addEventListener("click", refreshPage);
