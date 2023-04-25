class Destination {
  constructor(destinationData) {
  this.destinations = destinationData
  }

  getDestinationInfo(destinationID) {
    const currentDestination = this.destinations.find(destination => destination.id === destinationID)
    return currentDestination
  }

  estimateTripCost(destinationID, duration, numTravelers) {
    const destination = this.getDestinationInfo(destinationID)
    const flightCost = destination.estimatedFlightCostPerPerson * numTravelers
    const lodgingCost = destination.estimatedLodgingCostPerDay * duration
    const estimatedCost = Math.round((flightCost + lodgingCost) * 1.1)
    const stringNum = estimatedCost.toLocaleString('en-US')
    return `$${stringNum}`
  }
}


export default Destination;