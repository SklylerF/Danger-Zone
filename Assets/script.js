var dataEl = document.getElementById("main-data");
var safeTravelUrl = document.getElementsByClassName("Data");
var safeTravelBtn = document.getElementById("travel");
var covidFetchBtn = document.getElementById("covid")
// ================================================================covid========================================================================
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '79e3ad0431msh7dd9022f1318b61p1bef5djsne6dd6580b13e',
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
  }
};

var dropOptions = {
  data: {
"California": null,"Alameda": null, "Alpine": null, "Amador": null, "Butte": null, "Calaveras": null,"Colusa": null,"Contra Costa": null,"Del Norte": null, "El Dorado": null, "Fresno": null, "Glenn": null,"Humboldt": null, "Imperial": null, "Inyo": null, "Kern": null, "Kings": null, "Lake": null,"Lassen": null, "Los Angeles": null, "Madera": null, "Marin": null,"Mariposa": null, "Mendocino": null, "Merced": null, "Modoc": null, "Mono'": null, "Monterey": null, "Napa": null, "Nevada": null, "Orange": null, "Out of CA": null, "Placer": null, "Plumas": null, "Riverside": null, "Sacramento": null, "San Benito": null, "San Bernardino": null, "San Diego": null, "San Francisco": null, "San Joaquin": null, "San Luis Obispo": null, "San Mateo": null, "Santa Barbara": null, "Santa Clara": null,"Santa Cruz": null,"Shasta": null,  "Sierra": null, "Siskiyou": null, "Solano": null, "Sonoma": null,"Stanislaus": null, "Sutter": null, "Tehama": null, "Trinity": null,"Tulare": null,"Tuolumne": null,"Unassigned": null, "Ventura": null, "Yolo": null,"Yuba": null,
  }
}
//  filtered drop down 
function getCovidSearchBar() {
  document.getElementById("main-data").innerHTML =
    `<div class="input-field">
  <input id="search" type="search " class="autocomplete"
  placeholder="Search Your Area" required>
  </div>
   
    
      <div class="row">
        
        <div class="board">
          <div class="col s6">
          <div class="card blue"> <div class="card-content white-text"><i class="fa fa-tachometer fa-2x"></i><h5 class="card-title">Active Cases</h5><span id="active"></span></div></div>
        </div>
        <div class="col s6">
          <div class="card green"><div class="card-content white-text"><i class="fa fa-th-list fa-2x"></i><h5 class="card-title">Confirmed Cases</h5><span id="cases"></span></div></div>
        </div>
        <div class="col s6">
          <div class="card grey"><div class="card-content white-text"><i class="fa-solid fa-skull fa-2x"></i><h5 class="card-title">Deaths</h5><span id="death"></span></div></div>
        </div>
        <div class="col s6">
          <div class="card red"><div class="card-content white-text"><i class="fa-solid fa-skull-crossbones fa-2x"></i><h5 class="card-title">Fatality Rate</h5><span id="f-rate"></span></div></div>
        </div>
        
        </div>
      </div>`;

  const covidEnterBtn = document.createElement('button')
  covidEnterBtn.innerText = 'Enter'
  covidEnterBtn.className = 'waves-effect waves-light btn-large'
  covidEnterBtn.addEventListener('click', getCovidApi)
  dataEl.append(covidEnterBtn);

  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems, dropOptions);
  const elem = document.querySelector('.autocomplete');
  var instance = M.Autocomplete.getInstance(elem);
}
covidFetchBtn.addEventListener('click', getCovidSearchBar)

//  covid api fetch 
function getCovidApi() {
  let prov = document.getElementById('search').value
  console.log(prov);

  fetch('https://covid-19-statistics.p.rapidapi.com/reports?city_name=' + prov + '', options)
    .then((response) =>{
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("active").innerHTML= data.data[0].active;
      document.getElementById("cases").innerHTML= data.data[0].confirmed;
      document.getElementById("death").innerHTML= data.data[0].deaths;
      document.getElementById("f-rate").innerHTML= data.data[0].fatality_rate;

      

    })
    

}
// ================================================================covid========================================================================



