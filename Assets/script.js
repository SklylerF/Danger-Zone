var dataEl = document.getElementsByClassName("Data");
var safeTravelUrl =document.getElementsByClassName("Data");
var safeTravelBtn =document.getElementById("travel");
var covidFetchBtn =document.getElementById("covid")

//Open Weather
var openWeatherUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


function getCovidApi() {
    const options = {
     method: 'GET',
     headers: {
         'X-RapidAPI-Key': '79e3ad0431msh7dd9022f1318b61p1bef5djsne6dd6580b13e',
         'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
     }
 };
  
 fetch('https://covid-19-statistics.p.rapidapi.com/regions', options)
     .then(response => response.json())
     .then(response => console.log(response))
     .catch(err => console.error(err));
 //   loop for the covid data
     // for (var i = 0; i < data.length; i++) {
  
     // }
  
 }
 covidFetchBtn.addEventListener('click', getCovidApi)
// safe travel
var safeTravelUrl = "https://google-maps28.p.rapidapi.com/maps/api/place/details/json?fields=address_component%2Cadr_address%2Cbusiness_status%2Cformatted_address%2Cgeometry%2Cicon%2Cicon_mask_base_uri%2Cicon_background_color%2Cname%2Cpermanently_closed%2Cphoto%2Cplace_id%2Cplus_code%2Ctype%2Curl%2Cutc_offset%2Cvicinity%2Cformatted_phone_number%2Cinternational_phone_number%2Copening_hours%2Cwebsite%2Cprice_level%2Crating%2Creview%2Cuser_ratings_total&place_id=ChIJ37HL3ry3t4kRv3YLbdhpWXE&language=en&region=en"

// function getTravelApi()
function getTravelApi() {

var safeTravelBtn = document.getElementById("travel")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2091fc13f6msh05604bf0f21c13dp1243e5jsn71a08e6cf84d',
		'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com'
	}
};

fetch('https://google-maps28.p.rapidapi.com/maps/api/place/details/json?fields=address_component%2Cadr_address%2Cbusiness_status%2Cformatted_address%2Cgeometry%2Cicon%2Cicon_mask_base_uri%2Cicon_background_color%2Cname%2Cpermanently_closed%2Cphoto%2Cplace_id%2Cplus_code%2Ctype%2Curl%2Cutc_offset%2Cvicinity%2Cformatted_phone_number%2Cinternational_phone_number%2Copening_hours%2Cwebsite%2Cprice_level%2Crating%2Creview%2Cuser_ratings_total&place_id=ChIJ37HL3ry3t4kRv3YLbdhpWXE&language=en&region=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

safeTravelBtn.addEventListener('click',getTravelApi);