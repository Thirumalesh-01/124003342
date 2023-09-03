import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Numbers() {

  const [loading, setLoading] = useState(true);
  const [result,setResult] = useState([]);
  const [result2,setResult2] = useState([]);
  const [result3,setResult3] = useState([]);
  
  const final=[];
  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://20.244.56.144/numbers/primes';
    const api2 = 'http://20.244.56.144/numbers/odd';
    const api3 = 'http://20.244.56.144/numbers/rand';


    // Fetch data from the API
    axios.get(apiUrl)
      .then((response) => {
        setResult(response.data); // Assuming API returns an array of trains
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
    axios.get(api2)
      .then((response) => {
        setResult2(response.data); // Assuming API returns an array of trains
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
    axios.get(api3)
      .then((response) => {
        setResult3(response.data); // Assuming API returns an array of trains
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Numbers</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          
           <li>{result.numbers}</li> 
           <li>{result2.numbers}</li> 
          <li> {result3.numbers}</li> 
            

          {/* {trains.map((train) => (
            <TrainCard key={train.trainNumber} train={train} />
          ))} */}
        </ul>
      )}
    </div>
  );
}

export default Numbers;
