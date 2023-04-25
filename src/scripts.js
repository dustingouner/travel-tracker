// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import Traveler from '../src/traveler';
import Destination from './destination';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/boat_background.png'

// console.log('This is the JavaScript entry file - your code begins here.');

// <----------------GLOBAL VARIABLES----------------->
let travelersData, tripsData, destinationsData, traveler, destinations, userID


// <----------------QUERY SELECTORS------------------>
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
const loginButton = document.querySelector('.login-button')
const userNameLogin = document.getElementById('userNameLogin')
const userPasswordLogin = document.getElementById('userPasswordLogin')
const loginPage = document.getElementById('login-page')
const topContainer = document.getElementById('topContainer')
const tripCardContainer = document.getElementById('tripCardContainer')

// <----------------EVENT LISTENERS------------------>



window.addEventListener('load', fetchAPI)

estTripButton.addEventListener('click', displayTripEstimate)
bookTripButton.addEventListener('click', bookNewTrip)
loginButton.addEventListener('click', (event) => {
  event.preventDefault()
  loginAttempt(userNameLogin.value, userPasswordLogin.value)})

// <----------------FUNCTIONS----------------------->

function fetchAPI() {
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
    destinations = new Destination(destinationsData)
    if(traveler) {
      updateDom()
    }
  })
  .catch(error => console.log(error))
}

function loginAttempt(user, pass) {
  let userID = parseInt(user.replace('traveler', ''))
    if (!user || !user.includes('traveler') || !travelersData.find(traveler => traveler.id === userID && traveler.id > 0 && pass=== "travel")) {
      alert('Please enter in correct user name or password!')
    } else {
      let currentTraveler = travelersData.find(traveler => traveler.id === userID)
      traveler = new Traveler(currentTraveler)
      updateDom()
    }
}

function updateDom() {
  displayTravelerPage()
  displayTravelerName()
  displayTotalTravelCost()
  displayPastTrips(tripsData)
  displayPendingTrips(tripsData)
  disablePastDates()
  addDestinationSelection(destinationsData)
}

function displayTravelerName() {
  welcomeName.innerText = `Welcome Back, ${traveler.getTravelerFirstName()}!`
}

function displayTotalTravelCost() {
  totalSpend.innerText = `${traveler.calculateTotalAnnualSpend(tripsData, destinationsData)}`
}

function displayPastTrips(trips) {
  const pastTrips = traveler.getPastTrips(trips)
  pastTripContainer.innerHTML = ''
  const addPastTrips = pastTrips.forEach(trip => {
    const destID = trip.destinationID
    const destinationInfo = destinations.getDestinationInfo(destID)
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

function displayPendingTrips(tripsData) {
  pendingTripContainer.classList.remove('hidden')
  const pendingTrips = traveler.getPendingTrips(tripsData)
  pendingTripContainer.innerHTML = ''
  const addPendingTrips = pendingTrips.forEach(trip => {
    const destID = trip.destinationID
    const destinationInfo = destinations.getDestinationInfo(destID)
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
  destinationsData.forEach(destination => {
    destSelection.innerHTML += `
    <option class="destSelection" value="${destination.destination}" id="${destination.id}">${destination.destination}</option>
    `
  })
}

function displayTripEstimate() {
  const options = select.options
  const destID = parseInt(options[options.selectedIndex].id)
  if(!inputDate.value || !inputDuration.value || !inputTravelers.value || !destID) {
    window.alert('Please make sure to select a date and destination and make sure to fill in the number of travelers and duration.')
  } else {
    const estimatedTripCost = destinations.estimateTripCost(destID, parseInt(inputDuration.value), parseInt(inputTravelers.value))
    estCost.innerText = `Est cost: ${estimatedTripCost}`
  }
}

function bookNewTrip() {
  const options = select.options
  const destID = parseInt(options[options.selectedIndex].id)
  const bookingDate = reformatDate()
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
    .then(response => response.json())
    .then(() => {
      fetchAPI()
      inputTravelers.value = ''
      inputDuration.value = ''
      inputDate.value = ''
    })
  }
}

function reformatDate() {
  let originalDate = inputDate.value
  let dateArray = originalDate.split("-")
  let reformattedDate = dateArray.join("/")
  return reformattedDate
}

function displayTravelerPage() {
  loginPage.classList.add('hidden')
  topContainer.classList.remove('hidden')
  tripCardContainer.classList.remove('hidden')
}



