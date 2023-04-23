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
const pastTripsButton = document.querySelector('.past-trips-button')
const pendingTripsButton = document.querySelector('.pending-trips-button')
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
const pastTripContainer = document.getElementById('pastTrips')
const inputDate = document.getElementById('inputDate')
const destSelection = document.getElementById('selectDestination')
const estTripButton = document.querySelector('.estimate-trip-button')
const bookTripButton = document.querySelector('.book-trip-button')
const estCost = document.querySelector('.est-cost')
const inputDuration = document.getElementById('inputDuration')
const inputTravelers = document.getElementById('inputTravelers')
const select = document.querySelector('#selectDestination')
const destOptions = document.querySelector('.destOptions')


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
    travelersData = data[0].travelers
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
    disablePastDates()
    addDestinationSelection(destinationsData)
  })
  .catch(error => console.log(error))
})
  

// pastTripsButton.addEventListener('click', travel)
estTripButton.addEventListener('click', displayTripEstimate)
bookTripButton.addEventListener('click', bookNewTrip)
// pendingTripsButton.addEventListener('click', displayPendingTrips)




// <----------------FUNCTIONS----------------------->


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
    cardContainer.innerHTML += `
    <article class="media-element" tabindex= "0">
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
  pendingTripContainer.classList.remove('hidden')
  const pendingTrips = traveler.getPendingTrips(trips)
  const addPendingTrips = pendingTrips.forEach(trip => {
    const destID = trip.destinationID
    const destinationInfo = destinations.getDestinationInfo(destID)
    pendingTripContainer.innerHTML += `
    <article class="media-element" tabindex="0">
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
  var date = new Date()
  var todaysDate = date.getDate()
  var month = date.getMonth() + 1
  if(todaysDate < 10) {
    todaysDate = '0' + todaysDate
  }
  if(month < 10) {
    month = '0' + month
  }
  var year = date.getUTCFullYear()
  var minDate = year + '-' + month + '-' + todaysDate
  inputDate.setAttribute('min', minDate)
}

function addDestinationSelection(destinationsData) {
  console.log(destinationsData)
  destinationsData.forEach(destination => {
    destSelection.innerHTML += `
    <option class="destSelection" value="${destination.destination}" id="${destination.id}">${destination.destination}</option>
    `
  })
}

function displayTripEstimate() {
  const options = select.options
  const destID = parseInt(options[options.selectedIndex].id)
  // console.log('date', inputDate.value)
  // console.log('duration', parseInt(inputDuration.value))
  // console.log('travelers', parseInt(inputTravelers.value))
  // console.log('destination', destID)
  // console.log('traveler', traveler.getTravelerID())//returns traveler id #5
  const estimatedTripCost = destinations.estimateTripCost(destID, parseInt(inputDuration.value), parseInt(inputTravelers.value))
  console.log(estimatedTripCost)
  estCost.innerText = `Est cost: ${estimatedTripCost}`
}




function bookNewTrip(event) {
  event.preventDefault()
  const options = select.options
  const destID = parseInt(options[options.selectedIndex].id)
  const bookingDate = reformatDate()
  // console.log('tripID', tripsData.length + 1)
  // console.log('userID', traveler.getTravelerID())
  // console.log('destID', destID)
  // console.log('travelers', parseInt(inputTravelers.value))
  // console.log('date', reformatDate())
  // console.log('duration', parseInt(inputDuration.value))
  if(!inputDate.value || !inputDuration.value || !inputTravelers.value || !destID) {
    window.alert('Please make sure to select a date and destination and make sure to fill in the number of travelers and duration.')
  } else {
    fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify({  
        id: tripsData.length + 1,
        userID: traveler.getTravelerID(),
        destinationID: destID,
        travelers: parseInt(inputTravelers.value), 
        date: bookingDate, 
        duration: parseInt(inputDuration.value), 
        status: 'pending', 
        suggestedActivities: []}), 
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(() => {
      displayPendingTrips(tripsData)
      location.reload()
    })
  }
}

function reformatDate() {
  let originalDate = inputDate.value
  let dateArray = originalDate.split("-")
  let reformattedDate = dateArray.join("/")
  return reformattedDate
}

