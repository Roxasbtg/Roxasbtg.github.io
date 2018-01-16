/*

HELLO THERE
IT SEEMS LIKE YOU HAVE ENTERED THE CHEAT CODE

YOU EITHER HAVE FINISHED SUCCESSFULLY AND IS NOW WONDERING WHAT'S IN HERE
OR 
YOU FAILED MISERABLY AND NEED HELP

BELOW IS THE ANSWER. DO NOT COPY THE CODE. FIGURE OUT WHAT YOU DID WRONG BY YOUR SELF. DO NOT CHANGE YOUR CODE UNTIL YOU ARE SURE YOU HAVE FOUND YOUR MISTAKE. 
THIS IS THE PROCESS OF LEARNING

*/


// ------------ OLD CODE ------------
// YOU WROTE THIS CODE. IT'S JUST HERE SO THE SCRIPT WORKS PROPERLY

var lb = document.getElementById("lb"),
    src = {
        on: "https://www.w3schools.com/js/pic_bulbon.gif",
        off: "https://www.w3schools.com/js/pic_bulboff.gif"
    };
document.getElementById("demo").innerHTML = "Roxasbtg is kewl";

// ------------ NEW CODE ------------
// THE CODE YOU WERE SUPPOSED TO WRITE

var state = true;

function turnOn() {
    lb.src = src.on;
}
function turnOff() {
    lb.src = src.off;
}
function switchState() {
    state ^= true;
}
function onClick() {
    if(state) {
        turnOn();
    } else {
        turnOff();
    }
    switchState();
}

// FOR ADDEVENTLISTENER:
    lb.addEventListener("click", onClick);

// FOR ONCLICK
//    lb.onclick = onClick;

/* 
This also works, abusing JS:

s=lb.onclick=_=>{s^=1;lb.src=src[s?"on":"off"]};

    This is one of the reasons I love JavaScript.
    YOU CAN ABUSE THE [Level1SwearWord] OUT OF IT

    The code above uses 305 characters
    The abused code uses 48 characters.

    THEY DO THE SAME THING

    
How it works

s = // (bad declaration) set 'window.s' to the same as next value setter
    lb.onclick = // set the lightbulb's onclick to
        _ => { // arrow function (shorter than normal function) 1 arg _, Event
            s ^= 1; // set 's' to not 's'
            lb.src = src[ // set lb.src to src's...
                s ? "on" : "off" // if 's' than "on," if not, "off"
            ] // ... attribute
        }; // end statement
*/