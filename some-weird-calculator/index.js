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