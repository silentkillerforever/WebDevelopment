var x = Math.floor(Math.random()*6)+1;
var randomImageSource = "images/dice"+x+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var y = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice"+y+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(x>y)
{
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(y>x)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
