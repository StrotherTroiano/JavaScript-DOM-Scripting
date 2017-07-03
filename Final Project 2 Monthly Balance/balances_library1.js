//var balance = startBal


//helper functions for actual JS file
var pad_left = function(text, width, pad) {  //sets up text area formatting
	var result = text.toString();
	while (result.length < width) {
		result = pad + result;
	}
	return result;  //populates text area
}

var pad_right = function(text, width, pad) { //sets up text area formatting
	var result = text.toString();
	while (result.length < width) {
		result = result + pad;
	}
	return result;  
}

var getResults = function(results) { //actual calculation functions 
	if (results.length == 0) {
		return "";
	}

	var balance = 2000;  //actual format of text area
	var list = pad_right("Date", 12, " ");
	list += pad_right("Amount", 12, " ");
	list += pad_right("Running Balance", 15, " ") + "\n";
	list += pad_right("", 11, "-") + " ";
	list += pad_right("", 11, "-") + " ";
	list += pad_right("", 15, "-") + "\n";
	
	for (var i = 0; i < results.length; i++) {  //loop to calculate balances
 		var trans = results[i];
		list += pad_right(trans["date"], 12, " ");
		if(trans["type"] == "withdrawal") //withdrawal calculation
		{
			balance -= trans["amount"]
			list += "$" + pad_left( "-" + trans["amount"].toFixed(2), 11, " ") + " ";
		} else { //for Deposits
			balance += trans["amount"]
			list += "$" + pad_left( trans["amount"].toFixed(2), 11, " ") + " ";
		}
				
		list += "$" + pad_left(balance.toFixed(2), 14, " ") + "\n";		
	}
	return list;
}
var get_runningBalance = function(results) {  //function to calculate Running Balance
	var runningBalance = 0, amount;
	for (var i in results) {
		runningBalance =  startBal - "amount" ;
		runningBalance += parseInt(runningBalance.toFixed(2));
	}
	return runningBalance;
}

var get_startBal = function(transactions){ //fills Starting Balance
	return 2000;
}

var get_totalDep = function(transactions){  //function to calculate Total Deposits
	var totalDep = 0;
	for(var i = 0; i < transactions.length; i++){
		var trans = transactions[i];
		if(trans["type"] == "deposit")
		{
			totalDep += trans["amount"]
		}
	}
	return totalDep;
}

var get_totalWd = function(transactions){ //function to calculate Total Withdrawals
	var totalWd = 0;
	for(var i = 0; i < transactions.length; i++){
		var trans = transactions[i];
		if(trans["type"] == "withdrawal")
		{
			totalWd -= trans["amount"]
		}
	}
	return totalWd;
}

var get_endBal = function(transactions){ //function to calculate Ending Balance
	var balance = 2000;
	for(var i = 0; i < transactions.length; i++){
		var trans = transactions[i];
		if(trans["type"] == "withdrawal")
		{
			balance -= trans["amount"]
		} else { //Is Deposit
			balance += trans["amount"]
		}
	}
	return balance.toFixed(2);
}