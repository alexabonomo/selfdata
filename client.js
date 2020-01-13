// var twilio = require('twilio');

// // Find your account sid and auth token in your Twilio account Console.
// var client = new twilio('AC0e27774b537b6a4fd82325bfecb32c90', 'c0b383010cc2eb4938395cb3c4a402dd');

// // Send the text message.

// function sendMessage(){
//     client.messages.create({
//         to: '+16096785425',
//         from: '+13203210928',
//         body: 'Record  your emotion!'
//     });
// }

// import {Dropbox} from 'dropbox'

// const dbx = new Dropbox({
//     accessToken: 'qY54saK_S_AAAAAAAAAADhReg7-IJl2aPZ09f3kUPXpk0sbVtbSPPYOgNzrKjo43', 
//     fetch
// })

// const fileListElem = document.querySelector('.js-file-list');

// const state = {
//     files: []
// }

// const init = () => {
//     dbx.filesListFolder({
//         path:
//     }).then(res => console.log(res))    
// }

// const unpdateFiles = files => {
//     state.files = [... state.files, ...files]
//     renderFiles()
// }

// const renderFiles = () => {
//     fileListElem.innerHTML = state.files.sort(

//     ).map(
        
//     )
// }

// init()