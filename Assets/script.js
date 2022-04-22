var cityHistoryEl = document.getElementById('cityHistory')

var cityTitleEl = document.getElementById("cityTitle")

var submitBtnEl = document.getElementById("submitBtn")

var tempEl = document.getElementById('weatherDataTemp')

var windEl = document.getElementById('weatherDataWind')

var humidEl = document.getElementById('weatherDataHumidity')

var uvEl = document.getElementById('weatherDataUV')

var lat = ""

var lon = ""

var mainURL = "https://api.openweathermap.org/"

var apiKey = "0c78d71a4447f663c83431188cfb1c4a"

var cityDateEl = document.getElementById('cityDate')


navigator.geolocation.getCurrentPosition((position) => {
  console.log("User is at: " + "Lat: " + position.coords.latitude + " " + "Lon: " +  position.coords.longitude)
});





submitBtnEl.addEventListener('click', getWeather)

//Fetch weather data
function getWeather() {


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



//Get geo-coordinates and city name
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

  //Populate main weather card
  console.log()
  
  cityDateEl.innerHTML = moment(Date.now()).format("L");

  cityTitleEl.innerHTML = name

  tempEl.innerHTML = ("TEMP: " + Math.floor(data.current.temp) + "˚ F")

  windEl.textContent = ("WIND: " + data.current.wind_speed + " mph")

  humidEl.textContent = ("HUMIDITY: " + data.current.humidity + "%")

  uvEl.textContent = ("UV INDEX: " + data.current.uvi)

  if (data.current.uvi < 3) {
    uvEl.style.color = 'green'
  } else if (data.current.uvi > 2 && data.current.uvi < 6) {
    uvEl.style.color = 'yellow'
  } else if (data.current.uvi > 5 && data.current.uvi < 8) {
    uvEl.style.color = 'orange'
  } else if (data.current.uvi > 7 && data.current.uvi < 11) {
    uvEl.style.color = 'red'
  } else uvEl.style.color = 'purple'

//Populate 5-day forecast

//card 1
let cardTempEl1 = document.getElementById('cardTemp1')
let cardWindEl1 = document.getElementById('cardWind1')
let cardHumidityEl1 = document.getElementById('cardHumidity1')
let imgEl1 = document.getElementById('img1')
let icon1 = data.daily[1].weather[0].icon

imgEl1.src = `https://openweathermap.org/img/wn/${icon1}@2x.png`
cardTempEl1.innerText = ('Temp: ' + Math.floor(data.daily[1].temp.day) + "˚ F")
cardWindEl1.innerText = ('Wind: ' + Math.floor(data.daily[1].wind_speed) + " mph")
cardHumidityEl1.innerText = ('Humidity: ' + Math.floor(data.daily[1].humidity) + "%")

//card 2
let cardTempEl2 = document.getElementById('cardTemp2')
let cardWindEl2 = document.getElementById('cardWind2')
let cardHumidityEl2 = document.getElementById('cardHumidity2')
let imgEl2 = document.getElementById('img2')
let icon2 = data.daily[2].weather[0].icon

imgEl2.src = `https://openweathermap.org/img/wn/${icon2}@2x.png`
cardTempEl2.innerText = ('Temp: ' + Math.floor(data.daily[2].temp.day) + "˚ F")
cardWindEl2.innerText = ('Wind: ' + Math.floor(data.daily[2].wind_speed) + " mph")
cardHumidityEl2.innerText = ('Humidity: ' + Math.floor(data.daily[2].humidity) + "%")

//card 3
let cardTempEl3 = document.getElementById('cardTemp3')
let cardWindEl3 = document.getElementById('cardWind3')
let cardHumidityEl3 = document.getElementById('cardHumidity3')
let imgEl3 = document.getElementById('img3')
let icon3 = data.daily[3].weather[0].icon

imgEl3.src = `https://openweathermap.org/img/wn/${icon3}@2x.png`
cardTempEl3.innerText = ('Temp: ' + Math.floor(data.daily[3].temp.day) + "˚ F")
cardWindEl3.innerText = ('Wind: ' + Math.floor(data.daily[3].wind_speed) + " mph")
cardHumidityEl3.innerText = ('Humidity: ' + Math.floor(data.daily[3].humidity) + "%")

//card 4
let cardTempEl4 = document.getElementById('cardTemp4')
let cardWindEl4 = document.getElementById('cardWind4')
let cardHumidityEl4 = document.getElementById('cardHumidity4')
let imgEl4 = document.getElementById('img4')
let icon4 = data.daily[4].weather[0].icon

imgEl4.src = `https://openweathermap.org/img/wn/${icon4}@2x.png`
cardTempEl4.innerText = ('Temp: ' + Math.floor(data.daily[4].temp.day) + "˚ F")
cardWindEl4.innerText = ('Wind: ' + Math.floor(data.daily[4].wind_speed) + " mph")
cardHumidityEl4.innerText = ('Humidity: ' + Math.floor(data.daily[4].humidity) + "%")

//card 5
let cardTempEl5 = document.getElementById('cardTemp5')
let cardWindEl5 = document.getElementById('cardWind5')
let cardHumidityEl5 = document.getElementById('cardHumidity5')
let imgEl5 = document.getElementById('img5')
let icon5 = data.daily[5].weather[0].icon

imgEl5.src = `https://openweathermap.org/img/wn/${icon5}@2x.png`
cardTempEl5.innerText = ('Temp: ' + Math.floor(data.daily[5].temp.day) + "˚ F")
cardWindEl5.innerText = ('Wind: ' + Math.floor(data.daily[5].wind_speed) + " mph")
cardHumidityEl5.innerText = ('Humidity: ' + Math.floor(data.daily[5].humidity) + "%")

})
})



}


