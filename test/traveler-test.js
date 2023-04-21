import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/traveler'
import mockData from '../src/data/mockData'


// describe('See if the tests are running', function() {
//   it('should return true', function() {
//     expect(true).to.equal(true);
//   });
// });

describe('Traveler', function() {
  let traveler1, traveler2, traveler3, allDestinations, allTrips
  this.beforeEach(function() {
    allDestinations = mockData.destinations 
    allTrips = mockData.trips
    traveler1 = new Traveler(mockData.travelers[1], allDestinations, allTrips)//traveler id 2
    traveler2 = new Traveler(mockData.travelers[2], allDestinations, allTrips)//traveler id 3
    traveler3 = new Traveler(mockData.travelers[6], allDestinations, allTrips)//traveler id 7
  })

it('should be a function', function () {
    expect(Traveler).to.be.a('function')
});

it('should be a instance of new Traveler', function () {
  expect(traveler1).to.be.instanceOf(Traveler)
});
it('should have an id and name', function() {
  expect(traveler1.id).to.equal(2)
  expect(traveler1.name).to.equal('Rachael Vaughten')
})
it('should be able to store pending trips', function() {
  expect(traveler1.pendingTrips).to.deep.equal([])
})
it('should be able to add pending trips', function() {
  expect(traveler1.getPendingTrips(allTrips)).to.deep.equal([
    {
      "id": 171,
      "userID": 2,
      "destinationID": 43,
      "travelers": 1,
      "date": "2020/12/27",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
      }
  ])
  expect(traveler1.pendingTrips).to.deep.equal([
    {
      "id": 171,
      "userID": 2,
      "destinationID": 43,
      "travelers": 1,
      "date": "2020/12/27",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
      }
  ])
})
it('should be able to store past trips', function() {
  expect(traveler1.getPastTrips(allTrips)).to.deep.equal([
    {
      "id": 89,
      "userID": 2,
      "destinationID": 10,
      "travelers": 5,
      "date": "2019/09/27",
      "duration": 13,
      "status": "approved",
      "suggestedActivities": []
    },
    {
      "id": 100,
      "userID": 2,
      "destinationID": 6,
      "travelers": 6,
      "date": "2020/3/28",
      "duration": 10,
      "status": "approved",
      "suggestedActivities": []
    },
  ])
})
it('should be able to store upcoming trips', function() {
  expect(traveler1.upcomingTrips).to.deep.equal([])
})
it('should be able to calculate total amount spent for all time', function() {
  expect(traveler1.calculateTotalAnnualSpend(allTrips)).to.equal(10406)
})
it.skip('should be able to book a new trip and return an estimated cost based on the number of travelers, destination, and duration', function() {
  expect(traveler1.upcomingTrips).to.deep.equal([])
})
})