// document.body.appendChild(document.createTextNode(" and JaP is kewl"));

(function() {
    var e = document.getElementById("tableOfContents"),
        x = document.getElementsByTagName("h1"),
        ix = 0;
        
    for(let i of x) {
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
    var somethingOtherThanTwitterPlease = document.querySelector("#calculator input[e='0']"),
        somethingOtherThanFacebookPlease = document.querySelector("#calculator input[e='1']"),
        somethingOtherThanFroggerPlease = document.querySelector("#calculator input[e='2']"),
        somethingOtherThanMinecraftPlease = document.querySelector("#calculator input[e='3']"),
        somethingOtherThanInstagramPlease = document.querySelector("#calculator input[e='4']"), // Roxasbtg forgot commas, I put them down for him. 
        somethingOtherThanSnapchatPlease = document.querySelector("#calculator input[e= '5']"), // This doesn't cause a bug, but does make a 
        somethingOtherThanGooglePlease = document.querySelector("#calculator input[e='6']"), // "bad initialization"
        somethingOtherThanWalmartPlease = document.querySelector("#calculator input[e='7']"),
        somethingOtherThanTumblrPlease = document.querySelector("#calculator .out");

    function setOut(e) {
        somethingOtherThanTumblrPlease.innerHTML = e;
    }

    function getVal(e) {
        return parseFloat(e.value) || 0;
    }

    function onChangeInputPlus() {
        setOut(getVal(somethingOtherThanTwitterPlease) + getVal(somethingOtherThanFacebookPlease));
    }

    function onChangeInputTimes() {
        setOut(getVal(somethingOtherThanFroggerPlease) * getVal(somethingOtherThanMinecraftPlease));
    }

    function onChangeInputSubt() {
        setOut(getVal(somethingOtherThanInstagramPlease) - getVal(somethingOtherThanSnapchatPlease));
    }

    function onChangeInputDivide() {
        setOut(getVal(somethingOtherThanGooglePlease) / getVal(somethingOtherThanWalmartPlease));
    }

    function aelC(f, ...el) { // aelC stands for "add event listener change"
        for (let i of el) {
            i.addEventListener("change", f);

            // makes it more responsive
            i.addEventListener("keydown", f);
            i.addEventListener("keyup", f);
        }
    }

    aelC(onChangeInputPlus, somethingOtherThanTwitterPlease, somethingOtherThanFacebookPlease);
    aelC(onChangeInputTimes, somethingOtherThanFroggerPlease, somethingOtherThanMinecraftPlease);
    aelC(onChangeInputSubt, somethingOtherThanInstagramPlease, somethingOtherThanSnapchatPlease);
    aelC(onChangeInputDivide, somethingOtherThanGooglePlease, somethingOtherThanWalmartPlease);
}());
// END ----------- Roxasbtg -----------