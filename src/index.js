import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Bike from './Bike.js';

// Business Logic

async function getStolen(location) {
  const response = await Bike.getStolen(location);
  console.log(response);
  if (response.bikes) {
    printElements(response, location);
  } else {
    printError(response, location);
  }
}

// UI Logic

function printElements(response, location) {
  document.querySelector('#showResponse').innerText = `Here are the stolen bikes in ${location}:`
  const bikeList = response.bikes.map((data) => {
    const bikeInfo = data["manufacturer_name"] + ", " + data["frame_model"];
    return `<li>${bikeInfo}</li>`
  });
  document.getElementById("bike-list").innerHTML = bikeList
}

function printError(error, location) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the stolen bike data for ${location}:
    ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const location = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getStolen(location);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});