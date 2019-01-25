var dragging = false;
var x, y, Ox, Oy, current;

var grabber = document.getElementById("wrapId");
grabber.onmousedown = function(ev) {
  ev = ev || window.event;
  var target = ev.target || ev.srcElement;
  current = target.parentNode;
  dragging = true;
  x = ev.clientX;
  y = ev.clientY;
  Ox = current.offsetLeft;
  Oy = current.offsetTop;
};

document.onmousemove = function(ev) {
  ev = ev || window.event;
  if (dragging === true) {
    var Sx = parseFloat(ev.clientX) - x + Ox;
    var Sy = parseFloat(ev.clientY) - y + Oy;
    var head = document.getElementById("head-div").offsetHeight;
    current.style.left =
      Math.min(
        Math.max(Sx, Math.min(document.body.offsetWidth - Sx, 0)),
        document.body.offsetWidth - current.offsetWidth
      ) + "px";

    current.style.top =
      Math.min(
        Math.max(Sy, Math.min(document.body.offsetHeight - Sy, 0)),
        document.body.offsetHeight - current.offsetHeight
      )  + "px";
      const topVal = Math.min(
        Math.max(Sy, Math.min(document.body.offsetHeight - Sy, 0)),
        document.body.offsetHeight - current.offsetHeight
      );
      if (topVal <62) {
        current.style.top =
        Math.min(
          Math.max(Sy, Math.min(document.body.offsetHeight - Sy, 0)),
          document.body.offsetHeight - current.offsetHeight
        )  + 62 + "px"; 
      }
    console.log(head, current.style.top, current.style.left);
  }
};

grabber.onmouseup = function(ev) {
  ev = ev || window.event;
  dragging = false;
};

/* radio buttons and timer */

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
    document.getElementById("ele").style.position = "";
    document.getElementById("ele").style.top = "";
    document.getElementById("ele").style.right = "";
    document.getElementById("ele").style.left = "";
    document.getElementById("ele").style.bottom = "";
    if (this.value === "1") {
      document.getElementById("ele").classList.remove("bottom");
    } else if (this.value === "2") {
      document.getElementById("ele").classList.add("bottom");
    }
  };
}
document.onkeyup = function (event) {
    if (event.which == 13 || event.keyCode == 13) {
      document.getElementById('wrapId').style.display = 'block';
    } 
    
    if (event.which == 27 || event.keyCode == 27) {
      document.getElementById('wrapId').style.display = 'none';
    } 
    
  };