function storeCity(){
cityHistoryEl = document.getElementById('cityHistory')
cityHistoryEl.innerHTML= ' '

var cityList = JSON.parse(localStorage.getItem('cityList')) || [] ;
var newCity = JSON.stringify(cityList);
var inputEl = document.getElementById('input').value

// cityHistoryEl.child.remove()

if (cityList.length < 6){
if (cityList.includes(inputEl)) {
  return;
} else {
cityList.push(inputEl)
}
var newCity = JSON.stringify(cityList);

localStorage.setItem("cityList",newCity)




for (var i=0;i<cityList.length;i++){
    createList = document.createElement('button');
    // if (cityHistoryEl.child.textContent != cityList[i]){
    createList.textContent = cityList[i]
    cityHistoryEl.appendChild(createList);
    }
  
  }else {for (var i=0;i<cityList.length;i++){
    createList = document.createElement('button');
    // if (cityHistoryEl.child.textContent != cityList[i]){
    createList.textContent = cityList[i]
    cityHistoryEl.appendChild(createList);
    }
  }

}


// cityHistoryEl.childElement.addEventListener('click', cityRecall)


// function cityRecall() {
  
//   var inputEl = document.this.textContent

//   console.log("User chose: " + inputEl)

//   var urlGeo = `${mainURL}geo/1.0/direct?q=${inputEl}&limit=1&appid=${apiKey}`

// fetch (urlGeo)
//   .then(response => response.json())
//   .then(function (data) {

// if (!data.length) {
//   window.alert("No city matches.");
//   return;
// }

// // storeCity()


// //Get geo-coordinates and city name
// console.log(data)

// let name = data[0].name

// let country = data[0].country

// let lat = data[0].lat

// let lon =data[0].lon

// console.log(name + ' is at ' + 'lat: ' + lat + ' ' + 'lon: ' + lon + ' in ' + country)

// var weatherURL = `${mainURL}data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

// fetch(weatherURL)
// .then (function (response){
//   return response.json();
// })
// .then (function (data) {
//   console.log(data)

//   //Populate main weather card
//   cityTitleEl.innerHTML = name

//   tempEl.innerHTML = ("TEMP: " + Math.floor(data.current.temp) + "˚ F")

//   windEl.textContent = ("WIND: " + data.current.wind_speed + " mph")

//   humidEl.textContent = ("HUMIDITY: " + data.current.humidity + "%")

//   uvEl.textContent = ("UV INDEX: " + data.current.uvi)

