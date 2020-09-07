//console.log("Variable Basics");

/*****************
*	Variable mutation and Coercion 
*/
/*
var firstName = "Sahil";
var age = 24;

console.log(firstName + " " + age);

var job,isMarride;
job = "Teacher";
isMarride = true;

alert("John is "+age+" year old and he is "+job+" Is he married? "+isMarride); 

var lastName = prompt("What is your last Name??");
console.log(lastName); 
*/

/***********************************
*	Basic Of Operator
*/

/*
var year = 2020;

var  yearJohn =1997;   
var fullAge = 23;

// logical operator.

var isFullAge = (year - yearJohn) >= fullAge; 
console.log(isFullAge);

*/

/*****************************************
* Truthy value and Falsy Value
*/

/*
var height=0;

if(height)
	console.log("Variable is Defined");
else	
	console.log("Variable is Not Defined.");
*/

/*******************************************
* Functions
*/
/*
function calcuateAge(birthYear){
	return 2020-birthYear;
}

console.log("Age of John is "+calcuateAge(1997));
*/

/**************************************
* Function statement and expression
*/
// Function Expression
/*
var calcuatAge = function(job,firstName){
	switch(job){
		case "Teacher":
			return firstName + " teches kides how to code";
		case "Driver":
			return firstName + " teches  how to Drive";
		case "Designer":
			return firstName + " Design website";
		default:
			return firstName + " Do Nothing";
	}
}
console.log(calcuatAge("Teacher","John"));
console.log(calcuatAge("Driver","Mike"));
console.log(calcuatAge("Designer","Mark"));
console.log(calcuatAge("Footboller","Alice"));
*/
/*
var ano = function(a,b){
	alert("Anontmous Function called");
	console.log("Anonymous Function is called.");
	return a+b;
}();

//console.log(ano(4,5));
//setTimeout(function(a,b){prompt("Anontmous Function called");console.log("Anonymous Function is called.");return a+b;},5000);

/********************************************************
****	ARRAYS
*/
/*
var names = ['john','mark','alice'];
console.log(names); 
 var years = new Array(1990,1991,1992,1993);
 console.log(years.length);
names[0] = 'Sahil';

console.log(names); */
 // Different DataType in Array
 /*
 var john = ['john','Smith',1998,'student' ];

john.push("blue");
console.log(john);
john.unshift("Mr.")
console.log(john);
console.log(john.pop());
console.log(john);
john.shift();
console.log(john);
console.log(john.indexOf(1998));

john.indexOf('Designer') === -1 ? console.log('John is Not a Designer') : console.log('John is Designer');

*/
/********************************************
*	Object and Properties
******/
/*
var john = {
	firstName : 'john',
	lastName : 'Smith',
	birthYear : 1990,
	family :['Mark','Alice','BOB'],
	isMarried : false
	};
console.log(john);
console.log(john.firstName);
console.log(john['lastName']);

var x = 'isMarried';
console.log(john[x]);

var jane = new Object();
jane.firstName = 'Jane';
jane['lastName'] = 'Smith';
jane.birthYear = 1997;

console.log(jane);

*/

/*******************8
* Object and Methods
*/
/*
var john = {
	firstName : 'john',
	lastName : 'Smith',
	birthYear : 1990,
	family :['Mark','Alice','BOB'],
	isMarried : false,
	calAge : function(){
				this.age = 2020 - this.birthYear;
			}
};

//concole.log(john);
john.calAge();
console.log(john);

*/


/*******************
** LOOPS and Iteration
*/

//for(var i=1; i<=10; i++)
//	console.log(i);


/*
var john = ['smith','mark','alice','bob'];

for(var i=0; i < john.length; i++)	
	console.log(john[i]);

*/