//==================================================================Travel====================================================================
function showHeader(){
  document.getElementById("logo").style.display="block"
}
function fixMainDataWeather (){
  document.getElementById("main-data").style.marginLeft= '0px'
}
function fixMainDataCovid (){
  document.getElementById("main-data").style.marginLeft= "600px"
}
function hideHeader(){
  document.getElementById("logo").style.display= "none";
}
let mapTab = document.getElementById("hospital-tab");
mapTab.addEventListener("click",function(){
    document.getElementById("main-data").innerHTML = `
    <div class="hotel-search">
    <div id="findhotels">Find Hospitals:</div>

    <div id="locationField">
      <input id="autocomplete" placeholder="Enter a city" type="text" />
    </div>

    <div id="controls">
      <select id="country">
        <option value="all">All</option>
        <option value="au">Australia</option>
        <option value="br">Brazil</option>
        <option value="ca">Canada</option>
        <option value="fr">France</option>
        <option value="de">Germany</option>
        <option value="mx">Mexico</option>
        <option value="nz">New Zealand</option>
        <option value="it">Italy</option>
        <option value="za">South Africa</option>
        <option value="es">Spain</option>
        <option value="pt">Portugal</option>
        <option value="us" selected>U.S.A.</option>
        <option value="uk">United Kingdom</option>
      </select>
    </div>
  </div>

  <div id="map"></div>

  <div id="listing">
    <table id="resultsTable">
      <tbody id="results"></tbody>
    </table>
  </div>

  <div style="display: none">
    <div id="info-content">
      <table>
        <tr id="iw-url-row" class="iw_table_row">
          <td id="iw-icon" class="iw_table_icon"></td>
          <td id="iw-url"></td>
        </tr>
        <tr id="iw-address-row" class="iw_table_row">
          <td class="iw_attribute_name">Address:</td>
          <td id="iw-address"></td>
        </tr>
        <tr id="iw-phone-row" class="iw_table_row">
          <td class="iw_attribute_name">Telephone:</td>
          <td id="iw-phone"></td>
        </tr>
        <tr id="iw-rating-row" class="iw_table_row">
          <td class="iw_attribute_name">Rating:</td>
          <td id="iw-rating"></td>
        </tr>
        <tr id="iw-website-row" class="iw_table_row">
          <td class="iw_attribute_name">Website:</td>
          <td id="iw-website"></td>
        </tr>
      </table>
    </div>
  </div>`
  
  
   initMap();
})

let map;
let places;
let infoWindow;
let markers = [];
let autocomplete;
const countryRestrict = { country: "us" };
const MARKER_PATH =
 "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");
const countries = {
 au: {
   center: { lat: -25.3, lng: 133.8 },
   zoom: 4,
 },
 br: {
   center: { lat: -14.2, lng: -51.9 },
   zoom: 3,
 },
 ca: {
   center: { lat: 62, lng: -110.0 },
   zoom: 3,
 },
 fr: {
   center: { lat: 46.2, lng: 2.2 },
   zoom: 5,
 },
 de: {
   center: { lat: 51.2, lng: 10.4 },
   zoom: 5,
 },
 mx: {
   center: { lat: 23.6, lng: -102.5 },
   zoom: 4,
 },
 nz: {
   center: { lat: -40.9, lng: 174.9 },
   zoom: 5,
 },
 it: {
   center: { lat: 41.9, lng: 12.6 },
   zoom: 5,
 },
 za: {
   center: { lat: -30.6, lng: 22.9 },
   zoom: 5,
 },
 es: {
   center: { lat: 40.5, lng: -3.7 },
   zoom: 5,
 },
 pt: {
   center: { lat: 39.4, lng: -8.2 },
   zoom: 6,
 },
 us: {
   center: { lat: 37.1, lng: -95.7 },
   zoom: 3,
 },
 uk: {
   center: { lat: 54.8, lng: -4.6 },
   zoom: 5,
 },
};

