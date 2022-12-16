var random_no1 = (Math.floor((Math.random()*6)))+1;
var random_no1image = "images/dice"+random_no1+".png";

document.querySelectorAll("img")[0].setAttribute("src", random_no1image);

var random_no2 = (Math.floor((Math.random()*6)))+1;
var random_no2image = "images/dice"+random_no2+".png";

document.querySelectorAll("img")[1].setAttribute("src", random_no2image);

if(random_no1>random_no2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 win!";
}
else if(random_no2>random_no1)
{
    document.querySelector("h1").innerHTML="Player 2 win! 🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}
