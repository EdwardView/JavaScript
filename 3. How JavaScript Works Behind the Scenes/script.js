/*****************************
** Lcture Hoisting
***/
/*
calculateAg(1997);

function calculateAg(year){
	console.log(2020-year);
}


console.log(age);
var age = 23;
console.log(age);
*/

var a = "Hello";
first();

function first(){
	var b = "Hiiii!";
	second();
	
	function second(){
		var c = "hey!!";
		console.log(a + " " + b + " " + c);
	}
}   