function initMap() {
 map = new google.maps.Map(document.getElementById("map"), {
   zoom: countries["us"].zoom,
   center: countries["us"].center,
   mapTypeControl: false,
   panControl: false,
   zoomControl: false,
   streetViewControl: false,
 });
 infoWindow = new google.maps.InfoWindow({
   content: document.getElementById("info-content"),
 });
 // Create the autocomplete object and associate it with the UI input control.
 // Restrict the search to the default country, and to place type "cities".
 autocomplete = new google.maps.places.Autocomplete(
   document.getElementById("autocomplete"),
   {
     types: ["(cities)"],
     componentRestrictions: countryRestrict,
     fields: ["geometry"],
   }
 );
 places = new google.maps.places.PlacesService(map);
 autocomplete.addListener("place_changed", onPlaceChanged);
 // Add a DOM event listener to react when the user selects a country.
 document
   .getElementById("country")
   .addEventListener("change", setAutocompleteCountry);
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
 const place = autocomplete.getPlace();

 if (place.geometry && place.geometry.location) {
   map.panTo(place.geometry.location);
   map.setZoom(15);
   search();
 } else {
   document.getElementById("autocomplete").placeholder = "Enter a city";
 }
}

// Search for hotels in the selected city, within the viewport of the map.
function search() {
 const search = {
   bounds: map.getBounds(),
   types: ["hospital"],
 };

 places.nearbySearch(search, (results, status, pagination) => {
   if (status === google.maps.places.PlacesServiceStatus.OK && results) {
     clearResults();
     clearMarkers();

     // Create a marker for each hotel found, and
     // assign a letter of the alphabetic to each marker icon.
     for (let i = 0; i < results.length; i++) {
       const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
       const markerIcon = MARKER_PATH + markerLetter + ".png";

       // Use marker animation to drop the icons incrementally on the map.
       markers[i] = new google.maps.Marker({
         position: results[i].geometry.location,
         animation: google.maps.Animation.DROP,
         icon: markerIcon,
       });
       // If the user clicks a hotel marker, show the details of that hotel
       // in an info window.
       // @ts-ignore TODO refactor to avoid storing on marker
       markers[i].placeResult = results[i];
       google.maps.event.addListener(markers[i], "click", showInfoWindow);
       setTimeout(dropMarker(i), i * 100);
       addResult(results[i], i);
     }
   }
 });
}

function clearMarkers() {
 for (let i = 0; i < markers.length; i++) {
   if (markers[i]) {
     markers[i].setMap(null);
   }
 }

 markers = [];
}

// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
 const country = document.getElementById("country").value;

 if (country == "all") {
   autocomplete.setComponentRestrictions({ country: [] });
   map.setCenter({ lat: 15, lng: 0 });
   map.setZoom(2);
 } else {
   autocomplete.setComponentRestrictions({ country: country });
   map.setCenter(countries[country].center);
   map.setZoom(countries[country].zoom);
 }

 clearResults();
 clearMarkers();
}

function dropMarker(i) {
 return function () {
   markers[i].setMap(map);
 };
}

function addResult(result, i) {
 const results = document.getElementById("results");
 const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
 const markerIcon = MARKER_PATH + markerLetter + ".png";
 const tr = document.createElement("tr");

 tr.style.backgroundColor = i % 2 === 0 ? "#F0F0F0" : "#FFFFFF";
 tr.onclick = function () {
   google.maps.event.trigger(markers[i], "click");
 };

 const iconTd = document.createElement("td");
 const nameTd = document.createElement("td");
 const icon = document.createElement("img");

 icon.src = markerIcon;
 icon.setAttribute("class", "placeIcon");
 icon.setAttribute("className", "placeIcon");

 const name = document.createTextNode(result.name);

 iconTd.appendChild(icon);
 nameTd.appendChild(name);
 tr.appendChild(iconTd);
 tr.appendChild(nameTd);
 results.appendChild(tr);
}

