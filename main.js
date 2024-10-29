var wakeuptime;
var dstime; 
var sleeptime;
var noon=12;


function showCurrenttime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = current.getMinutes();
    var seconds = currentTime.getSeconds();

    if(hours >= noon){
        meridian = "PM";
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian; 
    clock.innerText = clockTime
}

setInterval(showCurrenttime, 1000);


function changeTime(){
    var time = new Date().getHours();

    var image = "img/ds_clock/png";
    var imageHTML = document.getElementById('timeImage');
    if(time == wakeuptime){
        image = "img/morning/gif";
    }
    else if(time == dstime){
        image = "img/ class.gif";
    }
    else if (time == sleeptime){
        image = "img/night.gif";
    }

    imageHTML.src = image; 
}

    function updateTime(){
        var wakeuptime = document.getElementById('wakeUpTimeSelector');

        wakeuptike = wakeUpTimeSelector.value;

        var dsTimeSelector = document.getElementById()
    }


