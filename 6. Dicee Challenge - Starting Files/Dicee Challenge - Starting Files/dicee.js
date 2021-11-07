var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1 * 6);
randomnumber1 = randomnumber1 + 1;

document.querySelector(".img1").setAttribute("src", "C:/Users/panav/Desktop/Web Development/6. Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice"+randomnumber1+".png");


var randomnumber2 = Math.floor(Math.random()*6)+ 1;

document.querySelector(".img2").setAttribute("src", "C:/Users/panav/Desktop/Web Development/6. Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice"+randomnumber2+".png");

if(randomnumber1 > randomnumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomnumber1 == randomnumber2)
{
  document.querySelector("h1").innerHTML = "It's a tie!";
}
else
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
