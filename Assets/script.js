var dataEl = document.getElementsByClassName("Data");
var safeTravelUrl = document.getElementsByClassName("Data");
var safeTravelBtn = document.getElementById("travel");
var covidFetchBtn = document.getElementById("covid")

//Open Weather
var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={e3734cbb56b89b904559b3338d8b8282}"


// drop down function
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
  });
  
function getCovidApi() {
    let prov = document.getElementById('search').value
console.log(prov);
    let url = 'https://covid-19-statistics.p.rapidapi.com/reports?city_name=Autauga&region_province='+prov+'&iso=USA&region_name=US&q=US%20'+prov+'&date=2020-04-16';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '79e3ad0431msh7dd9022f1318b61p1bef5djsne6dd6580b13e',
            'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
        }
    };
    fetch('https://covid-19-statistics.p.rapidapi.com/reports?city_name=Autauga', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    //    loop for the covid data
    //  for (var i = 0; i < data.length; i++) {
    //         var display = document.createElement('p');
    //         display = data[i].[0 … 99].
    //     }

}
covidFetchBtn.addEventListener('click', getCovidApi)


// safe travel
var safeTravelUrl = "https://google-maps28.p.rapidapi.com/maps/api/place/details/json?fields=address_component%2Cadr_address%2Cbusiness_status%2Cformatted_address%2Cgeometry%2Cicon%2Cicon_mask_base_uri%2Cicon_background_color%2Cname%2Cpermanently_closed%2Cphoto%2Cplace_id%2Cplus_code%2Ctype%2Curl%2Cutc_offset%2Cvicinity%2Cformatted_phone_number%2Cinternational_phone_number%2Copening_hours%2Cwebsite%2Cprice_level%2Crating%2Creview%2Cuser_ratings_total&place_id=ChIJ37HL3ry3t4kRv3YLbdhpWXE&language=en&region=en"

// function getTravelApi()
function getTravelApi() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2091fc13f6msh05604bf0f21c13dp1243e5jsn71a08e6cf84d',
            'X-RapidAPI-Secret': 'google-maps28.p.rapidapi.com'
        }
    };

    fetch('https://google-maps28.p.rapidapi.com/maps/api/place/details/json?fields=address_component%2Cadr_address%2Cbusiness_status%2Cformatted_address%2Cgeometry%2Cicon%2Cicon_mask_base_uri%2Cicon_background_color%2Cname%2Cpermanently_closed%2Cphoto%2Cplace_id%2Cplus_code%2Ctype%2Curl%2Cutc_offset%2Cvicinity%2Cformatted_phone_number%2Cinternational_phone_number%2Copening_hours%2Cwebsite%2Cprice_level%2Crating%2Creview%2Cuser_ratings_total&place_id=ChIJ37HL3ry3t4kRv3YLbdhpWXE&language=en&region=en',options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

safeTravelBtn.addEventListener('click', getTravelApi);















//WEATHER APP
const weatherTab = document.getElementById("weather");
weatherTab.addEventListener("click", function(){
  document.getElementById("Data").innerHTML =
  
  `<nav class="container #ffffff white">
  <div class="row teal #fafafa grey lighten-5">
    <div class="input-field col s5 #fafafa grey lighten-5">
      <input value="34.15" id="latitude" type="text" class="validate">
      <label for="latitude">Lat</label>
    </div>
    <div class="input-field col s5 #fafafa grey lighten-5 offset-s2">
      <input value="-117.34" id="longitude" type="text" class="validate">
      <label for="longitude">Lon</label>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button id="btnGet" type="button" class="waves-effect waves-light btn">
        Get Weather
      </button>
      <button id="btnCurrent" type="button" class="waves-effect waves-light btn">
        Use Current Location
      </button>
    </div>
  </div>
</nav>

<main class="container">
  <h2>Weather</h2>
  <!-- results for weather data -->
  <div class="weather-data row">
    <div class="col">
      <div class="card">
        <span class="card-title">Date</span>
        <img
          src="http://openweathermap.org/img/wn/10d@4x.png"
          class="card-img-top"
          alt="Weather description"
        />
        <div class="card-content">
          <h3 class="card-title">Weather Label</h3>
          <p >High Temp Low Temp</p>
          <p >HighFeels like</p>
          <p>Pressure</p>
          <p>Humidty</p>
          <p>UV Index</p>
          <p>Precipitation</p>
          <p>Dew Point</p>
          <p>Wind speed and direction</p>
          <p>Sunrise</p>
          <p>Sunset</p>
        </div>
      </div>
    </div>
  </div>
</main>`;
weatherApp.init();
});

const weatherApp= {
    init: () => {
      document
        .getElementById('btnGet')
        .addEventListener('click', weatherApp.fetchWeather);
      document
        .getElementById('btnCurrent')
        .addEventListener('click', weatherApp.getLocation);
    },
    fetchWeather: () => {
      
      let lat = document.getElementById('latitude').value;
      let lon = document.getElementById('longitude').value;
      let key = 'e3734cbb56b89b904559b3338d8b8282';
      let lang = 'en';
      let units = 'imperial';
      let url = "http://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+key+"&units="+units+"&lang="+lang+"";
      
      fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((data) => {
          weatherApp.showWeather(data);
        })
        .catch(console.err);
    },
    getLocation: () => {
      let opts = {
        enableHighAccuracy: true,
        timeout: 1000 * 10, 
        maximumAge: 1000 * 60 * 5, 
      };
      navigator.geolocation.getCurrentPosition(weatherApp.ftw, weatherApp.wtf, opts);
    },
    ftw: (position) => {
    
      document.getElementById('latitude').value =
        position.coords.latitude.toFixed(2);
      document.getElementById('longitude').value =
        position.coords.longitude.toFixed(2);
    },
    wtf: (err) => {
    
      console.error(err);
    },
    showWeather: (resp) => {
      console.log(resp);
      let row = document.querySelector('.weather-data');
      
      row.innerHTML = resp.daily
        .map((day, index) => {
          if (index <= 2) {
            let dt = new Date(day.dt * 1000); 
            let sr = new Date(day.sunrise * 1000).toTimeString();
            let ss = new Date(day.sunset * 1000).toTimeString();
            return `<div class="col">
                <div class="card">
                <h5 class="card-title">${dt.toDateString()}</h5>
                  <img
                    src="http://openweathermap.org/img/wn/${
                      day.weather[0].icon
                    }@4x.png"
                    class="card-img-top"
                    alt="${day.weather[0].description}"
                  />
                  <div class="card-content">
                    <h3 class="card-title">${day.weather[0].main}</h3>
                    <p>High ${day.temp.max}&deg;F Low ${
              day.temp.min
            }&deg;F</p>
                    <p>High Feels like ${
                      day.feels_like.day
                    }&deg;F</p>
                    <p>Pressure ${day.pressure}Pa</p>
                    <p">Humidity ${day.humidity}%</p>
                    <p>UV Index ${day.uvi}</p>
                    <p>Precipitation ${day.pop * 100}%</p>
                    <p>Dewpoint ${day.dew_point}</p>
                    <p>Wind ${day.wind_speed}mph, ${
              day.wind_deg
            }&deg;</p>
                    <p>Sunrise ${sr}</p>
                    <p>Sunset ${ss}</p>
                  </div>
                </div>
              </div>
            </div>`;
          }
        })
        .join(' ');
    },
  };
  //WEATHER APP