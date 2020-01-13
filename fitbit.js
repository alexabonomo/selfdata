// If user hasn't authed with Fitbit, redirect to Fitbit OAuth Implicit Grant Flow
var fitbitAccessToken;

if (!window.location.hash) {
    window.location.replace('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BFBH&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800');
} else {
    var fragmentQueryParameters = {};
    window.location.hash.slice(1).replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) { fragmentQueryParameters[$1] = $3; }
    );

    fitbitAccessToken = fragmentQueryParameters.access_token;
}

// Make an API request and graph it
var processResponse = function(res) {
    if (!res.ok) {
        throw new Error('Fitbit API request failed: ' + res);
    }
 
    var contentType = res.headers.get('content-type')
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return res.json();
    } else {
        throw new Error('JSON expected but received ' + contentType);
    }
}

var processHeartRate = function(timeSeriesHR) {
    return timeSeriesHR['activities-heart-intraday']
    .dataset.map( 
        function(measurement) {
            return [
                measurement.value
            ]
        }
    )
  
    // .dataset.map(
    //     function(measurement) {
    //         return [
    //             measurement.time.split(':').map(
    //                 function(timeSegment) {
    //                     return Number.parseInt(timeSegment);
    //                 }
    //             ),
    //             measurement.value
    //         ];
    //     }
    // );
}
const myHeartrate = [];

var viewDataHR = function(timeSeriesHR) {
    console.log("TimeSeries: " + timeSeriesHR);

    for(var i =  0; i < timeSeriesHR.length; i++){
        //console.log("TimeSeriesHR loop: " + i);
        myHeartrate.push(timeSeriesHR[i]);

        //console.log("My Heartrate  Local: " + myHeartrate);
    }

    // var myHR = function() {
    //     myHeartrate.push(timeSeriesHR);


    // }

    // // execute function
    // myHR();
}





fetch(
    'https://api.fitbit.com/1/user/-/activities/heart/date/2020-01-10/1d/1sec/time/00:00/23:59.json',
    {
        headers: new Headers({
            'Authorization': 'Bearer ' + fitbitAccessToken
        }),
        mode: 'cors',
        method: 'GET'
    }
).then(processResponse)
.then(processHeartRate)
.then(viewDataHR)
.catch(function(error) {
    console.log(error);
});

var processSleep = function(timeSeriesSleep)  {
    return timeSeriesSleep['sleep']
    // .map(
    //     function(measurement) {
    //         return [
    //             measurement.time.split(':').map(
    //                 function(timeSegment) {
    //                     return Number.parseInt(timeSegment);
    //                 }
    //             ),
    //             measurement.value
    //         ];
    //     }
    // );
}

var viewDataSleep = function(timeSeriesSleep) {
    console.log(timeSeriesSleep);
}

fetch(
    'https://api.fitbit.com/1.2/user/-/sleep/date/today.json',
    {
        headers: new Headers({
            'Authorization': 'Bearer ' + fitbitAccessToken
        }),
        mode: 'cors',
        method: 'GET'
    }
).then(processResponse)
.then(processSleep)
.then(viewDataSleep)
.catch(function(error) {
    console.log(error);
});



