/*
 var info = newArray (3); //definies array
	info[0] = lastName; //defines lastName as array index 0
	info[1] = firstName; //defines firstName as array index 1
	info[2] = score;  //defines score as array index 2
 */

var aScores = []; //defines scores array
var aStudents = []; //defines students array
var results = ""; //defines results as a string

var $ = function (id) {
	return document.getElementById(id);
}
var calculate_click = function (){

	var firstName = $("firstName").value; //defines firstName field as a string
	var lastName = $("lastName").value; //defines lastName field as a string
	var score = parseInt($("score").value); //defines score as an integer

	aScores.push(score);
	
	var student = lastName.toString() + ", " + firstName.toString() + ": " + score.toString() + "\n"; //sets up results strings to populate the textarea
	
	aStudents.push(student); //pushes entry to top of results field

	results += student; //adds new student entries
	$("results").value = results;  //populates the HTML textarea with the results
	calculateAverage(); //averages scores
	}
	
var calculateAverage = function () { //defines averaging function
	var score = 0; 
	if(aScores.length > 0) {  
		for(var n = 0; n < aScores.length; n++) 
		{ score += aScores [n];
		}
		score = score/aScores.length 
	}

	$("avgScore").value = score; //populates the text field with the average of the scores entered
}

window.onload = function() {
	$("calculate").onclick = calculate_click; //event handler for clicking on the Add Student Score button
	$("clear").onclick = clear_click; //event handler for clicking on the clear button
	$("sort").onclick = sort_click; //event handler for clicking the sort button
}

var clear_click = function() {  //defines the clear function
	aScores = [];
	aStudents = [];
	results = "";
	$("results").value = results;
	calculateAverage ();
}

var sort_click = function() {  //defines the sort function
 	aStudents.sort();
	results = "";
	for(var n = 0; n < aStudents.length; n++)
		{ results += aStudents[n];
		}
		$("results").value = results;
}
