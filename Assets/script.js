var cityTitleEl = document.getElementById("cityTitle")

var submitBtnEl = document.getElementById("submitBtn")

var tempEl = document.getElementById('weatherDataTemp')

var windEl = document.getElementById('weatherDataWind')

var humidEl = document.getElementById('weatherDataHumidity')

var uvEl = document.getElementById('weatherDataUV')

var lat = ""

var lon = ""

var mainURL = "http://api.openweathermap.org/"

var apiKey = "0c78d71a4447f663c83431188cfb1c4a"






function storeCity() {} 



submitBtnEl.addEventListener('click', getLatLon)

function getLatLon() {
  
  var inputEl = document.getElementById('input').value

  console.log("User chose: " + inputEl)

  var urlGeo = `${mainURL}geo/1.0/direct?q=${inputEl}&limit=1&appid=${apiKey}`

fetch (urlGeo)
  .then(response => response.json())
  .then(function (data) {

if (!data.length) {
  window.alert("No city matches.");
  return;
}

storeCity()

console.log(data)

let name = data[0].name

let country = data[0].country

let lat = data[0].lat

let lon =data[0].lon

console.log(name + ' is at ' + 'lat: ' + lat + ' ' + 'lon: ' + lon + ' in ' + country)

var weatherURL = `${mainURL}data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

fetch(weatherURL)
.then (function (response){
  return response.json();
})
.then (function (data) {
  console.log(data)

  temp = data.current.temp

  cityTitleEl.innerHTML = name

  tempEl.innerHTML = ("TEMP: " + Math.floor(temp) + "˚ F")

  windEl.textContent = ("WIND: " + data.current.wind_speed + " mph")

  humidEl.textContent = ("HUMIDITY: " + data.current.humidity + " %")

  uvEl.textContent = ("UV INDEX: " + data.current.uvi)
})
})



}














































//  submitBtnEl.addEventListener('click', getWeather)

// function getWeather(){
//   const center = { lat: 50.064192, lng: -130.605469 };
//   const defaultBounds = {
//   north: center.lat + 0.1,
//   south: center.lat - 0.1,
//   east: center.lng + 0.1,
//   west: center.lng - 0.1,
// };
//   var inputEl = document.getElementById("input").value
// console.log(inputEl)
// const input = document.getElementById("input");

// const options = {
//   bounds: defaultBounds,
// //   componentRestrictions: { country: "us" },
//   fields: [ "geometry", "name"],
//   strictBounds: false,
//   types: ["geocode"],
// };
// const autocomplete = new google.maps.places.Autocomplete(input, options)
// google.maps.event.addListener(ac,'place_changed', function() {
//   var place = ac.getPlace();
//   console.log(place.geometry.location)
// })
// }


// function initMap() { 

// const center = { lat: 50.064192, lng: -130.605469 };
// const defaultBounds = {
//   north: center.lat + 0.1,
//   south: center.lat - 0.1,
//   east: center.lng + 0.1,
//   west: center.lng - 0.1,
// };
// const input = document.getElementById("input");
// const options = {
//   bounds: defaultBounds,
// //   componentRestrictions: { country: "us" },
//   fields: [ "geometry", "name"],
//   strictBounds: false,
//   types: ["geocode"],
// };
// console.log(options.types.value)
// const autocomplete = new google.maps.places.Autocomplete(input, options);
// }

// initMap()

// fetch('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyA_W7NL2luOgMEHOWeEZNAKV_GGZRudU3k')
// .then(response => response.json())
// .then(data => console.log(data))

// const autocomplete = new google.maps.places.Autocomplete(input, options)
// const input = document.getElementById("input");
// const options = {
//   bounds: defaultBounds,
// //   componentRestrictions: { country: "us" },
//   fields: [ "geometry", "name"],
//   strictBounds: false,
//   types: ["geocode"],
// };
// google.maps.event.addListener(ac,'place_changed', function() {
//   var place = ac.getPlace();
//   console.log(place.geometry.location)
//