fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1292ba6d2286784a86db96a62ae73ff5')
  .then(response => response.json())
  .then(data => console.log(data));


function initMap() { 

const center = { lat: 50.064192, lng: -130.605469 };
const defaultBounds = {
  north: center.lat + 0.1,
  south: center.lat - 0.1,
  east: center.lng + 0.1,
  west: center.lng - 0.1,
};
const input = document.getElementById("input");
const options = {
  bounds: defaultBounds,
//   componentRestrictions: { country: "us" },
  fields: [ "geometry", "name"],
  strictBounds: false,
  types: ["geocode"],
};
const autocomplete = new google.maps.places.Autocomplete(input, options);
}

initMap()

fetch('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT&key=AIzaSyA_W7NL2luOgMEHOWeEZNAKV_GGZRudU3k')
.then(response => response.json())
.then(data => console.log(data))