var FacebookIsAScam = document.getElementById("canvas"),
    X = FacebookIsAScam.getContext('2d'),
    x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0,
    asfjl = new Image();
asfjl.src = "sanic.png";

Math.TAU = Math.PI * 2;

function render() {
  X.fillStyle = "white";
  X.fillRect(0, 0, FacebookIsAScam.width, FacebookIsAScam.height);
  
  X.fillStyle = "green";
  X.beginPath();
  X.arc(x1, y1, 45, 0, Math.TAU);
  X.fill();
  
  x1+=3;
  y1+=1;
  x1 %= FacebookIsAScam.width;
  y1 %= FacebookIsAScam.height;
  
  X.fillStyle ="blue";
  X.drawImage(asfjl, x2, y2, 78, 34);
  
  x2+=46;
  y2+=4;
  x2 %= FacebookIsAScam.width;
  y2 %= FacebookIsAScam.height;
  requestAnimationFrame(render);
}

render();