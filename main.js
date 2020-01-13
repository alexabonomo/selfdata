
let a;
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-PbrBkzKivw1Em_VKj0qramJang5XGPc",
    authDomain: "self-data-3aa35.firebaseapp.com",
    databaseURL: "https://self-data-3aa35.firebaseio.com",
    projectId: "self-data-3aa35",
    storageBucket: "self-data-3aa35.appspot.com",
    messagingSenderId: "419685489555",
    appId: "1:419685489555:web:dbece4ea3f4759bfb9e666",
    measurementId: "G-ZMKVLZ32J6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

//reference messages collection
var database = firebase.database().ref('emotions');

var myEmotion = ['liking', 'pleasure','enjoyment', 'happy', 'enthusiasm', 'satisfaction', 'contentment', 'thankful', 'excitement', 'affection', 'pride', 'optimism', 'easyGoing', 'love', 'attraction','savoring', 'relaxation', 'hoping', 'caring', 'eager', 'calm', 'chilledOut', 'fear', 'scared', 'panic', 'terror', 'nervous', 'worry', 'dread', 'tense', 'anxiety', 'alarm', 'stressed', 'horror', 'anger', 'mad', 'pissedOff', 'rage', 'hate', 'frustration', 'shock', 'lonely', 'sad', 'grief', 'empty', 'depression', 'devastation', 'longing','wanting', 'craving', 'desire', 'need', 'anticipation','grossedOut', 'revulsion', 'nausea', 'disgust', 'sickened'];

document.getElementById('emotion').addEventListener('submit', submitForm);
//submit form
function submitForm(e){
    e.preventDefault();

    //get date
    var d = new Date();
    date = d.toDateString();

    // for (var i = 0; i < myEmotion.length; i++) {
    //     document.getElementById('\'' + myEmotion[i] + '\'').onclick = changeStyle;

    //     function changeStyle() {
    //         document.getElementById('\'' + myEmotion[i] + '\'').style.textDecoration = "underline";
    //     }
    //     console.log(myEmotion);
    // }

    
    var liking = getInputVal('liking');
    var pleasure = getInputVal('pleasure');
    var enjoyment = getInputVal('enjoyment');
    var happy = getInputVal('happy');
    var enthusiasm = getInputVal('enthusiasm');
    var satisfaction = getInputVal('satisfaction');
    var contentment = getInputVal('contentment');
    var thankful = getInputVal('thankful');
    var excitement  = getInputVal('excitement');
    var adoration =  getInputVal('adoration');
    var affection = getInputVal('affection');
    var pride = getInputVal('pride');
    var optimism = getInputVal('optimism');
    var easyGoing = getInputVal('easyGoing');
    var love = getInputVal('love');
    var attraction = getInputVal('attraction');
    var savoring = getInputVal('savoring');
    var relaxation = getInputVal('relaxation');
    var hoping = getInputVal('hoping');
    var caring = getInputVal('caring');
    var eager = getInputVal('eager');
    var calm = getInputVal('calm');
    var chilledOut = getInputVal('chilledOut');
    var fear = getInputVal('fear');
    var scared = getInputVal('scared');
    var panic = getInputVal('panic');
    var terror = getInputVal('terror');
    var nervous = getInputVal('nervous');
    var worry = getInputVal('worry');
    var dread = getInputVal('dread');
    var tense = getInputVal('tense');
    var anxiety = getInputVal('anxiety');
    var alarm = getInputVal('alarm');
    var stressed = getInputVal('stressed');
    var horror = getInputVal('horror');
    var anger = getInputVal('anger');
    var mad = getInputVal('mad');
    var pissedOff = getInputVal('pissedOff');
    var rage = getInputVal('rage');
    var hate = getInputVal('hate');
    var frustration = getInputVal('frustration');
    var shock = getInputVal('shock');
    var lonely = getInputVal('shock');
    var sad = getInputVal('sad');
    var grief = getInputVal('grief');
    var empty = getInputVal('empty');
    var depression = getInputVal('depression');
    var devastation = getInputVal('devastation');
    var longing = getInputVal('longing');
    var wanting = getInputVal('wanting');
    var craving = getInputVal('craving');
    var desire = getInputVal('desire');
    var need = getInputVal('need');
    var anticipation = getInputVal('anticipation');
    var grossedOut = getInputVal('grossedOut');
    var revulsion = getInputVal('revulsion');
    var nausea = getInputVal('nausea');
    var disgust = getInputVal('disgust')
    var sickened = getInputVal('sickened');;


    //save message
    saveMessage(liking, pleasure, enjoyment, happy, enthusiasm, satisfaction, contentment, thankful, excitement, affection, pride, optimism, easyGoing, love, attraction, savoring, relaxation, hoping, caring, eager, calm, chilledOut, fear, scared, panic, terror, nervous, worry, dread, tense, anxiety, alarm, stressed, horror, anger, mad, pissedOff, rage, hate, frustration, shock, lonely, sad, grief, empty, depression, devastation, longing, wanting, craving, desire, need, anticipation, grossedOut, revulsion, nausea, disgust, sickened);
    
}

