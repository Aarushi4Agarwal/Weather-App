import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
  const [location,setLocation] = ('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=12eb8c3557a3b3788e6ef25b1482f69c`;
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
          axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data);
          });
    }
  }

  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Dallas</p>
          </div>
          <div className='temp'>
            <h1>60°F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>65°F</p>
            <p className='bold'>Feels Like</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
            <p className='bold'>Humidity</p>
          </div>
          <div className='wind'>
            <p>12 MPH</p>
            <p className='bold'>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
