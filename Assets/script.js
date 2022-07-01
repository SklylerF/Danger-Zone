var dataEl = document.getElementsByClassName("Data");
var safeTravelUrl = document.getElementsByClassName("Data");
var safeTravelBtn = document.getElementById("travel");
var covidFetchBtn = document.getElementById("covid")

//Open Weather
var openWeatherUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// drop down function

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

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
    fetch('https://covid-19-statistics.p.rapidapi.com/reports?city_name='+prov+'', options)
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
            'API-Key': '84IdbmU5IAg8CYTmFOo5KnyoGR4P4tR6',
            'API-Secret': 'bNF45tKhpnYppupm'
        }
    };

    fetch('https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

