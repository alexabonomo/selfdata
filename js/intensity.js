// for red, green, and blue color values
let r, g, b;

function setup() {
  let canvas = createCanvas(500, 500);

  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);

  canvas.parent('intensity');
}

function draw() {
  background(0);
  // Draw a circle
  fill(255);
  ellipse(250, 250, 100, 100);

  if (mouseIsPressed) {
        fill(20);
    } else {
        fill(230);
        
    }
}
// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 255, 255);
  if (d < 50) {
  };
};

function add () {
    var counter = 0;
    counter = setInterval(function(){ 
        counter++;
        console.log(counter);
    }, 1000);
    return counter
};
