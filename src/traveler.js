 class Traveler {
  constructor(travelerDataObj) {
  this.traveler = travelerDataObj
  
  }

  getTravelerID() {
    return this.traveler.id
  }

  getTravelerFirstName() {
    return this.traveler.name.split(' ')[0]
  }

  getPendingTrips(allTrips) {
    const filterPending = allTrips.filter(trip => {
      if(trip.userID === this.traveler.id && trip.status === 'pending'){
        return trip
      }
    }) 
    return filterPending
  }
    
  getPastTrips(allTrips) {
    const filterPast = allTrips.filter(trip => {
      if(trip.userID === this.traveler.id && trip.status === 'approved'){
      return trip
      }
    }) 
    return filterPast
  }

  calculateTotalAnnualSpend(allTrips, allDestinations) {
    let travelerPastTrips = this.getPastTrips(allTrips)
    const totalCost = travelerPastTrips.reduce((acc, trip) => {
      const destination = allDestinations.find(destination => destination.id === trip.destinationID)
      const flightCost = destination.estimatedFlightCostPerPerson * trip.travelers
      const lodgingCost = destination.estimatedLodgingCostPerDay * trip.duration
      return acc + Math.round(((flightCost + lodgingCost) * 1.1))
    }, 0)
    return  `$${totalCost.toLocaleString('en-US')}`
    console.log(annualStrNum)
  }
}





export default Traveler;

