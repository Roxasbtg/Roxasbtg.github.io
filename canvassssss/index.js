function getImage(e, c) {
    var a = new Image();
    a.src = e;
    a.addEventListener("load", c);
    return a;
}

const C = document.getElementById("canvasTest"),
    x = C.getContext('2d'),
    mario = getImage("mario.png", marioCallback);

Math.TAU = Math.PI * 2;

var grd = x.createLinearGradient(0, 0, 150, 0);
grd.addColorStop(0, "#FF0000");
grd.addColorStop(1, "#FFFFFF");

x.fillStyle = grd;
x.fillRect(10, 10, 150, 80);

x.fillStyle = "#000000";

x.moveTo(1, 2);
x.lineTo(200, 100);
x.stroke();

x.beginPath();
x.arc(70, 20, 40, 0, Math.TAU);
x.stroke();

x.font = "30px Arial";
x.fillText("LOL you can see this", 10, 50);

function marioCallback() {
    x.drawImage(mario, 60, 60, 64, 64);
}
