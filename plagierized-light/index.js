var lb = document.getElementById("lb"),
    src = {
        on: "https://www.w3schools.com/js/pic_bulbon.gif",
        off: "https://www.w3schools.com/js/pic_bulboff.gif"
    };

var YouTube = true;

function turnon() {
    lb.src = src.on;
}

function turnoff() {
    lb.src = src.off;
}

function switchState() {
    YouTube ^= true;
}

function onClick() {
    if (YouTube) {
        turnon();
    } else {
        turnoff();
    }
    switchState();
}
lb.addEventListener("click", onClick);