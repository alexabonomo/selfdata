const CRYSTAL_SIZE = 500;
const SIDES = 6;

// layout
const MARGIN = CRYSTAL_SIZE / 2
const COLUMNS = 3
const ROWS = 4
const PADDING = CRYSTAL_SIZE * 0.2
const GRIDBOX = CRYSTAL_SIZE + PADDING
const START = (CRYSTAL_SIZE / 2) + MARGIN

//sleep x and y 
let sx = 0;
let sy = 0;


let PALETTE = [];

ALL_CRYSTALS = []


let linesHr = [];
let hr;

let sleepS = [];



window.addEventListener("click", function() {
    console.log(myHeartrate);
    console.log(mySleep);

    //make original sleep glyphs
//     for(let i= 0; i < sleepS.length; i++){
//        sleepS[i].makeSleepShape();
//        console.log("made sleep shape");
//    }

//    for (let i = 0; i < linesHr.length; i++) {
//             linesHr[i].makeHrLine();
//             console.log("made a line");
//     }

});

function setup(){
    const totalX = START + GRIDBOX * COLUMNS
    const totalY = START + GRIDBOX * ROWS
    
    // var canvas = createCanvas(totalX, totalY);
    var canvas = createCanvas(windowWidth, 10000);
    background(255);
    x = 300;
    y = 300;
    x1 = x;
    x2 = x;
    yStep = 0;


    //make hr lines
    for (let i = 0; i < 11260; i+=20){
        linesHr.push(new hrLine);
    }

    //make original sleep glyphs
    // for (let i = 0; i < mySleep.length; i++){
    //     sleepS.push(new sleepShape);
    // }


    canvas.parent('data-viz');
        //     loadJSON('http://api.openweathermap.org/data/2.5/weather?id=5341704&APPID=f49674ab8325154a34a42d1cff090bf9&units=metric', gotData);    
        //      noLoop();
        //      angleMode(DEGREES);
        //      rectMode(CENTER);
}


function draw(){

    newMakeHrLine(0);

    //     for (let i = 0; i < linesHr.length; i++) {
    //         linesHr[i].makeHrLine();
    // }



//     if (weather) {
//         background(weather.main.temp + 50, 100, weather.main.humidity + 150);
//         ellipse(50, 100, weather.main.temp, weather.main.temp);
//         ellipse(150, 100, weather.main.humidity, weather.main.humidity);
//         console.log(weather.main.temp, weather.main.humidity);
//     } 
//     // go to a point on the screen and draw a crystal
//     // continue to do this until we run out of room
//     for (let x = 0; x < COLUMNS; x++) {
//         for (let y = 0; y < ROWS; y++) {
//             const posX = START + (x * GRIDBOX)
//             const posY = START + (y * GRIDBOX)
//             ALL_CRYSTALS.push(new Crystal(posX, posY))
//         }
//     }

//     ALL_CRYSTALS.forEach(crystal => {
//         crystal.render()
//     })
}


class hrLine  {


    constructor(){
        this.x1 = x;
        this.y1 = 300 - hr;
        this.x2 = x;
        this.y2 = 320 - hr;
        this.yStep = 0;
        this.counter = 0;
    }


    makeHrLine() {
        for(let i = 0; i < 11260; i+=20){
            hr = myHeartrate[i];
            this.y1 = 300 - hr + this.yStep;   
            this.y2 = 320 - hr + this.yStep ;
            

            line(this.x1, this.y1, this.x2, this.y2);
            console.log("x1 is: " + this.x1 + " y1 is: " + this.y1 + " x2 is: " + this.x2 + " y2 is: " + this.y2 + " step: " + this.yStep );

            this.x1 += 20;
            this.x2 += 20;


            if (this.x1 >= windowWidth - 300){
                this.x1 = 300;
                this.x2 = 300;
                this.yStep += 300;
                                        
        }
        }
    }

}



class sleepShape {

    constructor(){
        this.sx = 300;
        this.sy = 300;
    }


    makeSleepShape(){
        for (let i = 0; i < mySleep.length; i++){
            if (mySleep[i] == "wake") {
                // //make circle
                // push();
                // ellipse(this.sx, this.xy, 20, 20);
                // stroke(0);
                // noFill();
                // pop();

                //makeSemiCircle
                push();
                arc(this.sx, this.sy+5, 20, 20, PI, 0, CHORD);
                pop();
            } else if (mySleep[i]== "light"){
                //makeSemiCircle
                push();
                arc(this.sx, this.sy+5, 20, 20, PI, 0, CHORD);
                pop();
            } else if (mySleep[i] == "rem"){
                //make triangle
                push();
                triangle(this.sx-10, this.sy+10, this.sx , this.sy - 10, this.sx + 10, this.sy + 10);
                pop();
            } else if (mySleep[i] == "deep"){
                //make triangle
                push();
                triangle(this.sx-10, this.sy+10, this.sx , this.sy - 10, this.sx + 10, this.sy + 10);
                pop();
            }

            this.sx += 40;
            

            if (this.sx > 500){
            this.sx = 300;
            this.sy += 40;
            }

            console.log("sx is: " + this.sx + " sy is: " + this.sy);
        }
    }

    // makeCircle() {
    //     push();
    //     ellipse(this.sx, this.xy, 20, 20);
    //     stroke(0);
    //     noFill();
    //     strokeWeight(1);
    //     pop();
    // }

    // makeSemiCircle() {
    //     push();
    //     arc(this.sx, this.sy+5, 20, 20, PI, 0, CHORD);
    //     pop();
    // }

    // makeTriangle() {
    //     push();
    //     triangle(this.sx-10, this.sy+10, this.sx , this.sy - 10, this.sx + 10, this.sy + 10);
    //     pop();
    // }
}


function alertEmotion(){
    clearInterval();
    alert("the time is " + today + "Record Your emotion!");
    // sendMessage();
    a.play();
}


function reminderEmotion () {
    const today = new Date();

    if (today.getHours() >= 9 && today.getHours() <= 22) {
        //random within 13 hours
        window.setInterval(alertEmotion, Math.random() * 46800000);

        console.log("It's within time");
    } else {
        console.log("it's not within time")
    }
}

reminderEmotion();