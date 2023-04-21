class Traveler {
  constructor(travelerObj, destinationsObj, tripsObj) {
  this.id = travelerObj.id
  this.name = travelerObj.name
  this.destinationsAll = destinationsObj
  this.tripsAll = tripsObj
  this.pendingTrips = []
  this.pastTrips = []
  this.upcomingTrips = []
  this.totalSpent = 0
  
  }

  // getUserID() {

  // }
//   getData(travelerID) {
//     return this.data.travelers.find(currentUser => currentUser.id === travelerID)
//   }
// }


  getPendingTrips(allTrips) {
    const filterPending = allTrips.filter(trip => {
      if(trip.userID === this.id && trip.status === 'pending'){
        return trip
      }
    }) 
    filterPending.forEach(trip => this.pendingTrips.push(trip))
    return this.pendingTrips
  }
  // Do I need a method to return pending trip destination data to use image, alt, cost for cards?
    
  getPastTrips(allTrips) {
    const filterPast = allTrips.filter(trip => {
      if(trip.userID === this.id && trip.status === 'approved'){
      return trip
      }
    }) 
    filterPast.forEach(trip => this.pastTrips.push(trip))
    return this.pastTrips
  }

  // addDestinationInfoToTrip() {

  // }

  calculateTotalAnnualSpend(allTrips) {
    this.getPastTrips(allTrips)
    const totalCost = this.pastTrips.reduce((acc, trip) => {
      const destination = this.destinationsAll.find(destination => destination.id === trip.destinationID)
      const flightCost = destination.estimatedFlightCostPerPerson * trip.travelers
      const lodgingCost = destination.estimatedLodgingCostPerDay * trip.duration
      return acc + flightCost + lodgingCost
    }, 0)
    return totalCost * 1.1
  }
}



// methods
// getTrips() - function to fetch the travelers trip data, push data into travelers trip property
// calculateTotalSpent() - calculate total amount spent by traveler this year, add 10% travel agent fee

export default Traveler;

