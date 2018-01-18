// document.body.appendChild(document.createTextNode(" and JaP is kewl"));

// TPYJKEJ JASH CODEWD
document.getElementById("demo").innerHTML = "Roxasbtg is kewl";

// START ----------- JaPNaA -----------
// FIXING YOUR PLAGERIZED LIGHTBULB BECAUSE IT'S BOTHERING ME
/*

DO NOT COPY EXACT CODE

1. Create a variable to store the state of the lightbulb.
  The state of the lightbulb: Whether the light is ON or OFF
                                                 (true)(false)
    DO NOT SET "ON" or "OFF" AS THE VARIABLE NAME
      USE true AND false

  Variable syntax
    var VariableName = VariableValue;

  You need to know if the lightbulb is on or off to toggle it!

2. Create functions
  One for "turn on", "turn off", "switch state", "on click"
      FUNCTION NAMES CANNOT HAVE SPACES IN BETWEEN THEM, OR QUOTES AROUND THEM... actually it's too complex right now

  Function syntax, how functions look:
    function FunctionName(argumentNames) {
      // Your code
    }
    SUBSTITUTE 'FunctionName' with name of function (YOU CHOOSE YOUR OWN)

  This is an EXAMPLE of how you DECLARE a function:
    DO NOT COPY THIS CODE. THIS HAS NOTHING TO DO WITH WHAT YOU'RE DOING
    function sayHiOrBye(hiOrBye) {
      // FunctionName is "sayHiOrBye", argumentNames are "hiOrBye"
      // Arguments are variables used in a function
      if(hiOrBye) {
        alert("Hi!");
      } else {
        alert("Bye!");
      }
    }

  This is how you CALL a function, do the code inside the function
    DO NOT COPY THIS CODE. THIS HAS NOTHING TO DO WITH WHAT YOU'RE DOING

    sayHiOrBye(true); // Call 'sayHiOrBye' with the variable 'hiOrBye' be true

  Try to guess the end result.

  Functions help simply the process

3. Write the functions
  Functions can do anything JavaScript can do...
  For this, just copy the code you wrote below that turns on the lightbulb
    and paste it into the "turn on" function
      lb.src = src.on;
  this line of code will execute when you call the function.
  DO THE SAME BUT CHANGE IT FOR THE TURN OFF FUNCTION

  Your functions don't do anything right now. You have to make them do things.

4. Write functions
      Write the "switch state" function:
        COPY IT
        function switchState() {
          YourVariable ^= true;
          // This uses XOR, google it if you want
        }
        SUBSTITUTE 'YourVariable' with the variable you used to store the state of the lightbulb

      Write "on click" function:
        function onClick() {
          if(YourVariable) {
            TurnOnFunction();
          } else {
            TurnOffFunction();
          }
          switchState();
        }
        SUBSTITUTE 'TurnOnFunction' and 'TurnOffFunction' with respective functions

    I got lazy making you write 2 functions.

5. Set the event listeners
  REMOVE YOUR OLD 'onclick's FIRST
  because then u will break it

  Choose a method:
    addEventListener
    .onclick

  ADDEVENTLISTENER:
    Element.addEventListener(Type, Function);
      Where Element is document.getElementById(id),
              What element this appies to
            Type is "click", etc.
              What does it respond to
            Function is a function.
              What does it do
      SUBSTITUTE 'Element' for 'lb', 'Type' for '"click"', Function for 'onClick'

  .ONCLICK
    Element.onclick = Function;
      Where Element is document.getElementById(id),
              What element this appies to
            Function is a function.
              What does it do

    Tell the program what to do.

6. Test it out!

7. Does it work?
    YES:
      GOOD JOB
      HAVE A COOKIE
        document.cookie = "CookieFromJaPNaA=Property of Roxasbtg;";

    NO:
      PRESS THIS KEY COMBINATION ON YOUR SITE
        UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT 'B' 'A'

*/

(function () {
  var a = [],
    c = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  function openAns() {
    open("ans.js", "_blank");
  }

  addEventListener("keydown", function (e) {
    a.push(e.keyCode);

    var cl = c.length,
      s = true;

    while (a.length > 10) {
      a.shift();
    }

    for (let i = 0; i < cl; i++) {
      if (a[i] != c[i]) {
        s = false;
        break;
      }
    }

    if (s) {
      openAns();
    }
  });

}());


// END ------------ JaPNaA ------------



// START ---------- Roxasbtg ----------

var lb = document.getElementById("lb"),
  src = {
    on: "https://www.w3schools.com/js/pic_bulbon.gif",
    off: "https://www.w3schools.com/js/pic_bulboff.gif"
  };

var YouTube = true;
function turnon(){
  lb.src = src.on;
}
function turnoff(){
  lb.src = src.off;
}
function switchState() {
  YouTube ^= true;
}
function onClick() {
  if(YouTube) {
    turnon();
  } else {
    turnoff();
  }
  switchState();
}
lb.addEventListener("click", onClick);

// calculator
(function(){

var Twitter = document.querySelector("#calculator input[e='0']"),
    Facebook = document.querySelector("#calculator input[e='1']"),
    Frogger= document.querySelector("#calculator input[a='0']"),
    Minecraft=document.querySelector("#calculator input[a='0']"),
    Tumblr = document.querySelector("#calculator .out");

function onChangeInput() {
  console.log("CHANGE");
}

Twitter.addEventListener("change", onChangeInput);
Facebook.addEventListener("change", onChangeInput);

// Input 0's value is stored at Twitter.value
var a = Twitter.value + Facebook.value;
console.log(a);

}());
// END ----------- Roxasbtg -----------
