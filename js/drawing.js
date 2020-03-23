
//weather data
var weather;
//main x and y
let x = 300;
let y = 300;
var counter = 0;
var x1, x2, y1, y2, yStep;

//sleep x and y
let sx = 300;
let sy = 300; 


//triangles

let startingHue = 172;
let startingHue2 = 15;
let startingHue3 = 358;

let endingHue = 120;
let endingHue2 = 6;
let endingHue3 = 358;

var randomNum;
var randomNum2;
var randomNum3;

var randomHue;
var randomHue2;
var randomHue3;

var colorDiff;
var colorDiff2;
var colorDiff3;

var a,b,c,d,e,f;

let whichOne = 0;


var buttonToggleOne = true;

var saveComposition = false;
var resetDrawing = false;
var fadeDrawing = false;

var makeFirstTriangle = true;

//framrate
var fr = 15;





function setup(){
    var canvas = createCanvas(windowWidth, 10000);
    
    //background(230);
    colorMode(HSB, 360, 100, 100);

    //trianfles
    colorDiff = startingHue - endingHue;
    colorDiff2 = startingHue2 - endingHue2;
    colorDiff3 = startingHue3 - endingHue3;

    //drawBackground();


    x = 300;
    y = 300;
    x1 = x;
    x2 = x;
    yStep = 0;

    canvas.parent('data-viz');
        //loadJSON('http://api.openweathermap.org/data/2.5/weather?id=5341704&APPID=f49674ab8325154a34a42d1cff090bf9&units=metric', gotData);
        
    frameRate(fr);
}

console.log(mySleep);

function gotData(data){
//  println(data); 
 weather = data;
}

window.onload = (event) => {
  console.log('page is fully loaded');
};


function draw(){
    //newMakeHrLine();
    makeSleepShapes();
}

function newMakeHrLine()  {
    var countLength = myHeartrate.length;
    hr = myHeartrate[counter];

    y1 = y - hr + yStep;
    y2 = y + 20 - hr + yStep;

    line(x1, y1, x2, y2);
    console.log(`x1 is ${x1}, y1 is ${y1}, x2 is ${x2}, y2 is ${y2}`);
    counter+=5;
    x1 += 10;
    x2 += 10;

    if (x1 >= windowWidth - 300){
            x1 = 300;
            x2 = 300;
            yStep += 100;
                                        
        }
    if (counter > countLength - 1){
        noLoop();
        console.log("Finished HR Line!")
    }
}

function makeSleepShapes(){
    var countLength = mySleep.length;
    sleep = mySleep[counter];
    //console.log(sleep)
    counter++;

    if (sleep == "wake") {
        //makeSemiCircle
        push();
        arc(sx, sy+5, 20, 20, PI, 0, CHORD);
        pop();
    } else if (sleep == "light") {
        //makeSemiCircle
        push();
        arc(sx, sy+5, 20, 20, PI, 0, CHORD);
        pop();
    } else if (sleep == "rem") {
        //make triangle
        push();
        triangle(sx-10, sy+10, sx , sy - 10, sx + 10, sy + 10);
        pop();   
    } else if ( sleep == "deep") {
        //make triangle
        push();
        triangle(sx-10, sy+10, sx , sy - 10, sx + 10, sy + 10);
        pop(); 
    }

    sx+=40;
    if(sx > 500){
        sx = 300;
        sy += 40;
    }

    if (counter > countLength - 1){
        noLoop();
        console.log("Finished Sleep!")
    }
}



/// triangulations
function mouseClicked(){
    if(makeFirstTriangle){
        drawFirstTriangle();
    }else{
        drawTriangle2();
    }

 //boolean conditional-switches traingle
if(mouseX < 60 && mouseY > 550 && mouseY < 600){
    buttonToggleOne=!buttonToggleOne;
}

}

function pickColor(){
    if (whichOne==0){
        pickRandomHue();
    } else if (whichOne==1){
        pickRandomHue2();
    } else if (whichOne==2){
        pickRandomHue3();
    }

    whichOne++;
    if (whichOne>2) {
        whichOne=0;
    }
}

function drawFirstTriangle(){
    makeFirstTriangle=false;
    noStroke();
    fill(randomHue, 20, 50, random(5,200));


//TODO: DRAW X AND Y on axis.What will be the axis? Location? How to get Location data
    a=mouseX+random(-30, 30);
    b=mouseY+random(-30, 30);
    c=mouseX+random(100);
    d=mouseY+random(100);
    e=mouseX;
    f=mouseY;

    //Draw  x1, y1, x2, y2, x3, y3
    triangle(a, b, c, d, e, f);
 
    //chooses random color range
    pickColor();
}


function drawTriangle(){
    noStroke();
    fill(randomHue, 65, 86, random(5, 200));

    triangle(e, f, mouseX, mouseY, c, d);
    c=e;
    d=f;
    e=mouseX;
    f=mouseY;

    //chooses random color range
    pickColor();
}

function drawTriangle2(){
    noStroke();
    fill(randomHue, 72, 99, random(5, 200));

    triangle(a, b, mouseX, mouseY, e, f); 
    e=a;
    f=b;
    a=mouseX;
    b=mouseY;

    pickColor();
}


//blue range
function pickRandomHue() {
  randomNum= floor(random(colorDiff));
  randomHue= randomNum + startingHue;
}


//red range
function pickRandomHue2() {
  randomNum2= floor(random(colorDiff2));
  randomHue= randomNum2 + startingHue2;
}


//red/purple range
function pickRandomHue3() {
  randomNum3= floor(random(colorDiff3));
  randomHue= randomNum3 + startingHue3;
}

//draws border
function drawBorder() {
  fill(255, 0, 99);
  noStroke();
  rectMode(CORNER);
  rect(0, 550, width, height/6);
  rect(0, 0, width/30, height);
  rect(775, 0, width/30, height);
  rect(0, 0, width, height/25);
}

