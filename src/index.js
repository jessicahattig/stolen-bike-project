import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Bike from './bike.js';

// Business Logic

async function getStolen(location) {
  const response = await Bike.getStolen(location);
  if (response.main) {
    printElements(response, location);
  } else {
    printError(response, location);
  }
}

// UI Logic

function printElements(response, location) {
  document.querySelector('#showResponse').innerText = `Here are the stolen bikes in ${location} is ${response.bikes.length}%.`;
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