//   if (data.current.uvi < 3) {
//     uvEl.style.color = 'green'
//   } else if (data.current.uvi > 2 && data.current.uvi < 6) {
//     uvEl.style.color = 'yellow'
//   } else if (data.current.uvi > 5 && data.current.uvi < 8) {
//     uvEl.style.color = 'orange'
//   } else if (data.current.uvi > 7 && data.current.uvi < 11) {
//     uvEl.style.color = 'red'
//   } else uvEl.style.color = 'purple'

// //Populate 5-day forecast

// //card 1
// let cardTempEl1 = document.getElementById('cardTemp1')
// let cardWindEl1 = document.getElementById('cardWind1')
// let cardHumidityEl1 = document.getElementById('cardHumidity1')
// let imgEl1 = document.getElementById('img1')
// let icon1 = data.daily[1].weather[0].icon

// imgEl1.src = `http://openweathermap.org/img/wn/${icon1}@2x.png`
// cardTempEl1.innerText = ('Temp: ' + Math.floor(data.daily[1].temp.day) + "˚ F")
// cardWindEl1.innerText = ('Wind: ' + Math.floor(data.daily[1].wind_speed) + " mph")
// cardHumidityEl1.innerText = ('Humidity: ' + Math.floor(data.daily[1].humidity) + "%")

// //card 2
// let cardTempEl2 = document.getElementById('cardTemp2')
// let cardWindEl2 = document.getElementById('cardWind2')
// let cardHumidityEl2 = document.getElementById('cardHumidity2')
// let imgEl2 = document.getElementById('img2')
// let icon2 = data.daily[2].weather[0].icon

// imgEl2.src = `http://openweathermap.org/img/wn/${icon2}@2x.png`
// cardTempEl2.innerText = ('Temp: ' + Math.floor(data.daily[2].temp.day) + "˚ F")
// cardWindEl2.innerText = ('Wind: ' + Math.floor(data.daily[2].wind_speed) + " mph")
// cardHumidityEl2.innerText = ('Humidity: ' + Math.floor(data.daily[2].humidity) + "%")

// //card 3
// let cardTempEl3 = document.getElementById('cardTemp3')
// let cardWindEl3 = document.getElementById('cardWind3')
// let cardHumidityEl3 = document.getElementById('cardHumidity3')
// let imgEl3 = document.getElementById('img3')
// let icon3 = data.daily[3].weather[0].icon

// imgEl3.src = `http://openweathermap.org/img/wn/${icon3}@2x.png`
// cardTempEl3.innerText = ('Temp: ' + Math.floor(data.daily[3].temp.day) + "˚ F")
// cardWindEl3.innerText = ('Wind: ' + Math.floor(data.daily[3].wind_speed) + " mph")
// cardHumidityEl3.innerText = ('Humidity: ' + Math.floor(data.daily[3].humidity) + "%")

// //card 4
// let cardTempEl4 = document.getElementById('cardTemp4')
// let cardWindEl4 = document.getElementById('cardWind4')
// let cardHumidityEl4 = document.getElementById('cardHumidity4')
// let imgEl4 = document.getElementById('img4')
// let icon4 = data.daily[4].weather[0].icon

// imgEl4.src = `http://openweathermap.org/img/wn/${icon4}@2x.png`
// cardTempEl4.innerText = ('Temp: ' + Math.floor(data.daily[4].temp.day) + "˚ F")
// cardWindEl4.innerText = ('Wind: ' + Math.floor(data.daily[4].wind_speed) + " mph")
// cardHumidityEl4.innerText = ('Humidity: ' + Math.floor(data.daily[4].humidity) + "%")

// //card 5
// let cardTempEl5 = document.getElementById('cardTemp5')
// let cardWindEl5 = document.getElementById('cardWind5')
// let cardHumidityEl5 = document.getElementById('cardHumidity5')
// let imgEl5 = document.getElementById('img5')
// let icon5 = data.daily[5].weather[0].icon

// imgEl5.src = `http://openweathermap.org/img/wn/${icon5}@2x.png`
// cardTempEl5.innerText = ('Temp: ' + Math.floor(data.daily[5].temp.day) + "˚ F")
// cardWindEl5.innerText = ('Wind: ' + Math.floor(data.daily[5].wind_speed) + " mph")
// cardHumidityEl5.innerText = ('Humidity: ' + Math.floor(data.daily[5].humidity) + "%")

// })
// })



// }








































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