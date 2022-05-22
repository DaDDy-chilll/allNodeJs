
function name(val){
    console.log('hello');
    val()
};

// Fucntion Expression
var myFun = function(){
    console.log('hello world')
};

name(myFun);