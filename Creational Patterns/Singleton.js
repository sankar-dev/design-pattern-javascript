var singleTon = (function (){
  var instance;
  
  function createFunction(){
    var obj = new Object("I am the instance");
    return obj;
  }
  
  return {
    getInstance: function (){
      if(!instance){
        instance = createFunction();
      }
      return instance;
    }
  }
})();


function run(){
  var instance1 = singleTon.getInstance();
  var instance2 = singleTon.getInstance();
  
  console.log("Same instance ?" + (instance1 === instance2));
}

run();