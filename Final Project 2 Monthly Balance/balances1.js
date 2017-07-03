//set up global variables/arrays for functions
var balances = [];
var transactions = [];

var $ = function (id) {
    return document.getElementById(id);
}
//pulls info from text boxes on HTML page
var update_display = function() {
	$("startBal").value = get_startBal(transactions);
	$("totalDep").value = get_totalDep(transactions);
	$("totalWd").value = get_totalWd(transactions);
	$("endBal").value = get_endBal(transactions);
	
	$("date").value = "";
	$("amount").value = "";
	
	$("date").focus();
	
	$("results").value = getResults(transactions);
}
//function to add transactions to text area on HTML page
var addTrans_click = function () {
	var trans = [];
	trans["date"] = $("date").value;
	trans["amount"] = parseFloat($("amount").value);
	trans["type"] = $("type").value;
	
	if (trans["date"] == "") return;
	if (isNaN(trans["amount"])) return;
		
	transactions.push(trans);
	update_display(); 
}
//event handlers 
window.onload = function () {
	$("addTrans").onclick = addTrans_click;
	$("date").focus();
}
