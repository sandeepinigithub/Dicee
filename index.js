var randomNumber1 = Math.floor((Math.random())*6)+1; //1-6
var randomDiceImage = "dice"+randomNumber1+".png";  //dice1.png - dice6.png
var randomSourceImage = "images/"+randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomSourceImage);

var randomNumber2 = Math.floor((Math.random())*6)+1; //1-6
var randomDiceImage2 = "dice"+randomNumber2+".png";  //dice1.png - dice6.png
var randomSourceImage2 = "images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomSourceImage2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
