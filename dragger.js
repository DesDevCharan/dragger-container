function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 0);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
var rad = document.myForm.myRadios;
var prev = null;
for (var i = 0; i < rad.length; i++) {
  rad[i].onclick = function() {
    document.getElementById("floater-box").style.position = "";
    document.getElementById("floater-box").style.top = "";
    document.getElementById("floater-box").style.right = "";
    document.getElementById("floater-box").style.left = "";
    document.getElementById("floater-box").style.bottom = "";
    if (this.value === "1") {
      document.getElementById("floater-box").classList.remove("bottom");
    } else if (this.value === "2") {
      document.getElementById("floater-box").classList.add("bottom");
    }
  };
}
window.onload = addListeners();

function addListeners() {
  document
    .getElementById("floater-box")
    .addEventListener("mousedown", mouseDown, false);
  window.addEventListener("mouseup", mouseUp, false);
}

function mouseUp() {
  window.removeEventListener("mousemove", divMove, true);
}

function mouseDown(e) {
  window.addEventListener("mousemove", divMove, true);
}

function divMove(e) {
  var div = document.getElementById("floater-box");
  div.style.position = "absolute";
  div.style.top = e.clientY + "px";
  div.style.left = e.clientX + "px";
}
