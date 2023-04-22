// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import Traveler from '../src/traveler';
import Destination from './destination';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/new-zealand.png'


// console.log('This is the JavaScript entry file - your code begins here.');

// <----------------GLOBAL VARIABLES----------------->
let travelersData, tripsData, destinationsData, traveler, destinations


// <----------------QUERY SELECTORS------------------>
const pastTripsButton = document.querySelector('.nav-trip-selection-button')
const welcomeName = document.querySelector('.header-welcome-message')
const totalSpend = document.querySelector('.user-annual-amount-spent')
const cardImage = document.querySelector('.card-image')
const cardTitle = document.querySelector('.dest-title')
const cardDate = document.querySelector('.dest-date')
const cardTravelerNum = document.querySelector('.traveler-number')
const cardTravelerDuration = document.querySelector('.traveler-duration')
const travelCard = document.querySelector('.media-element')
const cardContainer = document.querySelector('.media-scroller')
const pendingTripContainer = document.getElementById('pendingTrips')





// <----------------EVENT LISTENERS------------------>

window.addEventListener('load', () => {

  function fetchAPIData(travelData) {
    const fetchedData = fetch(`http://localhost:3001/api/v1/${travelData}`)
    .then(response => response.json())
    .catch(error => console.log(error))
    return fetchedData
  }
  
  Promise.all([fetchAPIData('travelers'), fetchAPIData('destinations'), fetchAPIData('trips')])
  .then((data) => {
    // console.log(data[0].travelers)
    travelersData = data[0].travelers
    // console.log(travelersData)
    destinationsData = data[1].destinations
    tripsData = data[2].trips
  })
  .then(() => {
    let currentTraveler = travelersData.find(traveler => traveler.id === 2)
    traveler = new Traveler(currentTraveler)
    destinations = new Destination(destinationsData)
    displayTravelerName()
    displayTotalTravelCost()
    displayPastTrips(tripsData)
    displayPendingTrips(tripsData)
  })
  
})
  

pastTripsButton.addEventListener('click', travel)





// <----------------FUNCTIONS----------------------->


function travel() {
  console.log(traveler)
}

function displayTravelerName() {
  welcomeName.innerText = `Welcome Back, ${traveler.getTravelerFirstName()}!`
}

function displayTotalTravelCost() {
  totalSpend.innerText = `${traveler.calculateTotalAnnualSpend(tripsData, destinationsData)}`
}

function displayPastTrips(trips) {
  const pastTrips = traveler.getPastTrips(trips)
  const addPastTrips = pastTrips.forEach(trip => {
    const destID = trip.destinationID
    const destinationInfo = destinations.getDestinationInfo(destID)
    // console.log(destID)
    // console.log(destinationInfo)
    // console.log(trip)
    // travelCard.innerHTML = ''
    cardContainer.innerHTML += `
    <article class="media-element">
      <img class="card-image" src="${destinationInfo.image}" alt="${destinationInfo.alt}">
        <div class="card-info">
          <span class="dest-title">${destinationInfo.destination}</span>
          <span class="dest-date">Date: ${trip.date}</span>
          <span class="traveler-number">Travelers: ${trip.travelers}</span>
          <span class="traveler-duration">Duration: ${trip.duration} days</span>
         </div>
    </article>`
  })
}

function displayPendingTrips(trips) {
  const pendingTrips = traveler.getPendingTrips(trips)
  console.log('pending', pendingTrips)
  const addPendingTrips = pendingTrips.forEach(trip => {
    const destID = trip.destinationID
    const destinationInfo = destinations.getDestinationInfo(destID)
    // console.log(destID)
    // console.log(destinationInfo)
    // console.log(trip)
    // travelCard.innerHTML = ''
    pendingTripContainer.innerHTML += `
    <article class="media-element">
      <img class="card-image" src="${destinationInfo.image}" alt="${destinationInfo.alt}">
        <div class="card-info">
          <span class="dest-title">${destinationInfo.destination}</span>
          <span class="dest-date">Date: ${trip.date}</span>
          <span class="traveler-number">Travelers: ${trip.travelers}</span>
          <span class="traveler-duration">Duration: ${trip.duration} days</span>
        </div>
    </article>`
  })
}

function disablePastDates() {
  let dateToday = new Date()
  let month = 
}







