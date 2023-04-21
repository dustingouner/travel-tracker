const travelers = [
  {
  "id": 1,
  "name": "Ham Leadbeater",
  "travelerType": "relaxer"
  },
  {
  "id": 2,
  "name": "Rachael Vaughten",
  "travelerType": "thrill-seeker"
  },
  {
  "id": 3,
  "name": "Sibby Dawidowitsch",
  "travelerType": "shopper"
  },
  {
  "id": 4,
  "name": "Leila Thebeaud",
  "travelerType": "photographer"
  },
  {
  "id": 5,
  "name": "Tiffy Grout",
  "travelerType": "thrill-seeker"
  },
  {
  "id": 6,
  "name": "Laverna Flawith",
  "travelerType": "shopper"
  },
  {
  "id": 7,
  "name": "Emmet Sandham",
  "travelerType": "relaxer"
  },
  {
  "id": 8,
  "name": "Carlin O'Reilly",
  "travelerType": "history buff"
  },
  {
  "id": 9,
  "name": "Natalee Deegin",
  "travelerType": "relaxer"
  },
  {
  "id": 10,
  "name": "Rickie Jodlowski",
  "travelerType": "relaxer"
  },
]

const trips = [
  {
    "id": 3,
    "userID": 3,
    "destinationID": 22,
    "travelers": 4,
    "date": "2022/05/22",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 10,
    "userID": 9,
    "destinationID": 50,
    "travelers": 6,
    "date": "2022/07/23",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 33,
    "userID": 6,
    "destinationID": 36,
    "travelers": 5,
    "date": "2020/03/26",
    "duration": 19,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 65,
    "userID": 3,
    "destinationID": 35,
    "travelers": 4,
    "date": "2020/03/21",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 74,
    "userID": 9,
    "destinationID": 31,
    "travelers": 5,
    "date": "2020/03/05",
    "duration": 13,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 76,
    "userID": 7,
    "destinationID": 17,
    "travelers": 5,
    "date": "2019/10/22",
    "duration": 20,
    "status": "approved",
    "suggestedActivities": []
  },
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
    "id": 84,
    "userID": 7,
    "destinationID": 1,
    "travelers": 1,
    "date": "2020/11/23",
    "duration": 19,
    "status": "pending",
    "suggestedActivities": []
  },
  {
    "id": 98,
    "userID": 7,
    "destinationID": 12,
    "travelers": 6,
    "date": "2020/10/6",
    "duration": 16,
    "status": "pending",
    "suggestedActivities": []
  },
  {
    "id": 171,
    "userID": 2,
    "destinationID": 43,
    "travelers": 1,
    "date": "2020/12/27",
    "duration": 18,
    "status": "pending",
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
]

const destinations = [
  {
    "id": 1,
    "destination": "Lima, Peru",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 400,
    "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "overview of city buildings with a clear sky"
  },
  {
    "id": 2,
    "destination": "Stockholm, Sweden",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 780,
    "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with boats on the water during the day time"
  },
  {
    "id": 7,
    "destination": "Paris, France",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 395,
    "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    "alt": "city during the day time with eiffel tower"
  },
  {
    "id": 10,
    "destination": "Toronto, Canada",
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 450,
    "image": "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"
    },
  {
    "id": 17,
    "destination": "Jaipur, India",
    "estimatedLodgingCostPerDay": 30,
    "estimatedFlightCostPerPerson": 1200,
    "image": "https://images.unsplash.com/photo-1534758607507-754e582adfa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "a courtyard with trees and mountain in the distance"
  },
  {
    "id": 22,
    "destination": "Rome, Italy",
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 650,
    "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "people standing inside a colosseum during the day"
  }, 
  {
    "id": 31,
    "destination": "Colombo, Sri Lanka",
    "estimatedLodgingCostPerDay": 55,
    "estimatedFlightCostPerPerson": 1300,
    "image": "https://images.unsplash.com/photo-1578159802020-13ec49d669df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "people walking inside flea market"
  },
  {
    "id": 35,
    "destination": "Anchorage, Alaska",
    "estimatedLodgingCostPerDay": 200,
    "estimatedFlightCostPerPerson": 100,
    "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "man riding on kayak surrounded by mountains"
  },
  {
    "id": 36,
    "destination": "Reykjavík, Iceland",
    "estimatedLodgingCostPerDay": 900,
    "estimatedFlightCostPerPerson": 120,
    "image": "https://images.unsplash.com/photo-1515005319369-c4406c3f832b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    "alt": "frozen river in the middle of rock mountains"
  },
  {
    "id": 50,
    "destination": "Hobart, Tasmania",
    "estimatedLodgingCostPerDay": 1400,
    "estimatedFlightCostPerPerson": 75,
    "image": "https://images.unsplash.com/photo-1506982724953-b1fbe939e1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "alt": "person sitting on brown rock in front of small body of water"
  },
  {
    "id": 43,
    "destination": "Nassau, The Bahamas",
    "estimatedLodgingCostPerDay": 550,
    "estimatedFlightCostPerPerson": 90,
    "image": "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80",
    "alt": "aerial photography of white and blue cruise ships during daytime"
    },
    {
    "id": 6,
    "destination": "Jakarta, Indonesia",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 890,
    "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "lit up city at night"
    },
]




export default { travelers, trips, destinations }