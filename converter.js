function playGame()
{
	window.location.href = "/home/rahul/javascript/binToDecimalConverter/playGame.html";
}
function convert()
{
	let x = document.forms['Converter']['binaryValue'].value;
	if( x=='')
	{
		alert("enter a value");
	}
	else
	{
	 binaryToDecimal(x);
	}
}


function binaryToDecimal(x){
  let len = x.length;
  var dec =0;
  let i=0;
  while(len>0)
  {
  	if(x.charAt(i)==='1' || x.charAt(i)==='0' ){
  dec += (parseInt(x.charAt(i))*Math.pow(2,len-1));
}
else
{
	alert("binary digits contains '0' and '1' only ...please enter valid binary number");
	return;
}
  len-=1;
  i+=1;
  }
  alert("decimal value is "+ dec);
    
}