//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(liking, pleasure, enjoyment, happy, enthusiasm, satisfaction, contentment, thankful, excitement, affection, pride, optimism, easyGoing, love, attraction, savoring, relaxation, hoping, caring, eager, calm, chilledOut, fear, scared, panic, terror, nervous, worry, dread, tense, anxiety, alarm,  stressed, horror, anger, mad, pissedOff, rage, hate, frustration, shock, lonely, sad, grief, empty, depression,devastation,longing,wanting, craving, desire, need, anticipation, grossedOut, revulsion, nausea, disgust, sickened){
    var newMessageRef = database.push();

    newMessageRef.set({
        date: date,
        liking: document.getElementById("liking").checked,
        pleasure: document.getElementById("pleasure").checked,
        enjoyment: document.getElementById("enjoyment").checked, 
        happy: document.getElementById("happy").checked, 
        enthusiasm: document.getElementById("enthusiasm").checked, 
        satisfaction: document.getElementById("satisfaction").checked, 
        contentment: document.getElementById("contentment").checked, 
        thankful: document.getElementById("thankful").checked, 
        excitement: document.getElementById("excitement").checked, 
        affection: document.getElementById("affection").checked, 
        pride: document.getElementById("pride").checked, 
        optimism: document.getElementById("optimism").checked,
        easyGoing: document.getElementById("easyGoing").checked,
        love: document.getElementById("love").checked,
        attraction: document.getElementById("attraction").checked,
        savoring: document.getElementById("savoring").checked, 
        relaxation: document.getElementById("relaxation").checked, 
        hoping: document.getElementById("hoping").checked, 
        caring: document.getElementById("caring").checked, 
        eager: document.getElementById("eager").checked, 
        calm: document.getElementById("calm").checked, 
        chilledOut: document.getElementById("chilledOut").checked, 
        fear: document.getElementById("fear").checked, 
        scared: document.getElementById("scared").checked, 
        panic: document.getElementById("panic").checked, 
        terror: document.getElementById("terror").checked,
        nervous: document.getElementById("nervous").checked,
        worry: document.getElementById("worry").checked,
        dread: document.getElementById("dread").checked, 
        tense: document.getElementById("tense").checked,
        anxiety: document.getElementById("anxiety").checked,
        alarm: document.getElementById("alarm").checked,
        stressed: document.getElementById("stressed").checked,
        horror: document.getElementById("horror").checked, 
        anger: document.getElementById("anger").checked, 
        mad: document.getElementById("mad").checked, 
        pissedOff: document.getElementById("pissedOff").checked, 
        rage: document.getElementById("rage").checked, 
        hate: document.getElementById("hate").checked, 
        frustration: document.getElementById("frustration").checked, 
        shock: document.getElementById("shock").checked, 
        lonely: document.getElementById("lonely").checked, 
        sad: document.getElementById("sad").checked,
        grief: document.getElementById("grief").checked,
        empty: document.getElementById("empty").checked,
        depression: document.getElementById("depression").checked, 
        devastation: document.getElementById("devastation").checked,
        longing: document.getElementById("longing").checked,
        wanting: document.getElementById("wanting").checked,
        craving: document.getElementById("craving").checked,
        desire: document.getElementById("desire").checked,
        need: document.getElementById("need").checked,
        anticipation: document.getElementById("sad").checked, 
        grossedOut: document.getElementById("grossedOut").checked, 
        revulsion: document.getElementById("revulsion").checked, 
        nausea: document.getElementById("nausea").checked, 
        disgust: document.getElementById("disgust").checked,
        sickened: document.getElementById("sickened").checked,
    });
}



//get firebase data






//weather data
var weather;

const CRYSTAL_SIZE = 500;
const SIDES = 6;

// layout
const MARGIN = CRYSTAL_SIZE / 2
const COLUMNS = 3
const ROWS = 4
const PADDING = CRYSTAL_SIZE * 0.2
const GRIDBOX = CRYSTAL_SIZE + PADDING
const START = (CRYSTAL_SIZE / 2) + MARGIN


