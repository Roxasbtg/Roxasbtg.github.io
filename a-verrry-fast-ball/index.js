const C = document.getElementById("c"),
      X = C.getContext("2d"),
      W = 300, H = 150;

Math.TAU = Math.PI * 2;

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.vx = 0;
    this.y = y;
    this.radius = radius;
    this.color = "#FF0000";
  }
  draw() {
    X.fillStyle = this.color;
    X.beginPath();
    X.arc(this.x, this.y, this.radius, 0, Math.TAU);
    X.fill();
  }
  tick(tt) {
    this.vx += 0.001;
    this.x += this.vx * tt;
    if (this.x > W + this.radius){
      this.x = -this.radius;
    }
  }
}


var then_ = 0;

var circle = new Circle(67, 34, 16);

function clear() {
  X.clearRect(0, 0, W, H);
}

function reqanf() {
  var now = performance.now(), 
      tt = now - then_;
  then_ = now;

  clear();

  circle.tick(tt);
  circle.draw();

  requestAnimationFrame(reqanf);
}

reqanf();