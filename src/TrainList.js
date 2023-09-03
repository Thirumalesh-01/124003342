// src/components/TrainList.js
import React from 'react';
import TrainCard from './TrainCard';

const initialTrains = [
  {
    "trainName": "Chennai Exp",
    "trainNumber": "2344",
    "departureTime": {
      "Hours": 21,
      "Minutes": 35,
      "Seconds": 0
    },
    "seatsAvailable": {
      "sleeper": 3,
      "Ac": 5
    },
    "delayedBy": 15
  },
  {
    "trainName": "MUmbai Express",
    "trainNumber": "2344",
    "departureTime": {
      "Hours": 12,
      "Minutes": 34,
      "Seconds": 3
    },
    "seatsAvailable": {
      "sleeper": 2,
      "Ac": 6
    },
    "delayedBy": 26
  },
  {
    "trainName": "Tripura Express",
    "trainNumber": "2344",
    "departureTime": {
      "Hours": 21,
      "Minutes": 35,
      "Seconds": 0
    },
    "seatsAvailable": {
      "sleeper": 3,
      "Ac": 5
    },
    "delayedBy": 15
  },
  {
    "trainName": "Rajdhani Express from Delhi to Mumbai",
    "trainNumber": "2344",
    "departureTime": {
      "Hours": 21,
      "Minutes": 35,
      "Seconds": 0
    },
    "seatsAvailable": {
      "sleeper": 3,
      "Ac": 5
    },
    "delayedBy": 15
  },
  {
    "trainName": "Thannjavur Express from Agartala",
    "trainNumber": "2344",
    "departureTime": {
      "Hours": 21,
      "Minutes": 35,
      "Seconds": 0
    },
    "seatsAvailable": {
      "sleeper": 3,
      "Ac": 5
    },
    "delayedBy": 15
  },
  // ...other train objects
];

function TrainList() {
  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {initialTrains.map((train) => (
          <TrainCard key={train.trainNumber} train={train} />
        ))}
      </ul>
    </div>
  );
}


export default TrainList;





