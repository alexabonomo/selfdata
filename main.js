// var a = new Audio('media/owl.mp3');
// window.setInterval(function (){
//     a.play();
// }, Math.random() * 500);
// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyA-PbrBkzKivw1Em_VKj0qramJang5XGPc",
//     authDomain: "self-data-3aa35.firebaseapp.com",
//     databaseURL: "https://self-data-3aa35.firebaseio.com",
//     projectId: "self-data-3aa35",
//     storageBucket: "self-data-3aa35.appspot.com",
//     messagingSenderId: "419685489555",
//     appId: "1:419685489555:web:dbece4ea3f4759bfb9e666",
//     measurementId: "G-ZMKVLZ32J6"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// console.log(firebase);

// //reference messages collection
// var database = firebase.database();

// document.getElementById('emotion').addEventListener('submit', submitForm);

// //submit form
// function submitForm(e){
//     e.preventDefault();

//     //get values
//     var liking = getInputVal('liking');

//     //save message
//     saveMessage(liking);
    
// }

// //function to get form values

// function getInputVal(id){
//     return document.getElementById(id).value;
// }

// function saveMessage(liking){
//     var newMessageRef = database.push();

//     dataset.set({
//         liking: liking 
//     });
// }
var weather;

function setup(){
    createCanvas(200,200);
    loadJSON('http://api.openweathermap.org/data/2.5/weather?id=5341704&APPID=f49674ab8325154a34a42d1cff090bf9&units=metric', gotData);
}

function gotData(){
 println(data); 

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

