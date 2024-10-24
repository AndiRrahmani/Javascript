var button = document.getElementById("btn")
var text = document.getElementById("text")
var input= document.getElementById("input")

button.onclick = function(){
    text.innerHTML = input.value;
}


var number1= document.getElementById("number")
var number2= document.getElementById("number2")
var sum= document.getElementById("sum")
var result= document.getElementById("result")

sum.onclick = function(){
    result.innerHTML = parseInt(number1.value) + parseInt(number2.value);
}



var age= document.getElementById("age")
var city= document.getElementById("city")
var vote= document.getElementById("vote")
var text= document.getElementById("text")

vote.onclick= function(){
    if(parseInt(age.value)>=18){
        text.innerHTML = "You can vote"
    }
    else{
        text.innerHTML = "You can't vote"
    }
}






