import React, { useEffect, useState } from "react";

const Weather = () =>{
  const [city, setcity] = useState(null);
  const [search, setsearch] = useState('Kolkata');

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c4c5a98be091342cfc7475b89dac0079`);
      const resJson = await res.json();
      setcity(resJson.main);
    }
    fetchApi();
  }, [search])

  // Define the temperature threshold values
  const temperature = city ? city.temp : 0; // Assuming the API response has a "temp" property

  return (
     <>
      <div className="box" style={{ backgroundColor: temperature > 27 ? "#f7ad4d" : temperature < 27 ? "lightblue" : "initial" }}>
        <div className="inputData">
          <input type="search" className="inputFeild" value={search} onChange={(event) => { setsearch(event.target.value) }}></input>
        </div>
        {!city ? (
          <p><br></br>No data found!</p>) : (
            <div>
              <div className="info">
                <h2 className="location"><i className="fa-solid fa-street-view"></i>{search}</h2>
                <h1 className="temp">{city.temp}°C</h1>
                <h3 className="tempmin_max">Max : {city.temp_max}°C | Min : {city.temp_min}°C </h3>
                <h4 className="tempmin_max">Humidity : {city.humidity}% | Pressure : {city.pressure}"Hg</h4>
              </div>
              <div className="wave-one"></div>
              <div className="wave-two"></div>
              <div className="wave-three"></div>
            </div>
          )}
      </div>
    </>
  );
}

export default Weather