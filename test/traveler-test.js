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
  let traveler1, traveler2, allDestinations, allTrips, travelersData
  this.beforeEach(function() {
    allDestinations = mockData.destinations 
    allTrips = mockData.trips
    travelersData = mockData.travelers
    traveler1 = new Traveler(travelersData[1])//traveler id 2
    traveler2 = new Traveler(travelersData[2])//traveler id 3
  })

  it('should be a function', function () {
      expect(Traveler).to.be.a('function')
  });

  it('should be a instance of new Traveler', function () {
    expect(traveler1).to.be.instanceOf(Traveler)
  });

  it('should be able to return a travelers id', function() {
    expect(traveler1.getTravelerID()).to.equal(2)
    expect(traveler2.getTravelerID()).to.equal(3)
  });

  it('should be able to return a travelers first name', function() {
    expect(traveler1.getTravelerFirstName()).to.equal('Rachael')
    expect(traveler2.getTravelerFirstName()).to.equal('Sibby')
  })

  it('should be able to filter and return pending trips', function() {
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
  })

  it('should be able to filter and return past trips', function() {
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

  it('should be able to calculate total amount spent for all time', function() {
    expect(traveler1.calculateTotalAnnualSpend(allTrips, allDestinations)).to.equal('$10,406')
    expect(traveler2.calculateTotalAnnualSpend(allTrips, allDestinations)).to.equal('$8,943')
  })
})