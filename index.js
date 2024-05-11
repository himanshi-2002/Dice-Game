
    var randomNumber1= (Math.random()) * 6;
    randomNumber1 = (Math.round(randomNumber1)) + 1;

    if(randomNumber1==1)
       document.querySelectorAll("img")[0].src="images/dice1.png";
    else if(randomNumber1==2)
       document.querySelectorAll("img")[0].src="images/dice2.png";
    else if(randomNumber1==3)
        document.querySelectorAll("img")[0].src="images/dice3.png";
    else if(randomNumber1==4)
        document.querySelectorAll("img")[0].src="images/dice4.png";
    else if(randomNumber1==5)
        document.querySelectorAll("img")[0].src="images/dice5.png";
    else if(randomNumber1==6)
        document.querySelectorAll("img")[0].src="images/dice6.png";



    var randomNumber2= (Math.random()) * 6;
    randomNumber2 = (Math.round(randomNumber2)) + 1;

    if(randomNumber2==1)
       document.querySelectorAll("img")[1].src="images/dice1.png";
    else if(randomNumber2==2)
       document.querySelectorAll("img")[1].src="images/dice2.png";
    else if(randomNumber2==3)
        document.querySelectorAll("img")[1].src="images/dice3.png";
    else if(randomNumber2==4)
        document.querySelectorAll("img")[1].src="images/dice4.png";
    else if(randomNumber2==5)
        document.querySelectorAll("img")[1].src="images/dice5.png";
    else if(randomNumber2==6)
        document.querySelectorAll("img")[1].src="images/dice6.png";


function disp(){
    if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 1 wins the game.";
    }
    else if(randomNumber1 < randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 2 wins the game.";
    }
    else{
        document.querySelector("h1").innerHTML="Draw.";
    }
}
