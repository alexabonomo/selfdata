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

const submit = document.getElementById("emotions");
const getEmotion = document.querySelectorAll("#emotions input");
const emotionList = document.querySelector("main ol");
const inputs = document.querySelectorAll("#emotions input:not([type=submit])");

let thisRecord;


submit.addEventListener("submit", function(event){
    event.preventDefault();
    const db = firebase.database().ref('emotions');
    const newEmotion = {};

    //get date
    var d = new Date();
    date = d.toDateString();

    for (let i=0; i<inputs.length; i++) {
        let key = inputs[i].getAttribute('name');
        let checked = inputs[i].checked;
        newEmotion[key] = checked;
    }
    
    const newEmotionRef = db.push();

    newEmotionRef.set({
        newEmotion,
        date: date
    });

    resetFormFields();
    setTimeout(function(){
        window.location.reload(true);
        window.location.href = 'entry.html';
    }, 1000);
});

function displayEmotions(){
    const dbRef = firebase.database().ref('emotions');

    dbRef.on("child_added", function (snap){

        const emotions = snap.val();
        const ids = snap.key;

        //console.log(emotions);
        //console.log(ids);
    });
};

displayEmotions();

function resetFormFields(){
    for (let i=0; i<inputs.length; i++){
        inputs[i].checked = false;
    };
};



for (let i=0; i<getEmotion.length; i++) {
    getEmotion[i].addEventListener("click", function(event) {
        const theListItem = document.createElement("li");
        const theCheckbox = document.createElement("div")

        theListItem.setAttribute("id", `r-${this.name}`);
        theListItem.innerHTML = `<div class="addEmotion">${this.name}</div>`;
        emotionList.append(theListItem);
    
        theCheckbox.setAttribute("id", `c-${this.name}`);
        theCheckbox.innerHTML =`<input class="redactEmotion" type="checkbox" value="true" name="${this.name}">`
        getEmotion[i].append(theCheckbox);

        //adding but not changing HTML??
        console.log(getEmotion[i]);
    });
};


