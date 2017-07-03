var $ = function (id) {
	return document.getElementById(id);
}
var Die = function(sides) { //determines the die to be a six sided die
	/*if (arguments.length < 1)
		return 6;
	else 
		return arguments[0];*/
		this.sides = sides;
		this.value = 1;
}

Die.prototype.roll = function() {  //runs the die rolling function to get random number between 1 & 6
	this.value = Math.floor(Math.random() * this.sides) + 1;
}

Die.prototype.getValue = function(){
	return this.value;
}
var PairOfDice = function(sides)
{
	this.die1 = new Die(sides);
	this.die2 = new Die(sides);
}
PairOfDice.prototype.getSum = function() { //returns a value for die one and two
	return this.die1.getValue() + this.die2.getValue();
}

PairOfDice.prototype.roll = function() {
	this.die1.roll();
	this.die2.roll();
}

PairOfDice.prototype.getValue1 = function() {
	return this.die1.getValue();
}

PairOfDice.prototype.getValue2 = function() {
	return this.die2.getValue();
}

window.onload = function () { //runs the die rolling function for a pair of dice
    $("rollDice").onclick = function() {
		var sides = 6;
		//var die1 = Die.prototype.roll(sides);
		//var die2 = Die.prototype.roll(sides);
		//var value = Die.prototype.getValue(die1, die2); 
		var pair = new PairOfDice(sides);
		pair.roll();
		var value = pair.getSum();
		var message = '';  //returns messages for special rolls or not
			if (value == 2) {
				message = "Snake Eyes!";
			} 
			else if (value == 7) {
				message = "Craps!";
			} 
			else if (value == 12) {
				message = "Box Cars!";
			}
			else {
				message = " ";
			}
			
			$("die1").value = pair.getValue1();;  //populates fields
		$("die2").value = pair.getValue2();;
		$("message").value = message;
}
	}	