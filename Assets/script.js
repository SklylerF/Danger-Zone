var dataEl = document.getElementsByClassName("Data");
var safeTravelUrl =document.getElementsByClassName("Data");
var safeTravelBtn =document.getElementById("travel");


//Open Weather
var openWeatherUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


// covid api
var covidUrl = 'https://covid-19-statistics.p.rapidapi.com/regions'
//   url: 'https://covid-19-statistics.p.rapidapi.com/regions',
//   headers: {
//     'X-RapidAPI-Key': '79e3ad0431msh7dd9022f1318b61p1bef5djsne6dd6580b13e',
//     'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'

// safe travel
var safeTravelUrl = 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200'
// 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200' -H 'Authorization: Bearer {{token}}'
//   API Key : 84IdbmU5IAg8CYTmFOo5KnyoGR4P4tR6
//   API Secret : bNF45tKhpnYppupm

// function getTravelApi() {
//     var safeTravelUrl = 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200'
//     fetch(safeTravelUrl) 
//         .then(function(responxe) {
//         return response.json();
//     })
//     .then(function(data) {
//     })

// }

function getTravelApi() {
    const options ={
        method: 'GET',
        headers: {
            'API-Key' : '84IdbmU5IAg8CYTmFOo5KnyoGR4P4tR6',
            'API-Secret' : 'bNF45tKhpnYppupm'
        }
    };

    fetch('https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

safeTravelBtn.addEventListener('click',getTravelApi);