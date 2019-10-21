
// var a = new Audio('media/owl.mp3');
// window.setInterval(function (){
//     a.play();
// }, Math.random() * 500);

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


document.getElementById('emotion').addEventListener('submit', submitForm);
//submit form
function submitForm(e){
    e.preventDefault();

    //get date
    var d = new Date();
    date = d.toDateString();

    //get values
    var liking = getInputVal('liking');
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
    var anger = getInputVal('anger');
    var mad = getInputVal('mad');
    var pissedOff = getInputVal('pissedOff');
    var rage = getInputVal('rage');
    var hate = getInputVal('hate');
    var frustration = getInputVal('frustration');
    var shock = getInputVal('shock');
    var lonely = getInputVal('shock');
    var sad = getInputVal('sad');
    var depression = getInputVal('depression');
    var devastation = getInputVal('devastation');
    var grossedOut = getInputVal('grossedOut');
    var revulsion = getInputVal('revulsion');
    var nausea = getInputVal('nausea');
    var disgust = getInputVal('disgust');


    //save message
    saveMessage(liking, enjoyment, happy, enthusiasm, satisfaction, contentment, thankful, excitement, affection, pride, optimism, savoring, relaxation, hoping, caring, eager, calm, chilledOut, fear, scared, panic, terror, nervous, worry, dread, tense, anxiety, alarm, stressed, horror, anger, mad, pissedOff, rage, hate, frustration, shock, lonely, sad, depression, devastation, grossedOut, revulsion, nausea, disgust);
    
}

//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(liking, enjoyment, happy, enthusiasm, satisfaction, contentment, thankful, excitement, affection, pride, optimism, savoring, relaxation, hoping, caring, eager, calm, chilledOut, fear, scared, panic, terror, nervous, worry, dread, tense, anxiety, alarm,  stressed, horror, anger, mad, pissedOff, rage, hate, frustration, shock, lonely, sad, depression, devastation, grossedOut, revulsion, nausea, disgust){
    var newMessageRef = database.push();

    newMessageRef.set({
        date: date,
        liking: document.getElementById("liking").checked,
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
        depression: document.getElementById("depression").checked, 
        devastation: document.getElementById("devastation").checked, 
        grossedOut: document.getElementById("grossedOut").checked, 
        revulsion: document.getElementById("revulsion").checked, 
        nausea: document.getElementById("nausea").checked, 
        disgust: document.getElementById("disgust").checked
    });
}


//weather data
var weather;

function setup(){
    createCanvas(200,200);
    loadJSON('http://api.openweathermap.org/data/2.5/weather?id=5341704&APPID=f49674ab8325154a34a42d1cff090bf9&units=metric', gotData);
}

function gotData(data){
//  println(data); 
 weather = data;
}

function draw(){
    background(0);
    if (weather) {
        ellipse(50, 100, weather.main.temp, weather.main.temp);
        ellipse(150, 100, weather.main.humidity, weather.main.humidity);
    } 
}

//@TODO: log the date each entry

