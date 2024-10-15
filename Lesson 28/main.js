var button1 = document.getElementById("btn1")
var button2 = document.getElementById("btn2")
var button3 = document.getElementById("btn3")
var button4 = document.getElementById("btn4")
var txt1 = document .getElementById("txt1")



button1.onclick = function() {
    txt1.style.color="blue";
    txt1.style.textAlign= "center";
    txt1.style.fontSize= "50px";
}

button2.onmouseover = function() {
    alert("you hoverd on me");
}

button3.onmouseleave = function() {
    alert("you left me");
}

button4.onmousewheel = function() {
    txt1.style.cssText = "color: red; text=align: right; font-size: 100px; background-color: lightblue;"
}




