
function getrandom(){
    var randomNum1 = Math.floor(Math.random() * 6)+ 1;
    var randomNum2 = Math.floor(Math.random() * 6)+ 1;

    var randomImage1 = "images/dice" + randomNum1 +".png";
    var randomImage2 = "images/dice" + randomNum2 +".png";

   var image =  document.querySelectorAll("img")[0];
   image.setAttribute("src", randomImage1);

   var image2 =  document.querySelectorAll("img")[1];
   image2.setAttribute("src", randomImage2);

   if (randomNum1 > randomNum2) {
       document.querySelector("h1").innerHTML = "🏆Player 1 won!";
   } else if (randomNum2 > randomNum1)  {
    document.querySelector("h1").innerHTML = "🏆Player 2 won!";
   } else {
    document.querySelector("h1").innerHTML = "🏁It's a tie!";
   }
    
}

getrandom();

