import { useState } from "react";
import { Search, Forecast, Current } from "./components";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api";
function App() {
  // Declare state variables for weather and forecast
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // Function to handle changes in search input
  const handleOnSearchChange = (searchData) => {
    // Split search input into latitude and longitude
    const [lat, lon] = searchData.value.split(", ");
    console.log(searchData.value);

    // Fetch weather data from API
    const WeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Fetch forecast data from API
    const ForecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Wait for both API calls to finish
    Promise.all([WeatherFetch, ForecastFetch])
      .then(async (response) => {
        // Extract data from responses
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // Update weather and forecast state with extracted data
        setWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => {
        // Log error in case of fetch failure
        console.log(error);
      });
  };

  // Return the React component
  return (
    <div className="w-3/5 h-full p-5 mx-auto bg-indigo-300 font-inter overflow-y">
      <h1 className="p-5 text-5xl font-semibold text-center text-white">
        DevCast Weather App
      </h1>
      <h3 className="p-5 text-3xl font-semibold text-center text-white">
        A simple weather app built for development purposes.
      </h3>
      {/* Render the search component with onSearchChange prop */}
      <Search onSearchChange={handleOnSearchChange} />
      {/* Render weather and forecast components if data is available */}
      {weather && <Current data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
