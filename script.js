// document.body.appendChild(document.createTextNode(" and JaP is kewl"));

// TPYJKEJ JASH CODEWD
document.getElementById("demo").innerHTML = "Roxasbtg is kewl";

var lb = document.getElementById("lb"),
    src = {
      on: "https://www.w3schools.com/js/pic_bulbon.gif",
      off: "https://www.w3schools.com/js/pic_bulboff.gif"
    };

document.getElementById("demo").onclick = function() {
  lb.src = src.on;
  document.getElementById("demo").onclick=function(){
    lb.src = src.off;
  };
};
