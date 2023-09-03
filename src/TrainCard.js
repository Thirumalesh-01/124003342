// src/components/TrainCard.js
import React from 'react';


function TrainCard({ train }) {
    return (
      <li>
        <h2>{train.trainName}</h2>
        <p>Departure Time in Hours: {train.departureTime.Hours}</p>
        <p>Departure Time  Minutes: {train.departureTime.Minutes}</p>
        <p>Departure Time Seconds: {train.departureTime.Seconds}</p>
        <p>trainNumber: {train.trainNumber}</p>
        <p>seatsAvailable: {train.seatsAvailable.sleeper}</p>
       
        <p>Train Delay: {train.delayedBy} minutes</p>
      </li>
    );
  }

export default TrainCard;
