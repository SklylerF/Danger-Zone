var dataEl = document.getElementsByClassName("Data")
console.log(dataEl);

//Open Weather
var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={e3734cbb56b89b904559b3338d8b8282}"



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