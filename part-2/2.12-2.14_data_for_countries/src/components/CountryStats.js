import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../index.css";

const CountryStats = ({ data, search }) => {
  const country = data.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
  const [weather, setWeather] = useState({
    current: {
      temperature: "",
      weather_icons: [""],
      wind_speed: "",
      wind_dir: "",
      feelslike: "",
    },
  });

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${country[0].name}&units=m`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <div>
      <h3>{country[0].name}</h3>
      <p>capital {country[0].capital}</p>
      <p>population {country[0].population}</p>
      <h4>Languages</h4>
      <ul>
        {country[0].languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img className="img" src={country[0].flag} alt="flag" />
      <h4>Weather in {country[0].capital}</h4>
      <p>
        temperature: {weather.current.temperature} Celsius, feels like{" "}
        {weather.current.feelslike}
      </p>
      {weather.current.weather_icons[0] !== "" ? (
        <img
          className="img"
          src={weather.current.weather_icons[0]}
          alt="weather"
        />
      ) : (
        <p></p>
      )}

      <p>
        wind: {weather.current.wind_speed} km/h direction{" "}
        {weather.current.wind_dir}
      </p>
    </div>
  );
};

export default CountryStats;
