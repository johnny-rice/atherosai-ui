var c = document.getElementById('canv');
var $ = c.getContext('2d');


var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}

// rgb(255,203,87)
// rgb(239,59,92)
// rgb(,179,248)
// rgb(250,55,71)

var R = function(x, y, t) {
  return( Math.floor(157 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(153 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(87 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;

for(x=0;x<=35;x++) {
for(y=0;y<=35;y++) {
    col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
}
}
t = t + 0.030;
