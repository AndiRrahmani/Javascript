function printNames(){
    console.log("Andi");
    //Callback
    setTimeout(function() {console.log("Aniku")}, 3000 );
    console.log("Olsa");
}

var colors = ["blue", "red", "green", "purple"];

function changeBgColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}


var names = ["Andi", "Anik", "Quattro"];

function changeName(){
    document.querySelector('p').innerHTML = names[Math.round(Math.random() * (names.length-1))];
}

setInterval(changeBgColor, 500);
setInterval(changeName, 500);