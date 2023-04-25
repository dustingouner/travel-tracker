import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/destination'
import mockData from '../src/data/mockData'

describe('Destination', function() {
  let destination1, destination2, allDestinations, allTrips, travelersData
  this.beforeEach(function() {
    allDestinations = mockData.destinations 
    allTrips = mockData.trips
    travelersData = mockData.travelers
    destination1 = new Destination(allDestinations)//destination id 1, lodge: 70, flight: 400
    destination2 = new Destination(allDestinations)//destination id 2, lodge: 100, flight: 780
  })

  it('should be a function', function () {
      expect(Destination).to.be.a('function')
  });

  it('should be a instance of new Traveler', function () {
    expect(destination1).to.be.instanceOf(Destination)
    expect(destination2).to.be.instanceOf(Destination)
  });

  it('should take in a an id number and return the destination info', function () {
    expect(destination1.getDestinationInfo(1)).to.deep.equal({
       "id": 1,
        "destination": "Lima, Peru",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 400,
        "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        "alt": "overview of city buildings with a clear sky"
    })
    expect(destination2.getDestinationInfo(2)).to.deep.equal({
       "id": 2,
        "destination": "Stockholm, Sweden",
        "estimatedLodgingCostPerDay": 100,
        "estimatedFlightCostPerPerson": 780,
        "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "city with boats on the water during the day time"
    })
  });

  it('should take in destination ID, duration, and number of travelers then return an estimated cost', function () {
      expect(destination1.estimateTripCost(1, 10, 5)).to.equal('$2,970')
      expect(destination2.estimateTripCost(2, 10, 5)).to.equal('$5,390')
  });
})