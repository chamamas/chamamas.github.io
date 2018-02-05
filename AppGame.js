

var i=0;
var correctCount=0;
function generate(index){
	document.getElementById("question").innerHTML=jsonData[index].question;
	document.getElementById("choice1").innerHTML=jsonData[index].choice1;
	document.getElementById("choice2").innerHTML=jsonData[index].choice2;
	document.getElementById("choice3").innerHTML=jsonData[index].choice3;
	document.getElementById("choice4").innerHTML=jsonData[index].choice4;
}
function checkAnswer(){
	if (document.getElementById()).checked && jsonData[i].choice1==jsonData[i].answer){
		correctCount++;
	}
	if (document.getElementById()).checked && jsonData[i].choice2==jsonData[i].answer){
		correctCount++;
	}
	if (document.getElementById()).checked && jsonData[i].choice3==jsonData[i].answer){
		correctCount++;
	}
	if (document.getElementById()).checked && jsonData[i].choice4==jsonData[i].answer){
		correctCount++;
	}
}
