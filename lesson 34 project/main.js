var circle = document.getElementById("circle");

function showCircle() {
    circle.style.block = 0;
    circle.style.top = Math.random() * 500 + 'px';
    circle.style.left = Math.random() * 900 + 'px';
}

showCircle.onclick 