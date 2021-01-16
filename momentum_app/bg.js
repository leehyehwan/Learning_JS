const body = document.querySelector("body");
const IMG_NUMBER = 4;
const IMG_API_KEY = "oiyXMQcWhKSvrfIJ-7npZd48pwcw_9TS8lu3ROyXt9Y";
const LOCATION = document.querySelector(".js-location");

function paintImage(imgNumber) {
  fetch(`https://api.unsplash.com/photos/random/?client_id=${IMG_API_KEY}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const imgUrl = json.urls.regular;
      const imgLocation = json.location;
      const image = new Image();
      image.src = imgUrl;
      image.classList.add("bgImage");
      body.prepend(image);
      console.log(imgLocation.city, imgLocation.country);

      let cityName = imgLocation.city;
      let countryName = imgLocation.country;

      if (cityName === null) {
        cityName = "Unknown";
      }
      if (countryName === null) {
        countryName = "Unknown";
      }
      LOCATION.innerText = `${cityName} // ${countryName}`;
    });
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
