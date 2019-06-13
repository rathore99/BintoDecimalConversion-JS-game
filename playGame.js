var gameDetails = {
	score: 0,
	binaryNumber: [],
	decimalNumber: [],
	userEnteredNumber: [],
	len:  0

};
function resetValues()
{
	gameDetails.score=0;
	gameDetails.binaryNumber=[];
	gameDetails.decimalNumber=[];
	gameDetails.userEnteredNumber=[];
	gameDetails.len=0;
}
function timer()
{
var counter = 120;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		clearInterval(interval);
      	document.getElementById('demo').innerHTML = "Game Over";
      	alert("game Over");  
      	resetValues();
        return;
    }else{
    	document.getElementById('demo').innerHTML = counter;
      console.log("Timer --> " + counter);
    }
}, 1000);
}
function displayScore()
{
	var str = " updated Score is : " + gameDetails.score;
	document.getElementById('changeScore').innerHTML= str;
}
function playGame(argument) {
  if(gameDetails.len==0)
  {
  	timer();
  }	
   let getNumber = generateBinary();
   gameDetails.decimalNumber.push(getNumber);
   let binaryNum = getNumber.toString(2);
   gameDetails.binaryNumber.push(binaryNum);
   document.getElementById("binaryNo").innerHTML = binaryNum;	// body...
   gameDetails.len +=1;
}


/*  Function to maintain score of player */
function updateScore( points){
	gameDetails.score+=points;
	console.log("value is ", gameDetails.score)
	displayScore();

}


/* function to generate random binary number */
function generateBinary()
{
	let max = 32; let min = 0;
   var randomNum =  Math.floor(Math.random()*(max - min + 1 ) + min ); 
    return randomNum;
}

function continue1(){
	var num = document.getElementById("decimalNumber").value;
    gameDetails.userEnteredNumber.push(Number(num));
    if (gameDetails.decimalNumber[gameDetails.len-1]==Number(num))
    {
    	updateScore(1);
    	playGame();
    	console.log("correct ",num);
    }
    else
    {
    	updateScore(0);
    	playGame();
       console.log(gameDetails.decimalNumber)
    }
}