let PALETTE = [];

ALL_CRYSTALS = []



var x = 0;
var y = 0;
var stepSize = 5.0;
var lineLength = 25;

//make array show once all has loaded
window.addEventListener("click", function() {
    console.log("MyHeartRate Global: " + myHeartrate);
});
//console.log("MyHeartRate Global: " + myHeartrate);

function setup(){




    const totalX = START + GRIDBOX * COLUMNS
    const totalY = START + GRIDBOX * ROWS
    
    // var canvas = createCanvas(totalX, totalY);
    var canvas = createCanvas(windowWidth, 2000);
    background(255);



    


    PALETTE = [
        color(242,209,109), //yellow - happy
        color(166,81,104), //dark red - relaxation
        color(97,140,140), //muddy blue - fear
        color(45,98,115),//dark blue - anxiety
        color(191,80,80),//red - anger
        color(107,209,242),//light blue - sad
        color(242,191,205),//desire - desire
        color(76,89,47)//dark green - disgust

    ]
    canvas.parent('data-viz');
        //     loadJSON('http://api.openweathermap.org/data/2.5/weather?id=5341704&APPID=f49674ab8325154a34a42d1cff090bf9&units=metric', gotData);
        //     a = loadSound('media/owl.mp3');
        //      noLoop();
        //      angleMode(DEGREES);
        //      rectMode(CENTER);
}

function gotData(data){
//  println(data); 
 weather = data;
}

//make fake sleep data  
function storeSleepCoordinates(s, array){
    array.push(s);
}



// get random values for sleep

// var sleepCoords = [];


// for (let l = 0; l < 600; l++){
//     //Return a random number between 50 and 80
//     var sNum =  Math.floor((Math.random() * 70) + 50);
//     storeSleepCoordinates( sNum, sleepCoords);
// }


// console.log(sleepCoords);

function draw(){
// drawSleep();
//drawHeartrate();

// for(i=0; i < myHeartrate.length; i++){
//     ellipse(myHeartrate[i],500,20,20);
// }


var lineLength = 20;



    // for (let i = 0; i < sleepCoords.length; i++) {
    //     var ys = sleepCoords[i];    
    //     var d = dist(x, ys, x + 10, ys+10);
        
    // }
    
     

    //     if (d > stepSize) {
    //     var angle = atan2(ys - y, x = 10 - x);

    //     push();
    //     translate(x, y);
    //     rotate(angle);
    //     stroke(0);
    //     line(0, 0, 0, lineLength * d / 10);
    //     pop();

    //         x = x + cos(angle) * stepSize;
    //         y = y + sin(angle) * stepSize;
    //     }




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



function drawSleep(){
    for (let x = 300; x <= 1000; x = x + 40) {
    for (let y = 400 ; y <= 1000; y = y + 40) {
      
      push();
      translate(x,y);
     
      let indexForm = floor ( random(3));

      if (indexForm == 0) {
          makeCircle();
      } else if (indexForm == 1){
          makeSemiCircle();
      } else if (indexForm == 2){
          makeTriangle();
      }
      noLoop();
      pop();
      
    }
  }
}


function makeCircle() {
    push();
    ellipse(0,0, 20, 20);
    stroke(0);
    noFill();
    strokeWeight(1);
    pop();
}

function makeSemiCircle() {
    push();
    arc(x, y+5, 20, 20, PI, 0, CHORD);
    pop();
}

function makeTriangle() {
    push();
    triangle(x-10, y+10, x , y - 10, x + 10, y + 10);
    pop();
}


function drawHeartrate(){

    // xHR = 100;
    // yHR = 100;
    // var stepSize = 10.0;
    // var lineLength = random(10, 100);
    // var d = dist(xHR, yHR, xHR + 10, yHR + 10);

    for ( i = 100; i < 2000; i+10) {
        y1 = 100; 
        y2 = y1 + 100;
        stroke(0);
        line(100, y1, 100, y2);

        // if( d < stepSize) {
        //     var angle = atan2( (yHR + random(0,50)) - yHR, (xHR + random(0,50)) - xHR);

        //     push();
        //     translate(xHR,yHR);
        //     rotate(angle);
        //     stroke(0);
        //     line(0, 0, 0, lineLength * d / 10)
        //     loop();
        //     pop();
        //     xHR = xHR + cos(angle) * stepSize;
        //     yHR = yHR + sin(angle) * stepSize;           
        // }
    }


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

