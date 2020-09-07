// console.log(this);
/*calculateAge(1997);
function calculateAge(age){
  console.log(2020-age);
  console.log(this);
}*/

var john = {
  name: 'john Markus',
  age : 34,
  calculateAge: function(){
    console.log(this);
    console.log(this.age);

    function inner(){
      console.log(this);
    }
    inner();
  }

}
john.calculateAge();
