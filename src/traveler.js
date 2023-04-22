class Traveler {
  constructor(travelerObj, destinationsData, tripsData) {
  this.tripsAll = tripsData
  this.destinationsAll = destinationsData
  this.traveler = travelerObj
  this.id = travelerObj.id
  this.name = travelerObj.name
 
  }

  getTravelerID() {
    return this.traveler.id
  }

  getTravelerFirstName() {
    console.log(this.traveler)
    return this.name.split(' ')[0]
  }

  getPendingTrips(allTrips) {
    const filterPending = allTrips.filter(trip => {
      if(trip.userID === this.id && trip.status === 'pending'){
        return trip
      }
    }) 
    return filterPending
  }
    
  getPastTrips(allTrips) {
    const filterPast = allTrips.filter(trip => {
      if(trip.userID === this.id && trip.status === 'approved'){
      return trip
      }
    }) 
    return filterPast
  }

  calculateTotalAnnualSpend(allTrips) {
    let travelerPastTrips = this.getPastTrips(allTrips)
    const totalCost = travelerPastTrips.reduce((acc, trip) => {
      const destination = this.destinationsAll.find(destination => destination.id === trip.destinationID)
      const flightCost = destination.estimatedFlightCostPerPerson * trip.travelers
      const lodgingCost = destination.estimatedLodgingCostPerDay * trip.duration
      return acc + flightCost + lodgingCost
    }, 0)
    return totalCost * 1.1
  }
}





export default Traveler;

