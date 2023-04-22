// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import Traveler from './traveler';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/new-zealand.png'


// console.log('This is the JavaScript entry file - your code begins here.');

// <----------------GLOBAL VARIABLES----------------->
let travelersData
let tripsData
let destinationsData
let traveler = new Traveler(travelersData, destinationsData, tripsData)



// <----------------QUERY SELECTORS------------------>
const pastTripsButton = document.querySelector('.nav-trip-selection-button')
const welcomeName = document.querySelector('.header-welcome-message')
const annualSpend = document.querySelector('.user-annual-amount-spent')
const cardImage = document.querySelector('.card-image')
const cardTitle = document.querySelector('.dest-title')
const cardDate = document.querySelector('.dest-date')
const cardTravelerNum = document.querySelector('.traveler-number')
const cardTravelerDuration = document.querySelector('.traveler-duration')





// <----------------EVENT LISTENERS------------------>

window.addEventListener('load', fetchAllData)
window.addEventListener('load', () => {
  welcomeName.innerText = `WELCOME BACK, ${traveler.getTravelerFirstName(2)}`
})
// pastTripsButton.addEventListener('click', travel)





// <----------------FUNCTIONS----------------------->


function fetchAPIData(travelData) {
  const fetchedData = fetch(`http://localhost:3001/api/v1/${travelData}`)
  .then(response => response.json())
  .catch(error => console.log(error))
  return fetchedData
}

function fetchAllData() {
  Promise.all([fetchAPIData('travelers'), fetchAPIData('destinations'), fetchAPIData('trips')])
    .then((data) => {
      // console.log(data[0].travelers)
      travelersData = data[0].travelers
      // console.log(travelersData)
      destinationsData = data[1].destinations
      tripsData = data[2].trips
    })
    .then(() => {
      traveler = new Traveler(travelersData, destinationsData, tripsData)
      // travelersData.find(element => element.id === 2)
      // find user ID
    })
}

// function travel() {
//   console.log(tripsData)
//   console.log(user)
// }








