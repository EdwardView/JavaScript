// var john={
//   name: 'john',
//   yearOfBirth: 1998,
//   job: 'Teacher'
// };

// var Person = function(name,yearOfBirth,job){
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
// Person.prototype.calculateAge = function(){
//     console.log(2020-this.yearOfBirth);
// };
// Person.prototype.lastName = 'Smith';
// var john = new Person('john',1997,'Plumber');
// var jane = new Person('jane',1999,'Engineer');
// var ruh = new Person('Ruh',1995,'Scientist');
//
// console.log(john.lastName);john.calculateAge();
// console.log(jane.lastName);jane.calculateAge();
// console.log(ruh.lastName );ruh.calculateAge();


 //  object.Create Method

// var personProto = {
//     calculateAge : function(){
//       console.log(2020-this.yearOfBirth);
//     }
//  };
// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1997;
// john.job = 'Doctor';
//
// var james = Object.create(personProto,{
//   name:{value:'James'},
//   yearOfBirth:{value:1997},
//   job:{value:'Driver'}
// });


// function

// var age = 27;
// var obj = {
//   name: 'johnny Deep',
//   city : 'America'
// };
//
// function change(a,b){
//   a = 30;
//   b.city = 'san francisco';
// }
//
// change(age,obj);
//
// console.log(age);
// console.log(obj);


// Passing Function as Arguments.

// var year = [1996,1998,2000,1997,2002,2005,2007,2009];
//
// function arrayCalc(arr,fn){
//   var arrRes = [];
//   for(var i=0; i<arr.length; i++)
//     arrRes.push(fn(arr[i]));
//   return arrRes;
// }
//
// function calculateAge(el){
//   return (2020 - el);
// }
//
// function isFullAge(el){
//   return el >= 18;
// }
//
// function maxHeartRate(el){
//   if(el >= 18 && el <= 81)
//     return Math.round(206.9-(0.67*el));
//   else {
//     return -1;
//   }
// }
// var ages = arrayCalc(year,calculateAge);
// var fullAges = arrayCalc(ages,isFullAge);
// var rates = arrayCalc(ages,maxHeartRate)
// console.log(ages);
// console.log(fullAges);
// console.log(rates);


// Function returning Function
//
// function interViewQuestion(job){
//   if(job === 'designer'){
//     return function(name){
//       console.log(name+', can you please explain what UX design is?');
//     }
//   }else if(job === 'teacher'){
//       return function(name){
//         console.log('What subject do you teach, '+name+'?');
//       }
//   }else{
//       return function(name){
//         console.log(name+', What do you do?');
//       }
//   }
// }
//
// var teacherQuestion = interViewQuestion('teacher');
// teacherQuestion('john');
//
// var driverQuestion = interViewQuestion('driver');
// driverQuestion('James');
//
// interViewQuestion('designer')('Smith');


      // Imediate Invoked function expression

// function game(){
//   var score = Math.random()*10;
//   console.log(score <= 5);
// }
//
// game();
//
// (function(){
//   var score = Math.random()*10;
//   console.log(score <= 5);
// })();
//
// (function(goodLuck){
//   var score = Math.random()*10;
//   console.log(score);
//   console.log(score <= 5-goodLuck);
// })(5);

      // Uing Closure

function interViewQuestion(job){
  if(job === 'designer'){
    return function(name){
      console.log(name+', can you please explain what UX design is?');
    }
  }else if(job === 'teacher'){
      return function(name){
        console.log('What subject do you teach, '+name+'?');
      }
  }else{
      return function(name){
        console.log(name+', What do you do?');
      }
  }
}

var teacherQuestion = interViewQuestion('teacher');
teacherQuestion('john');

var driverQuestion = interViewQuestion('driver');
driverQuestion('James');

interViewQuestion('designer')('Smith');
