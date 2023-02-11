import React from "react";

const Weather = ({ data }) => {
  return (
    <div>
      {/* Main container to display the weather information */}
      <div className="flex justify-between px-5">
        {/* Left side container to display city name and weather description */}
        <div className="flex flex-col justify-center">
          <p className="py-1 text-5xl font-semibold text-white font-inter">
            {/* Display city name */}
            {data.city}
          </p>
          <p className="text-2xl font-semibold text-white font-inter first-letter:capitalize">
            {/* Display weather description */}
            {data.weather[0].description}
          </p>
        </div>
        {/* Right side container to display weather icon */}

        <img
          alt="Weather Icon."
          className="weather-icon"
          src={`/icons/${data.weather[0].icon}.png`}
        />
      </div>
      {/* Lower container to display temperature, feels like, wind, humidity, and pressure information */}
      <div className="flex justify-between p-5">
        {/* Left side container to display temperature */}
        <div>
          <p className="mr-5 font-semibold text-white text-8xl first-letter:capitalize">
            {/* Display temperature rounded to the nearest integer */}
            {Math.round(data.main.temp)}°C
          </p>
        </div>
        {/* Right side container to display feels like, wind, humidity, and pressure */}
        <div className="min-w-0">
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Feels like</p>
            <p className="ml-10 text-white whitespace-nowrap">
              {/* Display feels like rounded to the nearest integer */}
              {Math.round(data.main.feels_like)}°C
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Wind</p>
            <p className="ml-10 text-white whitespace-nowrap">
              {/* Display wind speed */}
              {data.wind.speed} m/s
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Humidity</p>
            <p className="ml-10 text-white whitespace-nowrap">
              {/* Display humidity */}
              {data.main.humidity}%
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-white whitespace-nowrap">Pressure</p>
            <p className="ml-10 text-white whitespace-nowrap">
              {/* Display pressure */}
              {data.main.pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