function clearResults() {
 const results = document.getElementById("results");

 while (results.childNodes[0]) {
   results.removeChild(results.childNodes[0]);
 }
}

// Get the place details for a hotel. Show the information in an info window,
// anchored on the marker for the hotel that the user selected.
function showInfoWindow() {
 // @ts-ignore
 const marker = this;

 places.getDetails(
   { placeId: marker.placeResult.place_id },
   (place, status) => {
     if (status !== google.maps.places.PlacesServiceStatus.OK) {
       return;
     }

     infoWindow.open(map, marker);
     buildIWContent(place);
   }
 );
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
 document.getElementById("iw-icon").innerHTML =
   '<img class="hotelIcon" ' + 'src="' + place.icon + '"/>';
 document.getElementById("iw-url").innerHTML =
   '<b><a href="' + place.url + '">' + place.name + "</a></b>";
 document.getElementById("iw-address").textContent = place.vicinity;
 if (place.formatted_phone_number) {
   document.getElementById("iw-phone-row").style.display = "";
   document.getElementById("iw-phone").textContent =
     place.formatted_phone_number;
 } else {
   document.getElementById("iw-phone-row").style.display = "none";
 }

 // Assign a five-star rating to the hotel, using a black star ('&#10029;')
 // to indicate the rating the hotel has earned, and a white star ('&#10025;')
 // for the rating points not achieved.
 if (place.rating) {
   let ratingHtml = "";

   for (let i = 0; i < 5; i++) {
     if (place.rating < i + 0.5) {
       ratingHtml += "&#10025;";
     } else {
       ratingHtml += "&#10029;";
     }

     document.getElementById("iw-rating-row").style.display = "";
     document.getElementById("iw-rating").innerHTML = ratingHtml;
   }
 } else {
   document.getElementById("iw-rating-row").style.display = "none";
 }

 // The regexp isolates the first part of the URL (domain plus subdomain)
 // to give a short URL for displaying in the info window.
 if (place.website) {
   let fullUrl = place.website;
   let website = String(hostnameRegexp.exec(place.website));

   if (!website) {
     website = "http://" + place.website + "/";
     fullUrl = website;
   }

   document.getElementById("iw-website-row").style.display = "";
   document.getElementById("iw-website").textContent = website;
 } else {
   document.getElementById("iw-website-row").style.display = "none";
 }
}

window.initMap = initMap;




//==================================================================Travel====================================================================






//==================================================================WEATHER APP====================================================================
const weatherTab = document.getElementById("weatherbtn");
weatherTab.addEventListener("click", function () {
  document.getElementById("main-data").innerHTML =

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
  <h3 class="weather-title">Weather</h3>
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
          <h4 class="card-title">Weather Label</h4>
          <p>High Temp Low Temp</p>
          <p>HighFeels like</p>
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

const weatherApp = {
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
    let url = "http://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + key + "&units=" + units + "&lang=" + lang + "";

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
                    src="http://openweathermap.org/img/wn/${day.weather[0].icon
            }@4x.png"
                    class="card-img-top"
                    alt="${day.weather[0].description}"
                  />
                  <div class="card-content">
                    <h3 class="card-title">${day.weather[0].main}</h3>
                    <p>High ${day.temp.max}&deg;F Low ${day.temp.min
            }&deg;F</p>
                    <p>High Feels like ${day.feels_like.day
            }&deg;F</p>
                    <p>Pressure ${day.pressure}Pa</p>
                    <p>Humidity ${day.humidity}%</p>
                    <p>UV Index ${day.uvi}</p>
                    <p>Precipitation ${day.pop * 100}%</p>
                    <p>Dewpoint ${day.dew_point}</p>
                    <p>Wind ${day.wind_speed}mph, ${day.wind_deg
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
//   //==================================================================WEATHER APP====================================================================
