var budgetController = (function(){

    var x = 23;
    var add = function(b){
      return x+b;
    }
    return {
      publicTest : function(b){
        var a = add(b)
        console.log(a);
        return a;
      }
    }
})();

var UIController = (function(){

    //Some Code

})();

var controller = (function(budgetCtrl,UICtrl){

  var z = budgetCtrl.publicTest(5);
  return {
    anotherTest : function(){
      console.log(z);
    }
  }

})(budgetController,UIController);
