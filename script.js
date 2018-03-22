// document.body.appendChild(document.createTextNode(" and JaP is kewl"));

(function () {
    var e = document.getElementById("tableOfContents"),
        x = document.getElementsByTagName("h1"),
        ix = 0;

    for (let i of x) {
        let n = document.createElement("li"),
            m = document.createElement("a");

        m.name = ++ix;
        i.parentElement.insertBefore(m, i);

        {
            let c = document.createElement("a");
            c.href = "#" + ix;
            c.innerHTML = i.innerHTML;
            n.appendChild(c);
        }

        e.appendChild(n);
    }
}());

// TPYJKEJ JASH CODEWD
document.getElementById("demo").innerHTML = "Roxasbtg is kewl";

// START ---------- Roxasbtg ----------

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

// calculator
(function () {
    var a = document.querySelector("#calculator input[e='0']"),
        b = document.querySelector("#calculator input[e='1']"),
        c = document.querySelector("#calculator input[e='2']"),
        d = document.querySelector("#calculator input[e='3']"),
        e = document.querySelector("#calculator input[e='4']"), // Roxasbtg forgot commas, I put them down for him. 
        f = document.querySelector("#calculator input[e= '5']"), // This doesn't cause a bug, but does make a 
        g = document.querySelector("#calculator input[e='6']"), // "bad initialization"
        h = document.querySelector("#calculator input[e='7']"),
        i = document.querySelector("#calculator .out");

    function setOut(e) {
        i.innerHTML = e;
    }

    function getVal(e) {
        return parseFloat(e.value) || 0;
    }

    function onChangeInputPlus() {
        setOut(getVal(a) + getVal(b));
    }

    function onChangeInputTimes() {
        setOut(getVal(c) * getVal(d));
    }

    function onChangeInputSubt() {
        setOut(getVal(e) - getVal(f));
    }

    function onChangeInputDivide() {
        setOut(getVal(g) / getVal(h));
    }

    function aelC(f, ...el) { // aelC stands for "add event listener change"
        for (let i of el) {
            i.addEventListener("change", f);

            // makes it more responsive
            i.addEventListener("keydown", f);
            i.addEventListener("keyup", f);
        }
    }

    aelC(onChangeInputPlus, a, b);
    aelC(onChangeInputTimes, c, d);
    aelC(onChangeInputSubt, e, f);
    aelC(onChangeInputDivide, g, h);
}());

// Canvas
(function() {
    const C = document.getElementById("canvasTest"),
          x = C.getContext('2d');
    
    Math.TAU = Math.PI * 2;
    
    x.moveTo(1,2);
    x.lineTo(200, 100);
    x.stroke();
    
    x.beginPath();
    x.arc(70,20,40,0, Math.TAU);
    x.stroke();
    
    x.font = "30px Arial";
    x.fillText("LOL you can see this", 10,50);
}());

// END ----------- Roxasbtg -----------